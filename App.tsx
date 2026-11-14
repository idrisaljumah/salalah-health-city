
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommitteesPage from './pages/CommitteesPage';
import AxesPage from './pages/AxesPage';
import DashboardPage from './pages/DashboardPage';
import EvaluationPage from './pages/EvaluationPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import AboutLogoPage from './pages/AboutLogoPage';
import AxisSubPage from './pages/AxisSubPage';
import LeadersPage from './pages/LeadersPage';
import VolunteersPage from './pages/VolunteersPage';
import PartnersPage from './pages/PartnersPage';
import CustomCursor from './components/CustomCursor';
import AccessibilityPanel from './components/AccessibilityPanel';
import Chatbot from './components/Chatbot';
import WhatsappAssistant from './components/WhatsappAssistant';

export const AppContext = React.createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  activeAxis: string | null;
  setActiveAxis: (id: string | null) => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  isLargeText: boolean;
  toggleLargeText: () => void;
  setCurrentPage: (page: string) => void;
}>({
  language: 'ar',
  setLanguage: () => {},
  t: () => '',
  activeAxis: null,
  setActiveAxis: () => {},
  isHighContrast: false,
  toggleHighContrast: () => {},
  isLargeText: false,
  toggleLargeText: () => {},
  setCurrentPage: () => {},
});

const translations: Record<string, Record<string, string>> = {
  ar: {
    heroTitle: "مدينة صلالة الصحية - نموذج المدينة المستدامة",
    heroSubtitle: "مبادرة مجتمعية تهدف إلى تحسين جودة الحياة والبيئة والصحة في صلالة، تماشياً مع رؤية عمان 2040 وأهداف منظمة الصحة العالمية.",
    loginBtn: "تسجيل الدخول للتقييم",
    skipToContent: "انتقل إلى المحتوى الرئيسي",
  },
  en: {
    heroTitle: "Salalah Health City - A Model for a Sustainable City",
    heroSubtitle: "A community initiative aimed at improving the quality of life, environment, and health in Salalah, in line with Oman Vision 2040 and WHO goals.",
    loginBtn: "Evaluation Login",
    skipToContent: "Skip to main content",
  }
};


const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [currentPage, setCurrentPage] = useState('home');
  const [activeAxis, setActiveAxis] = useState<string | null>(null);
  
  // Accessibility State
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  const toggleLargeText = () => setIsLargeText(prev => !prev);
  
  const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return isVisible ? (
      <button onClick={scrollToTop} className="fixed bottom-28 end-5 bg-health-blue text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-opacity z-50" aria-label={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
      </button>
    ) : null;
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'about-logo':
        return <AboutLogoPage />;
      case 'leaders':
        return <LeadersPage />;
      case 'committees':
        return <CommitteesPage />;
      case 'axes':
        return activeAxis ? <AxisSubPage /> : <AxesPage />;
      case 'partners':
        return <PartnersPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'evaluation':
        return <EvaluationPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'volunteers':
        return <VolunteersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
  
  const mainClasses = [
    isHighContrast ? 'high-contrast' : '',
    isLargeText ? 'large-text' : '',
  ].join(' ');

  return (
    <AppContext.Provider value={{ language, setLanguage: handleSetLanguage, t, activeAxis, setActiveAxis, isHighContrast, toggleHighContrast, isLargeText, toggleLargeText, setCurrentPage }}>
      <div className={`bg-health-background min-h-screen flex flex-col font-sans ${language === 'ar' ? 'font-heading' : 'font-sans'} ${mainClasses}`}>
        <CustomCursor />
        <a href="#main-content" className="skip-to-content">{t('skipToContent')}</a>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main id="main-content" key={currentPage + (activeAxis || '')} className="page-transition">
          {renderPage()}
        </main>
        <Footer />
        <AccessibilityPanel />
        <BackToTopButton />
        <Chatbot />
        {/* <WhatsappAssistant /> */}
      </div>
    </AppContext.Provider>
  );
};

export default App;
