
import React, { useContext } from 'react';
import { AppContext } from '../App';

const Footer: React.FC = () => {
    const { language, setCurrentPage } = useContext(AppContext);
    
    const content = {
      copyright: { en: 'Salalah Health City. All Rights Reserved.', ar: 'مدينة صلالة الصحية. جميع الحقوق محفوظة.'},
      accessibilityTitle: { en: 'Website Accessibility', ar: 'إمكانية الوصول للموقع' },
      accessibilityStatement: {
        en: "We are committed to providing an accessible website for all users, regardless of technology or ability. We aim to comply with WCAG 2.2 Level AA standards. Features include keyboard navigation, screen reader support, high-contrast mode, and text resizing.",
        ar: "نحن ملتزمون بتوفير موقع إلكتروني سهل الوصول لجميع المستخدمين، بغض النظر عن التكنولوجيا أو القدرة. نهدف إلى الامتثال لمعايير WCAG 2.2 المستوى AA. تشمل الميزات التنقل عبر لوحة المفاتيح، ودعم قارئات الشاشة، ووضع التباين العالي، وتغيير حجم النص."
      },
      accessibilityContact: {
        en: "If you experience any difficulty accessing our site, please contact us.",
        ar: "إذا واجهت أي صعوبة في الوصول إلى موقعنا، يرجى الاتصال بنا."
      }
    };
    
    return (
        <footer className="bg-surface-primary border-t border-border-color mt-12">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
                <div className="max-w-4xl mx-auto mb-6">
                    <h3 className="text-lg font-bold font-heading text-text-primary mb-2">{content.accessibilityTitle[language]}</h3>
                    <p className="text-sm mb-2">{content.accessibilityStatement[language]}</p>
                    <p className="text-sm">
                        {content.accessibilityContact[language]} {' '}
                        <button onClick={() => setCurrentPage('contact')} className="text-health-blue hover:underline font-medium">
                            executiveoffice.shc@gmail.com
                        </button>
                    </p>
                </div>
                <div className="flex justify-center mt-4 space-x-6 rtl:space-x-reverse mb-4">
                    <a href="https://x.com/SalHealthCity" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-health-blue" aria-label="X (Twitter)">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    {/* <a href="https://wa.me/96872540404" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#25D366]" aria-label="WhatsApp">
                        <span className="sr-only">WhatsApp</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                    </a> */}
                </div>
                <p>&copy; {new Date().getFullYear()} {content.copyright[language]}</p>
            </div>
        </footer>
    );
};

export default Footer;
