
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AXES_DATA } from '../constants';

const BackIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ViewIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);


const AxisSubPage: React.FC = () => {
    const { language, activeAxis, setActiveAxis } = useContext(AppContext);
    const axis = AXES_DATA.find(a => a.id === activeAxis);

    if (!axis) {
        // This case should ideally not be reached if logic is correct
        return (
            <div className="flex justify-center items-center h-full">
                <p>Axis not found. Please go back.</p>
            </div>
        );
    }
    
    // Adjust BackIcon direction for RTL
    const rtlBackIconTransform = language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)';
    const isNumberedList = ['safety', 'community', 'innovation', 'infrastructure', 'environment', 'health', 'education', 'economy', 'tourism'].includes(axis.id);
    let startNumber = 1;
    if (axis.id === 'safety') startNumber = 57;
    if (axis.id === 'innovation') startNumber = 8;
    if (axis.id === 'infrastructure') startNumber = 15;
    if (axis.id === 'environment') startNumber = 20;
    if (axis.id === 'health') startNumber = 31;
    if (axis.id === 'education') startNumber = 63;
    if (axis.id === 'economy') startNumber = 68;
    if (axis.id === 'tourism') startNumber = 74;

    const content = {
        title: { en: 'Criteria', ar: 'المعايير' },
        back: { en: 'Back to Axes', ar: 'العودة إلى المحاور' },
        noCriteria: { en: 'No criteria defined for this axis yet.', ar: 'لم يتم تحديد معايير لهذا المحور بعد.'}
    };

    return (
        <div className="py-12 sm:py-16 bg-white animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <button onClick={() => setActiveAxis(null)} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-health-blue mb-8 transition-colors">
                        <BackIcon className="w-5 h-5" style={{ transform: rtlBackIconTransform }} />
                        <span className="font-medium">{content.back[language]}</span>
                    </button>
                    <div className="text-center mb-10">
                        <div className="inline-block p-4 bg-health-blue/10 rounded-full mb-4">
                            <axis.icon className="w-12 h-12 text-health-blue" />
                        </div>
                        <h1 className="text-3xl font-extrabold font-heading text-health-blue tracking-tight sm:text-4xl">
                            {axis.title[language]}
                        </h1>
                         <p className="mt-3 text-lg text-gray-600">{axis.description[language]}</p>
                    </div>
                    
                    <h2 className="text-2xl font-bold font-heading text-gray-800 mb-6 border-b-2 border-health-green pb-2">{content.title[language]}</h2>

                    {axis.criteria && axis.criteria.length > 0 ? (
                        isNumberedList ? (
                            <ol start={startNumber} className="space-y-4 list-decimal list-outside ms-5">
                                {axis.criteria.map((criterion, index) => (
                                    <li key={index} className="ps-2">
                                        <div className="p-4 bg-health-background rounded-lg shadow-sm">
                                            <span className="text-gray-700 leading-relaxed">{criterion.text[language]}</span>
                                            {criterion.actions && criterion.actions.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    {criterion.actions.map((action, actionIndex) => (
                                                        <a
                                                            key={actionIndex}
                                                            href={action.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 shadow-sm ${
                                                                action.type === 'view'
                                                                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                                                    : 'bg-health-blue text-white hover:bg-opacity-90'
                                                            }`}
                                                        >
                                                            {action.type === 'view' ? <ViewIcon className="w-4 h-4" /> : <DownloadIcon className="w-4 h-4" />}
                                                            <span>{action.label[language]}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <ul className="space-y-4">
                                {axis.criteria.map((criterion, index) => (
                                    <li key={index} className="flex items-start space-x-4 rtl:space-x-reverse p-4 bg-health-background rounded-lg shadow-sm">
                                        <CheckCircleIcon className="w-6 h-6 text-health-green flex-shrink-0 mt-1" />
                                        <div className="flex-grow">
                                            <span className="text-gray-700 leading-relaxed">{criterion.text[language]}</span>
                                            {criterion.actions && criterion.actions.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    {criterion.actions.map((action, actionIndex) => (
                                                        <a
                                                            key={actionIndex}
                                                            href={action.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 shadow-sm ${
                                                                action.type === 'view'
                                                                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                                                    : 'bg-health-blue text-white hover:bg-opacity-90'
                                                            }`}
                                                        >
                                                            {action.type === 'view' ? <ViewIcon className="w-4 h-4" /> : <DownloadIcon className="w-4 h-4" />}
                                                            <span>{action.label[language]}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    ) : (
                        <p className="text-gray-600 text-center py-8">{content.noCriteria[language]}</p>
                    )}
                </div>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default AxisSubPage;
