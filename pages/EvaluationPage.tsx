
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

type Role = 'beneficiary' | 'committee';

const LoginForm: React.FC<{ role: Role }> = ({ role }) => {
    const { language } = useContext(AppContext);
    const content = {
        username: { en: 'Username or ID', ar: 'اسم المستخدم أو الرقم التعريفي' },
        password: { en: 'Password', ar: 'كلمة المرور' },
        login: { en: 'Login', ar: 'تسجيل الدخول' },
        beneficiaryTitle: { en: 'Beneficiary Portal', ar: 'بوابة المستفيدين' },
        committeeTitle: { en: 'Committee Portal', ar: 'بوابة اللجان' },
    };

    return (
        <form className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-center text-gray-800">
                {role === 'beneficiary' ? content.beneficiaryTitle[language] : content.committeeTitle[language]}
            </h3>
            <div>
                <label htmlFor={`${role}-username`} className="block text-sm font-medium text-gray-700">{content.username[language]}</label>
                <div className="mt-1">
                    <input id={`${role}-username`} name="username" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-health-blue focus:border-health-blue sm:text-sm" />
                </div>
            </div>
            <div>
                <label htmlFor={`${role}-password`} className="block text-sm font-medium text-gray-700">{content.password[language]}</label>
                <div className="mt-1">
                    <input id={`${role}-password`} name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-health-blue focus:border-health-blue sm:text-sm" />
                </div>
            </div>
            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-health-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-health-blue">
                    {content.login[language]}
                </button>
            </div>
        </form>
    );
};

const EvaluationPage: React.FC = () => {
    const { language } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState<Role>('beneficiary');

    const content = {
        title: { en: 'Digital Evaluation Platform', ar: 'منصة التقييم الرقمي' },
        subtitle: { en: 'Secure access for data submission and evaluation.', ar: 'وصول آمن لتقديم البيانات والتقييم.' },
        beneficiaryTab: { en: 'Beneficiary', ar: 'مستفيد' },
        committeeTab: { en: 'Committee', ar: 'عضو لجنة' },
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-health-background">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold font-heading text-health-blue tracking-tight">
                        {content.title[language]}
                    </h1>
                    <p className="mt-2 text-gray-600">{content.subtitle[language]}</p>
                </div>
                <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl">
                    <div className="mb-6 border-b border-gray-200">
                        <nav className="-mb-px flex space-x-4 rtl:space-x-reverse" aria-label="Tabs">
                            <button
                                onClick={() => setActiveTab('beneficiary')}
                                className={`${activeTab === 'beneficiary' ? 'border-health-blue text-health-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm w-1/2`}
                            >
                                {content.beneficiaryTab[language]}
                            </button>
                            <button
                                onClick={() => setActiveTab('committee')}
                                className={`${activeTab === 'committee' ? 'border-health-blue text-health-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm w-1/2`}
                            >
                                {content.committeeTab[language]}
                            </button>
                        </nav>
                    </div>
                    <div>
                        {activeTab === 'beneficiary' ? <LoginForm role="beneficiary" /> : <LoginForm role="committee" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvaluationPage;
