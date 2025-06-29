import React from 'react';
import Heading from '../../atoms/Heading/Heading.jsx';
import Text from '../../atoms/Text/Text.jsx';
import Card from '../../atoms/Card/Card.jsx';
import { Image } from '../../atoms/Image/Image.jsx';
import Callout from '../../molecules/Callout/Callout.jsx';
import { brandColors } from '../../../data/colors.js';

const ServiceSection = ({ 
    service,
    imageSrc,
    showQuestions = true,
    layout = "two-column", // "two-column" | "single-column" | "reverse"
    className = ""
}) => {
    const caption = service.description.split('.')[0] + '.';

    const ImageCard = () => (
        <Card variant="default" className="mb-4">
            <Image 
                src={imageSrc} 
                alt={service.title} 
                className="aspect-video w-full rounded-md object-cover" 
            />
            <Text variant="body" className="text-xs italic text-center mt-2" style={{ color: brandColors.SecondaryText }}>
                {caption}
            </Text>
        </Card>
    );

    const ContentSection = () => (
        <div>
            <Text variant="body" className="mb-4 leading-relaxed" style={{ color: brandColors.PrimaryText }}>
                {service.description}
            </Text>
            <ul className="list-disc pl-5 space-y-2">
                {service.benefits.map((item, index) => (
                    <li key={index}>
                        <Text 
                            variant="body" 
                            className="leading-relaxed text-sm" 
                            style={{ color: brandColors.PrimaryText }}
                            dangerouslySetInnerHTML={{ __html: item }} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );

    const ImageAndQuestions = () => (
        <div>
            <ImageCard />
            {showQuestions && service.questions && (
                <Callout variant="info" title="Is this for you?" className="mt-4">
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        {service.questions.map((question, index) => (
                            <li key={index}>
                                <Text variant="body" className="text-sm" style={{ color: brandColors.PrimaryText }}>
                                    {question}
                                </Text>
                            </li>
                        ))}
                    </ul>
                </Callout>
            )}
        </div>
    );

    return (
        <div className={`service-section ${className}`}>
            <Heading level={3} variant="section" className="mb-3" style={{ color: brandColors.PrimaryText }}>
                {service.title}
            </Heading>
            
            {layout === "two-column" && (
                <div className="grid grid-cols-2 gap-6">
                    <ImageAndQuestions />
                    <ContentSection />
                </div>
            )}
            
            {layout === "reverse" && (
                <div className="grid grid-cols-2 gap-6">
                    <ContentSection />
                    <ImageAndQuestions />
                </div>
            )}
            
            {layout === "single-column" && (
                <div className="space-y-6">
                    <ImageCard />
                    <ContentSection />
                    {showQuestions && service.questions && (
                        <Callout variant="info" title="Is this for you?" className="mt-4">
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                {service.questions.map((question, index) => (
                                    <li key={index}>
                                        <Text variant="body" className="text-sm" style={{ color: brandColors.PrimaryText }}>
                                            {question}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        </Callout>
                    )}
                </div>
            )}
        </div>
    );
};

export default ServiceSection;
