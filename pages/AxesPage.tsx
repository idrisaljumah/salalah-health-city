
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AXES_DATA } from '../constants';

const AxesPage: React.FC = () => {
    const { language, setActiveAxis } = useContext(AppContext);

    const content = {
        title: { en: 'The Nine Foundational Axes', ar: 'المحاور' },
        subtitle: { en: 'Our strategy is built upon nine interconnected axes that collectively foster a healthy, sustainable, and thriving city.', ar: 'تعتمد استراتيجيتنا على تسعة محاور مترابطة تعمل معًا على تعزيز مدينة صحية ومستدامة ومزدهرة.' },
    };

    return (
        <div className="py-12 sm:py-16 bg-surface-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-heading text-moss tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {AXES_DATA.map((axis) => {
                        const isClickable = !!axis.criteria && axis.criteria.length > 0;
                        return (
                             <div 
                                key={axis.id}
                                className={`bg-sage rounded-2xl shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                                onClick={() => isClickable && setActiveAxis(axis.id)}
                                role={isClickable ? 'button' : undefined}
                                tabIndex={isClickable ? 0 : -1}
                                aria-label={isClickable ? `View details for ${axis.title[language]}` : axis.title[language]}
                                onKeyDown={(e) => {
                                  if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    setActiveAxis(axis.id);
                                  }
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-moss/10 rounded-full">
                                        <axis.icon className="w-8 h-8 text-moss" />
                                    </div>
                                    <h2 className="ms-4 text-xl font-bold font-heading text-gray-800">{axis.title[language]}</h2>
                                </div>
                                <p className="text-gray-600 flex-grow">{axis.description[language]}</p>
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-700">{language === 'ar' ? 'عدد المعايير' : 'Number of Criteria'}</span>
                                        <span className="text-lg font-bold text-moss">{axis.criteriaCount}</span>
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

export default AxesPage;
