
import React, { useContext } from 'react';
import { AppContext } from '../App';

const WaveIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9.5c1.667-1 3.333-1 5 0 1.667 1 3.333 1 5 0 1.667-1 3.333-1 5 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 14.5c1.667-1 3.333-1 5 0 1.667 1 3.333-1 5 0 1.667-1 3.333-1 5 0" />
    </svg>
);

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.212 9.042a5.487 5.487 0 01-5.487 5.487 5.487 5.487 0 01-5.488-5.487c0-1.28.396-2.463 1.06-3.487a5.487 5.487 0 018.365 3.487zM12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
    </svg>
);

const PersonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const sections = [
    { 
      id: 'waves',
      Icon: WaveIcon,
      color: 'text-cyan-500',
      title: { en: 'Navy Blue Color - Balance and Stability', ar: 'اللون البحري – التوازن والاستقرار' },
      text: { 
        en: "Symbolizes calmness, depth, and fresh air. Connected to Salalah's coastal environment. Expresses natural harmony and the serene aspect of a healthy life.",
        ar: "يرمز للهدوء، العمق، الهواء النقي. مرتبط بالبيئة الساحلية لصلالة. يعبر عن الانسجام الطبيعي والجانب الهادئ للحياة الصحية."
      }
    },
    { 
      id: 'sun',
      Icon: SunIcon,
      color: 'text-yellow-500',
      title: { en: 'Yellow Color - Health and Energy', ar: 'اللون الأصفر – الصحة والطاقة' },
      text: { 
        en: "Symbolizes light, sun, optimism, and vitality. Enhances the feeling of hope and energy in a healthy lifestyle.",
        ar: "يرمز للضوء، الشمس، التفاؤل، والحيوية. يعزز الشعور بالأمل والطاقة في نمط الحياة الصحي."
      }
    },
    { 
      id: 'leaf',
      Icon: LeafIcon,
      color: 'text-green-500',
      title: { en: 'Green Color - Sustainability and Nature', ar: 'اللون الأخضر – الاستدامة والطبيعة' },
      text: { 
        en: "Symbolizes growth, nature, and environmental revitalization. Reflects the close relationship between Salalah and its natural environment. Represents the environmental aspect and living in harmony with nature.",
        ar: "يرمز للنمو، الطبيعة، والانتعاش البيئي. يعكس العلاقة الوثيقة بين صلالة وبيئتها الطبيعية. يمثل الجانب البيئي والعيش بتناغم مع الطبيعة."
      }
    },
    { 
      id: 'person',
      Icon: PersonIcon,
      color: 'text-blue-900',
      title: { en: 'Dark Blue Color - Trust and Responsibility', ar: 'اللون الكحلي – الثقة والمسؤولية' },
      text: { 
        en: "Reflects professionalism, commitment, and credibility. Highlights good governance and social responsibility.",
        ar: "يعكس الاحترافية والالتزام والمصداقية. يبرز جانب الإدارة الرشيدة والمسؤولية المجتمعية."
      }
    },
    { 
      id: 'message',
      Icon: MessageIcon,
      color: 'text-sky-400',
      title: { en: 'The Slogan', ar: 'السلوجن (الشعار اللفظي)' },
      text: { 
        en: `"Healthy Community and Sustainable Development". Meaning: Confirms that humans are the core of the project, and development starts with the quality of life of the individual and society. Sustainable Development reflects a renewed future vision aligned with the life cycle and nature in Salalah, highlighting the city's commitment to environmental and social sustainability.`,
        ar: "\"مجتمع صحي وتنمية مستدامة\". المعنى والرسالة: مجتمع صحي: يؤكد أن الإنسان هو محور المشروع، وأن التنمية تبدأ من جودة حياة الفرد والمجتمع. تنمية مستدامة: تعكس رؤية مستقبلية متجددة تتماشى مع دورة الحياة والطبيعة في ولاية صلالة، وتبرز التزام المدينة بالاستدامة البيئية والاجتماعية. يمثل السلوجن عنصرًا جوهريًا لأنه يرسخ التوجه العام للّجنة ويعكس الهدف من بناء مدينة صحية ومستدامة."
      }
    }
];

const AboutLogoPage: React.FC = () => {
    const { language } = useContext(AppContext);

    const content = {
        title: { en: 'About the Salalah Health City Logo', ar: 'دلالات شعار مدينة صلالة الصحية' },
        intro: {
            en: 'The logo embodies: Healthy Life, Environmental Sustainability, and Community Bonding. It is inspired by the natural, social, and health identity of Salalah city.',
            ar: 'الشعار يجسّد: الحياة الصحية، الاستدامة البيئية، الترابط المجتمعي. وهو مستوحى من هوية مدينة صلالة الطبيعية، الاجتماعية، والصحية.'
        }
    };
    
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold font-heading text-health-blue tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                </div>
                
                <div className="flex justify-center mb-12">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1mFtlGKOSGc24Y5RNXyIAn_p6_l9OWNx0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://i.im.ge/2025/11/10/nnFN90.Logo-design.png" 
                            alt={language === 'ar' ? 'شعار مدينة صلالة الصحية' : 'Salalah Health City Logo'}
                            className="w-64 h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                    </a>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 font-medium bg-gray-50 p-6 rounded-xl border border-gray-100">{content.intro[language]}</p>
                    
                    <div className="space-y-8">
                        {sections.map(({ id, Icon, color, title, text }) => (
                           <div key={id} className="flex items-start space-x-4 rtl:space-x-reverse bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
                               <div className="flex-shrink-0">
                                   <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center ${color}`}>
                                       <Icon className="w-7 h-7" />
                                   </div>
                               </div>
                               <div>
                                   <h3 className={`text-xl font-bold font-heading text-gray-800 mb-2`}>{title[language]}</h3>
                                   <p className="mt-1 text-gray-600 leading-relaxed">{text[language]}</p>
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutLogoPage;
