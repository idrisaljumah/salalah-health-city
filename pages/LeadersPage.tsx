
import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { AppContext } from '../App';
import { LEADERS_DATA } from '../constants';
import { Leader } from '../types';

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const LeaderCard: React.FC<{ 
    leader: Leader; 
    onClick: (leader: Leader) => void; 
    variant?: 'chairman' | 'executive' | 'member';
    language: string;
}> = ({ leader, onClick, variant = 'member', language }) => {
    const isChairman = variant === 'chairman';
    const isExecutive = variant === 'executive';

    let containerClasses = "bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100 group";
    let imageContainerClasses = "aspect-square w-full overflow-hidden p-0 relative bg-gray-50 rounded-t-lg";
    let textClasses = "p-4 text-center flex-grow flex flex-col justify-center";
    let nameClasses = "font-bold font-heading text-gray-900 mb-1";
    let roleClasses = "text-health-blue font-medium mb-3";

    if (isChairman) {
        containerClasses += " shadow-lg border-health-blue/20 ring-1 ring-health-blue/10";
        nameClasses += " text-xl sm:text-2xl";
        roleClasses += " text-lg";
    } else if (isExecutive) {
        containerClasses += " shadow-md";
        nameClasses += " text-lg sm:text-xl";
        roleClasses += " text-base";
    } else {
        nameClasses += " text-lg";
        roleClasses += " text-sm";
    }

    return (
        <div 
            className={containerClasses}
            onClick={() => onClick(leader)}
        >
            <div className={imageContainerClasses}>
                <img 
                    src={leader.imageUrl} 
                    alt={leader.name[language]} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className={textClasses}>
                <h3 className={nameClasses}>{leader.name[language]}</h3>
                <p className={roleClasses}>{leader.role[language]}</p>
                {leader.team && leader.team.length > 0 && (
                    <button className="mt-auto px-4 py-2 bg-gray-100 text-health-blue text-sm font-bold rounded-full hover:bg-health-blue hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                        {language === 'ar' ? 'عرض الفريق' : 'View Team'}
                    </button>
                )}
            </div>
        </div>
    );
};

const LeadersPage: React.FC = () => {
    const { language } = useContext(AppContext);
    const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

    const content = {
        title: { en: 'Our Leadership', ar: 'قيادة المدينة الصحية' },
        subtitle: { en: 'The dedicated leaders driving the vision and success of Salalah Health City.', ar: 'القادة المتفانون الذين يقودون رؤية ونجاح مدينة صلالة الصحية.' },
        teamTitle: { en: 'Team Members', ar: 'أعضاء الفريق' }
    };

    // Data segmentation
    const chairman = LEADERS_DATA[0];
    const executiveHead = LEADERS_DATA[1];
    const committeeHeads = LEADERS_DATA.slice(2);

    return (
        <div className="py-12 sm:py-16 bg-health-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold font-heading text-health-blue tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-16 relative">
                    
                    {/* Chairman */}
                    {chairman && (
                        <div className="w-full max-w-md relative z-10">
                             {/* Connector line to next level */}
                             <div className="absolute top-full left-1/2 w-0.5 h-16 bg-gray-300/70 -translate-x-1/2 -z-10 hidden md:block"></div>
                            <LeaderCard 
                                leader={chairman} 
                                variant="chairman" 
                                onClick={setSelectedLeader} 
                                language={language}
                            />
                        </div>
                    )}

                    {/* Executive Head */}
                    {executiveHead && (
                        <div className="w-full max-w-sm relative z-10">
                             {/* Connector line to next level */}
                             <div className="absolute top-full left-1/2 w-0.5 h-16 bg-gray-300/70 -translate-x-1/2 -z-10 hidden md:block"></div>
                            <LeaderCard 
                                leader={executiveHead} 
                                variant="executive" 
                                onClick={setSelectedLeader} 
                                language={language}
                            />
                        </div>
                    )}

                    {/* Committee Heads */}
                    <div className="w-full max-w-7xl relative z-10">
                         {/* Organizational Chart Lines */}
                         <div className="absolute -top-16 left-1/2 w-0.5 h-8 bg-gray-300/70 -translate-x-1/2 hidden md:block"></div>
                         <div className="absolute -top-8 left-[10%] right-[10%] h-0.5 bg-gray-300/70 hidden md:block rounded-full"></div>
                         
                        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 pt-4">
                            {committeeHeads.map((leader) => (
                                <div key={leader.id} className="w-full sm:w-[calc(50%-2rem)] lg:w-72 relative group">
                                     {/* Vertical connector line for each item */}
                                     <div className="absolute bottom-full left-1/2 w-0.5 h-12 bg-gray-300/70 -translate-x-1/2 -z-10 hidden md:block group-first:h-12"></div>
                                    <LeaderCard 
                                        leader={leader} 
                                        variant="member" 
                                        onClick={setSelectedLeader} 
                                        language={language}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal - Rendered via Portal to ensure correct fixed positioning relative to viewport */}
            {selectedLeader && createPortal(
                <div 
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                >
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
                        onClick={() => setSelectedLeader(null)}
                    ></div>
                    
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
                        <button 
                            onClick={() => setSelectedLeader(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            aria-label={language === 'ar' ? 'إغلاق' : 'Close'}
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                        
                        {/* Image Section */}
                        <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center relative md:h-auto h-72">
                             <img 
                                src={selectedLeader.imageUrl} 
                                alt={selectedLeader.name[language]} 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        
                        {/* Details Section */}
                        <div className="w-full md:w-2/3 flex flex-col max-h-[60vh] md:max-h-[90vh]">
                            <div className="p-6 md:p-8 bg-white shrink-0">
                                <h2 className="text-2xl md:text-3xl font-bold font-heading text-health-blue mb-2">
                                    {selectedLeader.name[language]}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 font-medium">
                                    {selectedLeader.role[language]}
                                </p>
                            </div>
                            
                            {/* Team List */}
                            {selectedLeader.team && selectedLeader.team.length > 0 && (
                                <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-0 bg-white">
                                    <div className="pt-6 border-t border-gray-100">
                                        <h3 className="text-lg font-bold font-heading text-gray-800 mb-4 flex items-center">
                                            <span className="bg-health-blue w-1 h-6 rounded-full me-2"></span>
                                            {content.teamTitle[language]}
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedLeader.team.map((member, index) => (
                                                <li key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                    <span className="text-health-blue font-bold me-3 mt-1">•</span>
                                                    <span className="text-gray-700 leading-relaxed">{member[language] || member['ar']}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default LeadersPage;
