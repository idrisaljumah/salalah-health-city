
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { PARTNERS_DATA } from '../constants';

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const PartnersPage: React.FC = () => {
    const { language } = useContext(AppContext);

    const content = {
        title: { en: 'Our Partners', ar: 'شركاؤنا' },
        subtitle: { en: 'We are proud to work with these distinguished organizations to achieve our vision.', ar: 'نحن فخورون بالعمل مع هذه المؤسسات المتميزة لتحقيق رؤيتنا.' },
    };

    return (
        <div className="py-12 sm:py-16 bg-sage min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold font-heading text-moss tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {PARTNERS_DATA.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-surface-primary rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full border border-gray-100 hover:border-moss/20"
                        >
                            <div 
                                className={`w-full h-32 mb-4 flex items-center justify-center p-2 rounded-2xl transition-colors ${!partner.backgroundColor ? (partner.logo ? 'bg-gray-50 group-hover:bg-surface-primary' : 'bg-leaf/25') : ''}`}
                                style={{ backgroundColor: partner.backgroundColor }}
                            >
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name[language]}
                                        className="max-w-full max-h-full object-contain"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="font-heading font-medium text-moss text-lg leading-snug px-3">{partner.name[language]}</span>
                                )}
                            </div>
                            <h3 className={`${partner.logo ? '' : 'sr-only '}font-bold font-heading text-gray-800 group-hover:text-moss transition-colors text-sm sm:text-base mb-2 line-clamp-2`}>
                                {partner.name[language]}
                            </h3>
                             {partner.url && partner.url !== '#' && (
                                <ExternalLinkIcon className="w-4 h-4 text-gray-400 group-hover:text-moss opacity-0 group-hover:opacity-100 transition-opacity mt-auto" />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;
