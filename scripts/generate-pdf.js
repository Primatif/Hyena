import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { execSync, exec } from 'child_process';

const outputDir = path.join(process.cwd(), 'output', 'style-guide');
const distDir = path.join(process.cwd(), 'dist');
const serverPort = 8080;

// 1. Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 2. Determine the next version number
const getNextVersion = () => {
    const files = fs.readdirSync(outputDir);
    const pdfs = files.filter(file => file.startsWith('primatif-style-guide-v') && file.endsWith('.pdf'));
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
    console.log('Starting PDF generation process...');

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
    console.log(`Static server started on port ${serverPort} for directory ${distDir}`);

    // Give server a moment to start
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 5. Launch Puppeteer
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        // 6. Navigate to the page
        const url = `http://localhost:${serverPort}`;
        console.log(`Navigating to ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle0' });

        // 7. Generate PDF
        const version = getNextVersion();
        const pdfPath = path.join(outputDir, `primatif-style-guide-v${version}.pdf`);
        console.log(`Generating PDF: ${pdfPath}`);

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            scale: 0.7,
            margin: {
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px'
            }
        });

        console.log('✅ PDF generated successfully!');
    } catch (error)
    {
        console.error('Error during PDF generation:', error);
    } finally {
        // 8. Clean up
        await browser.close();
        server.kill();
        console.log('Static server stopped.');
    }
};

generatePdf();
