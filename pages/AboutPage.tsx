
import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from '../App';

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.96 17.96 0 01-12.138-1.21 6 6 0 01-.42-10.53m12.558 11.74a17.981 17.981 0 001.913-5.226 6 6 0 00-9.42-2.131c.453.86.712 1.845.712 2.872v3.318a25.283 25.283 0 01-1.228 8.485" />
    </svg>
);

const FlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
);

const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.527-1.76 2.65-2.082m-2.65 2.082l-2.28 2.28m2.28-2.28l-1.38-1.38m1.38 1.38l-1.38-1.38m-3.32 4.095a9.094 9.094 0 01-3.742-.479 3 3 0 014.682-2.72m7.5 2.962c-.57 1.023-1.527 1.76-2.65 2.082m2.65-2.082l2.28 2.28m-2.28-2.28l1.38 1.38m-1.38-1.38l1.38 1.38m-3.32-4.095a9.094 9.094 0 00-3.742-.479 3 3 0 00-4.682 2.72m-4.29-2.72c-.816.52-1.55.9-2.25 1.09m15.75-1.09c-.69-.19-1.42-.57-2.25-1.09m-11.25 0c.69.19 1.42.57 2.25 1.09" />
    </svg>
);

const ArrowBackIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

const AboutPage: React.FC = () => {
    const { language, setCurrentPage } = useContext(AppContext);
    const mainRef = useRef(null);

    useEffect(() => {
        if (!mainRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = (mainRef.current as any).querySelectorAll('.animate-on-scroll');
        elements.forEach((el: Element) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const content = {
        title: {
            en: 'Welcome to Salalah Health City',
            ar: 'مرحباً بكم في مدينة صلالة الصحية'
        },
        intro1: {
            en: 'Salalah Health City is a pioneering development initiative starting from the heart of Dhofar Governorate, aiming to build a community that enjoys the highest levels of health and quality of life. The city is based on the "Healthy Cities" standards approved by the World Health Organization, and seeks to enhance community partnership and empower various sectors to work together for a safer, healthier, and more prosperous environment.',
            ar: 'مدينة صلالة الصحية هي مبادرة تنموية رائدة تنطلق من قلب محافظة ظفار، وتهدف إلى بناء مجتمع يتمتع بأعلى مستويات الصحة وجودة الحياة. تستند المدينة إلى معايير “المدن الصحية” المعتمدة من منظمة الصحة العالمية، وتسعى إلى تعزيز الشراكة المجتمعية، وتمكين مختلف القطاعات للعمل معاً من أجل بيئة أكثر أماناً وصحة وازدهاراً.'
        },
        intro2: {
            en: 'We believe that health is not only the responsibility of the health sector, but is the result of the integration of efforts between government institutions, private and civil sectors, in addition to active participation from the community. Hence, the establishment of Salalah Health City came to be a platform that gathers these efforts and transforms ideas into sustainable projects that serve people and the environment.',
            ar: 'نحن نؤمن بأن الصحة ليست مسؤولية القطاع الصحي فقط، بل هي ثمرة تكامل الجهود بين المؤسسات الحكومية والقطاعات الخاصة والأهلية، إضافة إلى المشاركة الفاعلة من المجتمع. ومن هنا جاء تأسيس مدينة صلالة الصحية ليكون منصة تجمع هذه الجهود، وتحوّل الأفكار إلى مشروعات مستدامة تخدم الإنسان والبيئة.'
        },
        visionTitle: { en: 'Our Vision', ar: 'رؤيتنا' },
        visionText: {
            en: 'To be a national and regional model for a city that provides a supportive environment for health, and achieves well-being for all its residents and visitors through innovative programs and initiatives based on scientific evidence and community partnership.',
            ar: 'شراكة مجتمعية ومؤسسية لمدينة صحية مستدامة'
        },
        missionTitle: { en: 'Our Mission', ar: 'رسالتنا' },
        missionText: {
            en: 'Promoting the concept of healthy cities through conscious planning, activating the role of the community, and implementing sustainable projects and initiatives that contribute to improving the quality of life and upgrading health, environmental, and social services.',
            ar: 'تعزيز الصحة العامة وجودة الحياة من خلال شراكة مجتمعية ومؤسسية فاعلة لتمكين المجتمع وتطوير قدراته من أجل تنمية مستدامة'
        },
        goalsTitle: { en: 'Our Goals', ar: 'أهدافنا' },
        goals: [
            { en: 'Enhancing the quality of life for the community by applying best practices in environmental health, occupational safety, and food safety.', ar: 'تعزيز جودة الحياة للمجتمع بتطبيق أفضل الممارسات في مجال الصحة البيئية والسلامة المهنية وسلامة الغذاء' },
            { en: 'Enhancing public health and the quality of health services by empowering the community, supporting scientific research, and activating multi-sectoral partnerships for disease prevention and improving quality of life.', ar: 'تعزيز الصحة العامة وجودة الخدمات الصحية عبر تمكين المجتمع، دعم البحث العلمي وتفعيل الشراكات متعددة القطاعات للوقاية من الأمراض وتحسين جودة الحياة' },
            { en: 'Raising the level of quality of services and programs provided in healthcare and enhancing effective community participation.', ar: 'رفع  مستوى جودة الخدمات والبرامج المقدمة في الرعاية الصحية وتعزيز المشاركة المجتمعية الفعالة' },
            { en: 'Emergency preparedness and response.', ar: 'الاستعداد للطوارئ والاستجابة لها' },
            { en: 'Enhancing efforts to transform Salalah City into a leading model in modern education.', ar: 'تعزيز الجهود الرامية لتحويل مدينة صلالة إلى نموذج رائد في التعليم الحديث' },
            { en: 'Building an integrated training system, based on a centralized electronic platform.', ar: 'بناء نظام تدريبي متكامل، يعتمد على منصة إلكترونية مركزية' },
            { en: 'Supporting and empowering small businesses and individuals in Salalah Health City to contribute to sustainable economic and social development.', ar: 'دعم وتمكين المشاريع الصغيرة والأفراد في مدينة صلالة الصحية للمساهمة في التنمية الاقتصادية والاجتماعية المستدامة' }
        ],
        axesTitle: { en: 'Work Axes', ar: 'محاور العمل' },
        axesText: {
            en: 'Salalah Health City relies on a set of axes that address health and development priorities in the governorate, such as: Public Health, Environment and Safety, Healthy Urban Growth, Promoting Physical Activity, Community Support, Targeted Group Services, in addition to initiatives designed specifically for the needs of Salalah and its residents.',
            ar: 'تعتمد مدينة صلالة الصحية على مجموعة من المحاور التي تعالج أولويات الصحة والتنمية في المحافظة، مثل: الصحة العامة، البيئة والسلامة، النمو العمراني الصحي، تعزيز النشاط البدني، الدعم المجتمعي، خدمات الفئات المستهدفة، إضافة إلى المبادرات المصممة خصيصاً لاحتياجات صلالة وسكانها.'
        },
        partnersTitle: { en: 'Our Partners', ar: 'شركاؤنا' },
        partnersText: {
            en: 'Salalah Health City derives its strength from a wide network of partners and supporters from various sectors, who work with us to achieve a shared vision: Salalah, a healthy city... for everyone.',
            ar: 'تستمد مدينة صلالة الصحية قوتها من شبكة واسعة من الشركاء والداعمين من مختلف القطاعات، الذين يعملون معنا لتحقيق رؤية مشتركة: صلالة مدينة صحية… للجميع.'
        },
        backHome: { en: 'Back to Home', ar: 'العودة للرئيسية' }
    };

    return (
        <div className="bg-surface-primary py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => setCurrentPage('home')}
                    className="flex items-center gap-2 text-gray-600 hover:text-health-blue transition-colors mb-8 group"
                >
                    <ArrowBackIcon className={`w-5 h-5 transition-transform group-hover:-translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
                    <span className="font-bold font-heading">{content.backHome[language]}</span>
                </button>

                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-heading text-health-blue tracking-tight sm:text-5xl leading-tight">
                        {content.title[language]}
                    </h1>
                </header>
                
                <div ref={mainRef} className="max-w-4xl mx-auto space-y-12">
                    {/* Intro Section */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-on-scroll">
                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            {content.intro1[language]}
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {content.intro2[language]}
                        </p>
                    </section>

                    {/* Vision & Mission Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-health-background p-8 rounded-2xl border-t-4 border-health-blue animate-on-scroll">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white rounded-full text-health-blue shadow-sm">
                                    <EyeIcon className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-health-blue">{content.visionTitle[language]}</h2>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                {content.visionText[language]}
                            </p>
                        </section>

                        <section className="bg-health-background p-8 rounded-2xl border-t-4 border-health-green animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white rounded-full text-health-green shadow-sm">
                                    <RocketIcon className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-health-green">{content.missionTitle[language]}</h2>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                {content.missionText[language]}
                            </p>
                        </section>
                    </div>

                    {/* Goals Section */}
                    <section className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-health-blue/10 rounded-full text-health-blue">
                                <FlagIcon className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-gray-900">{content.goalsTitle[language]}</h2>
                        </div>
                        <ul className="space-y-4">
                            {content.goals.map((goal, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-health-blue/20 text-health-blue flex items-center justify-center font-bold text-sm mt-1">{idx + 1}</span>
                                    <span className="text-lg text-text-secondary leading-relaxed">{goal[language]}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Work Axes Section */}
                    <section className="bg-health-blue/5 p-8 rounded-2xl border border-health-blue/10 animate-on-scroll">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="p-3 bg-white rounded-full text-health-blue shadow-sm">
                                <BriefcaseIcon className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-health-blue">{content.axesTitle[language]}</h2>
                        </div>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {content.axesText[language]}
                        </p>
                    </section>

                    {/* Partners Section */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-on-scroll">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="p-3 bg-health-green/10 rounded-full text-health-green">
                                <UserGroupIcon className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-gray-900">{content.partnersTitle[language]}</h2>
                        </div>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {content.partnersText[language]}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
