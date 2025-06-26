import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { execSync, exec } from 'child_process';

const outputDir = path.join(process.cwd(), 'output', 'service-sheet');
const distDir = path.join(process.cwd(), 'dist');
const serverPort = 8081;

// 1. Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 2. Determine the next version number
const getNextVersion = () => {
    const files = fs.readdirSync(outputDir);
    const pdfs = files.filter(file => file.startsWith('primatif-service-sheet-v') && file.endsWith('.pdf'));
    if (pdfs.length === 0) {
        return 1;
    }
    const versions = pdfs.map(file => {
        const match = file.match(/v(\d+)\.pdf$/);
        return match ? parseInt(match[1], 10) : 0;
    });
    return Math.max(...versions) + 1;
};

const generatePdf = async () => {
    console.log('Starting Service Sheet PDF generation process...');

    // 3. Build the project
    console.log('Building the static site...');
    try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log('Build complete.');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }

    // 4. Start a static server
    const server = exec(`npx http-server ${distDir} -p ${serverPort} -c-1 --silent`);
    console.log(`Static server started on port ${serverPort}`);

    // Give server a moment to start
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 5. Launch Puppeteer with fixed viewport
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Set a fixed viewport size for consistent layout (10.625" x 13.75" at 96 DPI = 1020x1320)
    await page.setViewport({ width: 1020, height: 1320 });

    try {
        // 6. Navigate to the service sheet page
        const url = `http://localhost:${serverPort}`;
        console.log(`Navigating to ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle0' });
        
        // Navigate to the service sheet route via React Router
        console.log('Navigating to service sheet route...');
        await page.evaluate(() => {
            window.history.pushState({}, '', '/service-sheet');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
        
        // Wait for the service sheet to load
        await page.waitForSelector('.page-container', { timeout: 10000 });

        // 7. Get all page containers
        const pageContainers = await page.$$('.page-container');
        console.log(`Found ${pageContainers.length} pages to capture`);

        // 8. Take screenshots of each page
        const screenshots = [];
        for (let i = 0; i < pageContainers.length; i++) {
            console.log(`Capturing page ${i + 1}...`);
            
            // Scroll the page into view
            await pageContainers[i].scrollIntoView();
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait for scroll
            
            // Take screenshot of this page container
            const screenshot = await pageContainers[i].screenshot({
                type: 'png',
                fullPage: false
            });
            
            screenshots.push(screenshot);
        }

        // 9. Create PDF from screenshots
        const version = getNextVersion();
        const pdfPath = path.join(outputDir, `primatif-service-sheet-v${version}.pdf`);
        console.log(`Creating PDF from ${screenshots.length} screenshots: ${pdfPath}`);

        // Create a new page for PDF generation
        const pdfPage = await browser.newPage();
        await pdfPage.setViewport({ width: 1020, height: 1320 });

        // Create HTML content with all screenshots
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { margin: 0; padding: 0; }
                .page { 
                    width: 10.625in; 
                    height: 13.75in; 
                    page-break-after: always; 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                }
                .page:last-child { page-break-after: avoid; }
                img { 
                    max-width: 100%; 
                    max-height: 100%; 
                    object-fit: contain;
                }
            </style>
        </head>
        <body>
            ${screenshots.map((_, index) => `
                <div class="page">
                    <img src="data:image/png;base64,${screenshots[index].toString('base64')}" />
                </div>
            `).join('')}
        </body>
        </html>
        `;

        await pdfPage.setContent(htmlContent, { waitUntil: 'networkidle0' });

        // Generate the PDF
        await pdfPage.pdf({
            path: pdfPath,
            width: '10.625in',
            height: '13.75in',
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
        });

        console.log('PDF generated successfully!');

    } catch (error) {
        console.error('Error during PDF generation:', error);
        process.exit(1);
    } finally {
        // 10. Clean up
        await browser.close();
        server.kill();
        console.log('Server stopped.');
    }

    process.exit(0);
};

generatePdf();
