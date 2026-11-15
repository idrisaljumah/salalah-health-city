
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { RESOURCES_DATA } from '../constants';

const FileIcon: React.FC<{ type: string }> = ({ type }) => {
    let iconPath, color;
    switch (type) {
        case 'PDF':
            iconPath = "M15.25 10.75a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75z";
            color = "text-red-500";
            break;
        case 'DOCX':
            iconPath = "M3.75 9.75h16.5v.01M3.75 12h16.5m-16.5 2.25h16.5";
            color = "text-blue-500";
            break;
        case 'XLSX':
            iconPath = "M3 3h18v18H3V3zm6 6h6v6H9V9z";
            color = "text-green-500";
            break;
        default:
            iconPath = "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z";
            color = "text-gray-500";
            break;
    }
    return (
        <svg className={`w-12 h-12 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} />
        </svg>
    );
};


const ResourcesPage: React.FC = () => {
    const { language } = useContext(AppContext);

    const content = {
        title: { en: 'Resources & Documents', ar: 'المصادر والمستندات' },
        subtitle: { en: 'Access all official documents, plans, and guidelines related to the Salalah Health City initiative.', ar: 'الوصول إلى جميع الوثائق والخطط والإرشادات الرسمية المتعلقة بمبادرة مدينة صلالة الصحية.' },
        download: { en: 'Download', ar: 'تحميل' },
        view: { en: 'View', ar: 'عرض' }
    };

    return (
        <div className="py-12 sm:py-16 bg-sage">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-heading text-moss tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-4">
                    {RESOURCES_DATA.map(resource => (
                        <div key={resource.id} className="bg-surface-primary rounded-2xl shadow-md p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <FileIcon type={resource.type} />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">{resource.title[language]}</h3>
                                    <p className="text-gray-500 text-sm">{resource.description[language]}</p>
                                </div>
                            </div>
                            {resource.url ? (
                                <a 
                                    href={resource.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-moss text-white rounded-md hover:bg-opacity-90 transition-colors text-sm font-medium"
                                >
                                    <span>{content.view[language]}</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </a>
                            ) : (
                                <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-moss text-white rounded-md hover:bg-opacity-90 transition-colors text-sm font-medium">
                                    <span>{content.download[language]}</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
