
import React, { useContext } from 'react';
import { AppContext } from '../App';

const VolunteersPage: React.FC = () => {
    const { language } = useContext(AppContext);

    const content = {
        title: { en: 'Join Us', ar: 'إنضم إلينا' },
        subtitle: { en: 'Contribute to building a healthier Salalah. Submit your details below.', ar: 'ساهم في بناء صلالة أكثر صحة. أرسل بياناتك أدناه.' },
        emailNote: { en: 'Please send your CV and contact details to:', ar: 'يرجى إرسال سيرتك الذاتية وبيانات الاتصال إلى:' },
        email: 'executiveoffice.shc@gmail.com',
        form: {
            name: { en: 'Full Name', ar: 'الاسم الكامل' },
            phone: { en: 'Phone Number', ar: 'رقم الهاتف' },
            interest: { en: 'Area of Interest', ar: 'مجال الاهتمام' },
            message: { en: 'Why do you want to volunteer?', ar: 'لماذا ترغب في التطوع؟' },
            send: { en: 'Send Application', ar: 'إرسال الطلب' }
        }
    };

    return (
        <div className="py-12 sm:py-16 bg-sage min-h-[70vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-surface-primary rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-moss p-8 text-center">
                        <h1 className="text-3xl font-extrabold font-heading text-white mb-2">
                            {content.title[language]}
                        </h1>
                        <p className="text-white/80 text-lg">
                            {content.subtitle[language]}
                        </p>
                    </div>
                    
                    <div className="p-8 sm:p-12">
                        <div className="bg-leaf/20 border border-leaf/50 rounded-xl p-6 text-center mb-8">
                            <p className="text-gray-700 font-medium mb-2">{content.emailNote[language]}</p>
                            <a href={`mailto:${content.email}`} className="text-xl font-bold text-moss hover:underline block break-all">
                                {content.email}
                            </a>
                        </div>

                        <form className="space-y-6" action={`mailto:${content.email}`} method="post" encType="text/plain">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{content.form.name[language]}</label>
                                <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-moss focus:border-transparent outline-none transition-all" required />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{content.form.phone[language]}</label>
                                <input type="tel" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-moss focus:border-transparent outline-none transition-all" required />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{content.form.interest[language]}</label>
                                <select name="interest" className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-moss focus:border-transparent outline-none transition-all">
                                    <option value="Health">{language === 'ar' ? 'التوعية الصحية' : 'Health Awareness'}</option>
                                    <option value="Environment">{language === 'ar' ? 'البيئة' : 'Environment'}</option>
                                    <option value="Events">{language === 'ar' ? 'تنظيم الفعاليات' : 'Event Organization'}</option>
                                    <option value="Other">{language === 'ar' ? 'أخرى' : 'Other'}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">{content.form.message[language]}</label>
                                <textarea name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-moss focus:border-transparent outline-none transition-all"></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 px-4 bg-fern text-white font-bold rounded-2xl hover:bg-opacity-90 transition-transform transform hover:scale-[1.02] shadow-md">
                                {content.form.send[language]}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteersPage;
