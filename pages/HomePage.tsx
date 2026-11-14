
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../App';
import InteractiveMap from '../components/InteractiveMap';
import { createPortal } from 'react-dom';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// A simple hook for intersection observer
const useAnimateOnScroll = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);
};


interface HomePageProps {
    setCurrentPage: (page: string) => void;
}

interface StatCardProps {
    label: string;
    value: string;
    onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, onClick }) => {
    const ref = useRef<HTMLDivElement | HTMLButtonElement>(null);
    useAnimateOnScroll(ref as React.RefObject<HTMLElement>);
    
    const content = (
        <>
            <p className="text-4xl font-bold text-health-blue">{value}</p>
            <p className="text-text-secondary mt-2">{label}</p>
        </>
    );

    const className = "bg-surface-primary p-6 rounded-lg shadow-md text-center w-full h-full flex flex-col justify-center animate-on-scroll transform hover:scale-105 transition-transform";

    if (onClick) {
        return (
            <button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick} className={className}>
                {content}
            </button>
        );
    }

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
            {content}
        </div>
    );
};

// Icons definitions...
const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const HistoryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SLIDES = [
    'https://iili.io/fB8TQFj.png',
    'https://iili.io/fB8TZcx.png',
    'https://iili.io/fB8TiMu.png',
    'https://iili.io/fB8Ts6b.png',
    'https://iili.io/fB8Tb9V.png',
    'https://iili.io/fB8TpwP.png',
    'https://iili.io/fB8uHoF.png'
];

