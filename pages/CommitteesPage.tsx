
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { COMMITTEES_DATA } from '../constants';

const ChevronIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);


const CommitteesPage: React.FC = () => {
    const { language, setActiveAxis, setCurrentPage } = useContext(AppContext);
    const [openCommitteeId, setOpenCommitteeId] = useState<string | null>(COMMITTEES_DATA[0]?.id || null);
    
    const content = {
        title: { en: 'Committees', ar: 'اللجان' },
        subtitle: { en: 'The dedicated teams driving the Salalah Health City initiative forward.', ar: 'الفرق المتفانية التي تقود مبادرة مدينة صلالة الصحية إلى الأمام.' },
    };

    const handleToggle = (id: string) => {
        setOpenCommitteeId(openCommitteeId === id ? null : id);
    };

    const handleAxisClick = (axisId: string) => {
        setActiveAxis(axisId);
        setCurrentPage('axes');
    };

    return (
        <div className="py-12 sm:py-16 bg-health-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-heading text-health-blue tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {COMMITTEES_DATA.map((committee) => {
                        const isOpen = openCommitteeId === committee.id;
                        return (
                            <div key={committee.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
                                <button
                                    onClick={() => handleToggle(committee.id)}
                                    className="w-full flex justify-between items-center p-5 text-start font-heading font-bold text-xl"
                                    aria-expanded={isOpen}
                                >
                                    <span className={isOpen ? 'text-health-blue' : 'text-gray-800'}>{committee.name[language]}</span>
                                    <ChevronIcon className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-health-blue' : 'text-gray-500'}`} />
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <div className="p-5 pt-0">
                                        <ul className={`space-y-3 border-${language === 'ar' ? 'r' : 'l'}-2 border-health-blue/50 p-${language === 'ar' ? 'r' : 'l'}-4`}>
                                            {committee.axes.map((axis, index) => (
                                                <li key={index} className="text-gray-700">
                                                    {axis.id ? (
                                                        <button 
                                                            onClick={() => handleAxisClick(axis.id!)}
                                                            className="text-start hover:text-health-blue hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-health-blue rounded px-1 -mx-1"
                                                        >
                                                            {axis.label[language]}
                                                        </button>
                                                    ) : (
                                                        <span>{axis.label[language]}</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CommitteesPage;
