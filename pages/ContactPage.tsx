
import React, { useContext } from 'react';
import { AppContext } from '../App';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
);

const ContactPage: React.FC = () => {
    const { language } = useContext(AppContext);
    
    const content = {
        title: { en: 'Contact & Helpdesk', ar: 'اتصل بنا ومكتب المساعدة' },
        subtitle: { en: 'Have questions or need support? Reach out to our team.', ar: 'هل لديك أسئلة أو تحتاج إلى دعم؟ تواصل مع فريقنا.' },
        formName: { en: 'Full Name', ar: 'الاسم الكامل' },
        formEmail: { en: 'Email Address', ar: 'البريد الإلكتروني' },
        formSubject: { en: 'Subject', ar: 'الموضوع' },
        formMessage: { en: 'Message', ar: 'الرسالة' },
        formSubmit: { en: 'Send Message', ar: 'إرسال الرسالة' },
        contactInfo: { en: 'Contact Information', ar: 'معلومات الاتصال' },
        address: { en: 'Salalah, Dhofar Governorate, Oman', ar: 'صلالة، محافظة ظفار، سلطنة عمان' },
        phone: { en: '', ar: '' },
        email: { en: 'executiveoffice.shc@gmail.com', ar: 'executiveoffice.shc@gmail.com' },
        mapLink: { en: 'View on Google Maps', ar: 'عرض على خرائط جوجل' }
    };

    return (
        <div className="py-12 sm:py-16 bg-surface-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-heading text-moss tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-sage p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold font-heading text-gray-800 mb-6">{language === 'ar' ? 'أرسل لنا استفسارًا' : 'Send us an inquiry'}</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">{content.formName[language]}</label>
                                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-moss focus:border-moss" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">{content.formEmail[language]}</label>
                                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-moss focus:border-moss" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">{content.formSubject[language]}</label>
                                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-moss focus:border-moss" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">{content.formMessage[language]}</label>
                                <textarea rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-moss focus:border-moss"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full py-3 px-4 bg-moss text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                                    {content.formSubmit[language]}
                                </button>
                            </div>
                        </form>
                    </div>
                     <div className="space-y-8">
                        <div className="bg-sage p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold font-heading text-gray-800 mb-6">{content.contactInfo[language]}</h2>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                                    <svg className="w-6 h-6 text-moss flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>{content.address[language]}</span>
                                </div>
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="w-6 h-6 text-moss flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span dir="ltr">{content.phone[language]}</span>
                                </div>
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="w-6 h-6 text-moss flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>{content.email[language]}</span>
                                </div>
                                 <div className="pt-4">
                                    <a 
                                        href="https://maps.app.goo.gl/ien87vzvVCsYUG43A" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-moss font-bold hover:underline"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                        </svg>
                                        <span>{content.mapLink[language]}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg h-80 border border-border-color">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3814.8667668117755!2d54.12670127515689!3d17.03020408379736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDAxJzQ4LjciTiA1NMKwMDcnNDUuNCJF!5e0!3m2!1sen!2som!4v1764246669798!5m2!1sen!2som" 
                                width="100%" 
                                height="100%" 
                                style={{border: 0}} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Salalah Health City Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