type DefinitionKey = 'vision' | 'mission' | 'history';

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const { language } = useContext(AppContext);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const linksRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedDefinition, setSelectedDefinition] = useState<DefinitionKey | null>(null);

    useAnimateOnScroll(heroRef);
    useAnimateOnScroll(aboutRef);
    useAnimateOnScroll(linksRef);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const definitions = {
        vision: {
            title: { en: 'Our Vision', ar: 'رؤيتنا' },
            text: {
                en: 'To be a national and regional model for a city that provides a supportive environment for health, and achieves well-being for all its residents and visitors through innovative programs and initiatives based on scientific evidence and community partnership.',
                ar: 'شراكة مجتمعية ومؤسسية لمدينة صحية مستدامة'
            },
            icon: TargetIcon
        },
        mission: {
            title: { en: 'Our Mission', ar: 'رسالتنا' },
            text: {
                en: 'Promoting the concept of healthy cities through conscious planning, activating the role of the community, and implementing sustainable projects and initiatives that contribute to improving the quality of life and upgrading health, environmental, and social services.',
                ar: 'تعزيز الصحة العامة وجودة الحياة من خلال شراكة مجتمعية ومؤسسية فاعلة لتمكين المجتمع وتطوير قدراته من أجل تنمية مستدامة'
            },
            icon: EyeIcon
        },
        history: {
            title: { en: 'Our History', ar: 'تاريخنا' },
            text: {
                en: 'Salalah Health City is a pioneering development initiative starting from the heart of Dhofar Governorate. It is based on the "Healthy Cities" standards approved by the World Health Organization, seeking to enhance community partnership for a safer, healthier, and more prosperous environment.',
                ar: 'مدينة صلالة الصحية هي مبادرة تنموية رائدة تنطلق من قلب محافظة ظفار. تستند المدينة إلى معايير “المدن الصحية” المعتمدة من منظمة الصحة العالمية، وتسعى إلى تعزيز الشراكة المجتمعية من أجل بيئة أكثر أماناً وصحة وازدهاراً.'
            },
            icon: HistoryIcon
        }
    };

    const content = {
        heroTitle: { en: "Salalah Health City", ar: "مدينة صلالة الصحية" },
        heroSubtitle: { en: "Healthy Community and Sustainable Development", ar: "مجتمع صحي وتنمية مستدامة" },
        aboutTitle: { en: "About Us", ar: "من نحن" },
        aboutText: {
            en: "Salalah Health City is a pioneering model for health and sustainable development in the Sultanate of Oman. We strive to improve the quality of life through community partnership.",
            ar: "مدينة صلالة الصحية هي نموذج رائد للصحة والتنمية المستدامة في سلطنة عمان. نسعى لتحسين جودة الحياة من خلال الشراكة المجتمعية."
        },
        readMore: { en: "Read More", ar: "اقرأ المزيد" },
        watchVideo: { en: "Watch Video", ar: "شاهد الفيديو" },
        statsTitle: { en: "Initiative at a Glance", ar: "المبادرة في أرقام" },
        committees: { en: "Committees", ar: "اللجان" },
        axes: { en: "Axes", ar: "المحاور" },
        volunteers: { en: "Join Us", ar: "إنضم إلينا" },
        partners: { en: "Community Partners", ar: "شركاء المجتمع" },
        beneficiaries: { en: "Program Beneficiaries", ar: "مستفيد من البرنامج" },
        initiatives: { en: "Initiatives Implemented", ar: "مبادرة منفذة" },
        close: { en: "Close", ar: "إغلاق" }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-[600px] sm:h-[700px] flex items-center justify-center bg-gray-900 text-white overflow-hidden animate-on-scroll">
                <div className="absolute inset-0">
                    {SLIDES.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-50' : 'opacity-0'}`}
                            style={{
                                backgroundImage: `url(${slide})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-health-blue/90 mix-blend-multiply" />
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-16 sm:-mt-24">
                    <img 
                        src="https://i.im.ge/2025/11/10/nnFN90.Logo-design.png" 
                        alt={language === 'ar' ? 'شعار مدينة صلالة الصحية' : 'Salalah Health City Logo'}
                        className="mx-auto mb-8 w-40 h-auto rounded-2xl bg-white/90 p-2 shadow-xl backdrop-blur-sm"
                    />
                    <h1 className="text-4xl sm:text-6xl font-extrabold font-heading mb-6 tracking-tight drop-shadow-lg">
                        {content.heroTitle[language]}
                    </h1>
                    <p className="text-xl sm:text-2xl font-light mb-8 opacity-90 drop-shadow-md">
                        {content.heroSubtitle[language]}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button 
                            onClick={() => setCurrentPage('about')}
                            className="px-8 py-3 bg-white text-health-blue font-bold rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
                        >
                            {content.readMore[language]}
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1PmHBEECKuwxr1dtb8w_Dsbiex4KYA97r/preview?autoplay=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white/10 transition-transform hover:scale-105 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                            {content.watchVideo[language]}
                        </a>
                    </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/40'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Stats / Quick Links Section */}
            <div ref={linksRef} className="py-16 bg-health-background -mt-10 relative z-20 rounded-t-3xl shadow-top animate-on-scroll">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <StatCard 
                            label={content.beneficiaries[language]} 
                            value="410k+" 
                        />
                         <StatCard 
                            label={content.initiatives[language]} 
                            value="57+" 
                        />
                         <StatCard 
                            label={content.partners[language]} 
                            value="+110" 
                        />
                    </div>
                </div>
            </div>

            {/* About Preview Section */}
            <div ref={aboutRef} className="py-16 bg-white animate-on-scroll">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold font-heading text-health-blue mb-6">
                            {content.aboutTitle[language]}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {content.aboutText[language]}
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-health-blue">
                             <button 
                                onClick={() => setSelectedDefinition('vision')}
                                className="flex flex-col items-center group transition-transform hover:scale-105"
                             >
                                 <div className="p-4 bg-health-background rounded-full mb-3 group-hover:bg-health-blue group-hover:text-white transition-colors">
                                     <TargetIcon className="w-8 h-8" />
                                 </div>
                                 <span className="font-bold">{language === 'ar' ? 'الرؤية' : 'Vision'}</span>
                             </button>
                             <button 
                                onClick={() => setSelectedDefinition('mission')}
                                className="flex flex-col items-center group transition-transform hover:scale-105"
                             >
                                 <div className="p-4 bg-health-background rounded-full mb-3 group-hover:bg-health-blue group-hover:text-white transition-colors">
                                     <EyeIcon className="w-8 h-8" />
                                 </div>
                                 <span className="font-bold">{language === 'ar' ? 'الرسالة' : 'Mission'}</span>
                             </button>
                             <button 
                                onClick={() => setSelectedDefinition('history')}
                                className="flex flex-col items-center group transition-transform hover:scale-105"
                             >
                                 <div className="p-4 bg-health-background rounded-full mb-3 group-hover:bg-health-blue group-hover:text-white transition-colors">
                                     <HistoryIcon className="w-8 h-8" />
                                 </div>
                                 <span className="font-bold">{language === 'ar' ? 'التاريخ' : 'History'}</span>
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Map */}
            <InteractiveMap />

            {/* Definitions Modal */}
            {selectedDefinition && createPortal(
                <div 
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedDefinition(null)}
                >
                    <div 
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedDefinition(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 bg-gray-100 rounded-full transition-colors"
                            aria-label={content.close[language]}
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                        
                        <div className="flex flex-col items-center text-center">
                            <div className="p-4 bg-health-blue/10 rounded-full text-health-blue mb-4">
                                {(() => {
                                    const Icon = definitions[selectedDefinition].icon;
                                    return <Icon className="w-10 h-10" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-health-blue mb-4">
                                {definitions[selectedDefinition].title[language]}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {definitions[selectedDefinition].text[language]}
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            
            <style>{`
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in {
                    animation: scale-in 0.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default HomePage;
