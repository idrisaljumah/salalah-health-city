
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../App';
import InteractiveMap from '../components/InteractiveMap';
import { createPortal } from 'react-dom';

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

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
);

const SLIDES = [
    `${import.meta.env.BASE_URL}hero/slide-1.webp`,
    `${import.meta.env.BASE_URL}hero/slide-2.webp`,
    `${import.meta.env.BASE_URL}hero/slide-3.webp`,
    `${import.meta.env.BASE_URL}hero/slide-4.webp`,
    `${import.meta.env.BASE_URL}hero/slide-5.webp`,
    `${import.meta.env.BASE_URL}hero/slide-6.webp`,
    `${import.meta.env.BASE_URL}hero/slide-7.webp`
];

type DefinitionKey = 'vision' | 'mission' | 'history';

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const { language } = useContext(AppContext);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    // Slides are fetched one ahead of the one on screen, not all seven at page load.
    const [loadedUpTo, setLoadedUpTo] = useState(3);
    useEffect(() => {
        setLoadedUpTo((prev) => Math.max(prev, Math.min(currentSlide + 1, SLIDES.length - 1)));
    }, [currentSlide]);
    const [selectedDefinition, setSelectedDefinition] = useState<DefinitionKey | null>(null);

    useAnimateOnScroll(aboutRef);

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

    const heroCards = [
        { value: '410k+', label: content.beneficiaries[language] },
        { value: '57+', label: content.initiatives[language] },
        { value: '110+', label: content.partners[language] },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section ref={heroRef} className="relative overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true">
                    {SLIDES.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundImage: index <= loadedUpTo ? `url(${slide})` : undefined,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    ))}
                    {/* Sage wash: pale in the centre for the copy, the photo shows through at the edges. */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'radial-gradient(ellipse 75% 70% at 50% 30%, rgb(var(--sage)) 0%, rgb(var(--sage) / 0.94) 40%, rgb(var(--sage) / 0.7) 70%, rgb(var(--sage) / 0.35) 100%), linear-gradient(to bottom, rgb(var(--sage)) 0%, rgb(var(--sage) / 0) 22%, rgb(var(--sage) / 0) 80%, rgb(var(--sage)) 100%)',
                        }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <img
                            src="https://i.im.ge/2025/11/10/nnFN90.Logo-design.png"
                            alt={language === 'ar' ? 'شعار مدينة صلالة الصحية' : 'Salalah Health City Logo'}
                            className="rise-in mx-auto mb-6 w-24 h-auto rounded-2xl bg-white/80 p-1.5 shadow-md"
                        />
                        <h1
                            className="rise-in font-heading font-medium text-moss text-5xl sm:text-6xl lg:text-7xl leading-tight mb-5"
                            style={{ '--delay': '120ms' } as React.CSSProperties}
                        >
                            {content.heroTitle[language]}
                        </h1>
                        <p
                            className="rise-in text-lg sm:text-xl text-text-secondary mb-8"
                            style={{ '--delay': '240ms' } as React.CSSProperties}
                        >
                            {content.heroSubtitle[language]}
                        </p>
                        <div
                            className="rise-in flex flex-wrap justify-center gap-4"
                            style={{ '--delay': '360ms' } as React.CSSProperties}
                        >
                            <button onClick={() => setCurrentPage('about')} className="btn-pill">
                                {content.readMore[language]}
                                <ArrowIcon className="btn-arrow" />
                            </button>
                            <a
                                href="https://drive.google.com/file/d/1PmHBEECKuwxr1dtb8w_Dsbiex4KYA97r/preview?autoplay=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill-outline"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                                {content.watchVideo[language]}
                            </a>
                        </div>
                    </div>

                    {/* Glass cards: the initiative in numbers */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {heroCards.map((card, index) => (
                            <div
                                key={card.value}
                                className="rise-in"
                                style={{ '--delay': `${520 + index * 120}ms` } as React.CSSProperties}
                            >
                                <div className="glass-card">
                                    <div className="rounded-2xl bg-white/45 px-6 py-8 lg:py-10 text-start">
                                        <p className="font-heading font-medium text-moss text-5xl lg:text-6xl leading-none" dir="ltr" style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
                                            {card.value}
                                        </p>
                                        <p className="mt-3 text-base text-text-secondary">{card.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slide Indicators */}
                    <div className="mt-8 flex justify-center gap-2">
                        {SLIDES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-moss' : 'w-2 bg-moss/30 hover:bg-moss/50'}`}
                                aria-label={language === 'ar' ? `انتقل إلى الصورة ${index + 1}` : `Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section ref={aboutRef} className="py-16 animate-on-scroll">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="soft-card max-w-4xl mx-auto text-center px-6 py-12 sm:px-12">
                        <p className="eyebrow mb-3">{content.statsTitle[language]}</p>
                        <h2 className="text-4xl font-medium font-heading text-moss mb-6">
                            {content.aboutTitle[language]}
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                            {content.aboutText[language]}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-moss">
                            {([
                                { key: 'vision', Icon: TargetIcon, label: language === 'ar' ? 'الرؤية' : 'Vision' },
                                { key: 'mission', Icon: EyeIcon, label: language === 'ar' ? 'الرسالة' : 'Mission' },
                                { key: 'history', Icon: HistoryIcon, label: language === 'ar' ? 'التاريخ' : 'History' },
                            ] as { key: DefinitionKey; Icon: typeof EyeIcon; label: string }[]).map(({ key, Icon, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedDefinition(key)}
                                    className="flex flex-col items-center group w-24"
                                >
                                    <span className="p-4 bg-leaf/25 rounded-full mb-3 transition-colors group-hover:bg-moss group-hover:text-white">
                                        <Icon className="w-8 h-8" />
                                    </span>
                                    <span className="font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Map */}
            <InteractiveMap />

            {/* Definitions Modal */}
            {selectedDefinition && createPortal(
                <div 
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#1c2615]/60 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedDefinition(null)}
                >
                    <div 
                        className="bg-surface-primary rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-10 relative animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedDefinition(null)}
                            className="absolute top-4 end-4 text-gray-500 hover:text-gray-800 p-1.5 bg-gray-100 rounded-full transition-colors"
                            aria-label={content.close[language]}
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                        
                        <div className="flex flex-col items-center text-center">
                            <div className="p-4 bg-leaf/25 rounded-full text-moss mb-4">
                                {(() => {
                                    const Icon = definitions[selectedDefinition].icon;
                                    return <Icon className="w-10 h-10" />;
                                })()}
                            </div>
                            <h3 className="text-3xl font-medium font-heading text-moss mb-4">
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
