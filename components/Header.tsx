
import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';
import SitemapModal from './SitemapModal';

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useContext(AppContext);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
            className="px-3 py-2 text-sm font-medium text-text-secondary bg-surface-secondary rounded-md hover:bg-border-color transition-colors"
        >
            {language === 'en' ? 'العربية' : 'English'}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const { language, setActiveAxis } = useContext(AppContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSitemapOpen, setIsSitemapOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);
    
    const [searchResults, setSearchResults] = useState<NavLink[]>([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const desktopSearchRef = useRef<HTMLDivElement>(null);
    const mobileSearchRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            const recognition = recognitionRef.current;
            recognition.continuous = false;
            recognition.lang = language === 'ar' ? 'ar-OM' : 'en-GB';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setSearchQuery(transcript);
                setIsListening(false);
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };

            recognition.onend = () => {
                setIsListening(false);
            };
        }
    }, [language]);
    
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = NAV_LINKS.filter(link =>
            link.id !== 'news' && (
            link.label.en.toLowerCase().includes(lowerCaseQuery) ||
            link.label.ar.toLowerCase().includes(lowerCaseQuery))
        );
        setSearchResults(filtered);
    }, [searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const isOutsideDesktop = !desktopSearchRef.current || !desktopSearchRef.current.contains(target);
            const isOutsideMobile = !mobileSearchRef.current || !mobileSearchRef.current.contains(target);

            if (isOutsideDesktop && isOutsideMobile) {
                setIsSearchActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleListen = () => {
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
        setIsListening(!isListening);
    };

    const handleNavClick = (page: string) => {
        if (page === 'news') {
            window.open('https://x.com/SalHealthCity', '_blank');
            return;
        }
        setCurrentPage(page);
        setActiveAxis(null);
        setIsMenuOpen(false);
        setSearchQuery('');
        setIsSearchActive(false);
    };
    
    const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    );
    
    const MicIcon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"></path></svg>
    );

    const MapIcon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
    );

    const searchResultsPanel = (
      isSearchActive && searchQuery && (
        <div className="absolute top-full mt-2 w-full bg-surface-primary rounded-md shadow-lg border border-border-color z-20 max-h-80 overflow-y-auto">
          {searchResults.length > 0 ? (
            <ul role="listbox">
              {searchResults.map((link) => (
                <li key={link.id} role="option" aria-selected={false}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="w-full text-start px-4 py-2 hover:bg-surface-secondary transition-colors"
                  >
                    {link.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-text-secondary italic">
              {language === 'ar' ? 'لا توجد نتائج' : 'No results found'}
            </p>
          )}
        </div>
      )
    );

    return (
        <>
        <header className="bg-surface-primary/95 backdrop-blur-md shadow-md sticky top-0 z-[900] h-20 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    
                    {/* Compact Logo for Navbar */}
                    <div className="flex items-center shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
                         <img 
                            src="https://i.im.ge/2025/11/10/nnFN90.Logo-design.png" 
                            alt={language === 'ar' ? 'شعار مدينة صلالة الصحية' : 'Salalah Health City Logo'}
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse" aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main Navigation'}>
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`font-medium text-text-secondary hover:text-health-blue transition-colors pb-1 border-b-2 ${currentPage === link.id ? 'text-health-blue border-health-blue' : 'border-transparent'}`}
                                aria-current={currentPage === link.id ? 'page' : undefined}
                            >
                                {link.label[language]}
                            </button>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
                        
                        {/* Search and Sitemap */}
                        <div ref={desktopSearchRef} className="relative flex items-center gap-2">
                           <button onClick={() => setIsSitemapOpen(true)} className="p-2 text-text-secondary hover:text-health-blue transition-colors rounded-full hover:bg-surface-secondary" aria-label={language === 'ar' ? 'خارطة الموقع' : 'Sitemap'}>
                                <MapIcon className="w-6 h-6" />
                           </button>
                           <div className="flex items-center bg-surface-secondary rounded-full pl-3 pr-2 py-1 shadow-inner border border-gray-200">
                               <SearchIcon className="w-5 h-5 text-text-secondary" />
                               <input
                                   type="search"
                                   placeholder={language === 'ar' ? 'ابحث...' : 'Search...'}
                                   className="bg-transparent focus:outline-none text-sm w-32 transition-all duration-300 mx-2 focus:w-48"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                                   onFocus={() => setIsSearchActive(true)}
                                   aria-label={language === 'ar' ? 'بحث في الموقع' : 'Search site'}
                               />
                                {recognitionRef.current && (
                                <button onClick={handleListen} className={`p-1 rounded-full ${isListening ? 'text-health-alert animate-pulse' : 'text-text-secondary hover:text-health-blue'}`} aria-label={language === 'ar' ? 'بحث صوتي' : 'Search by voice'}>
                                    <MicIcon className="w-5 h-5" />
                                </button>
                                )}
                            </div>
                            {searchResultsPanel}
                        </div>

                        <LanguageSwitcher />
                        
                        <div className="flex flex-col items-center">
                             <button onClick={() => handleNavClick('dashboard')} className="px-4 py-2 text-health-blue border border-health-blue rounded-full hover:bg-health-blue hover:text-white shadow-sm transition-transform transform hover:scale-105 text-sm font-bold bg-transparent">
                                {language === 'ar' ? 'لوحة المؤشرات' : 'Dashboard'}
                            </button>
                            <span className="text-[10px] text-health-alert font-bold mt-0.5">{language === 'ar' ? 'قريباً' : 'Coming soon'}</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <button onClick={() => handleNavClick('evaluation')} className="px-4 py-2 text-white bg-health-blue rounded-full hover:bg-opacity-90 shadow-sm transition-transform transform hover:scale-105 text-sm font-bold">
                                {language === 'ar' ? 'الرصد والتقييم' : 'Monitoring and Evaluation'}
                            </button>
                            <span className="text-[10px] text-health-alert font-bold mt-0.5">{language === 'ar' ? 'قريباً' : 'Coming soon'}</span>
                        </div>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button onClick={() => setIsSitemapOpen(true)} className="p-2 text-text-secondary hover:text-health-blue" aria-label="Sitemap">
                            <MapIcon className="w-6 h-6" />
                        </button>
                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-health-blue" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-surface-primary border-t border-border-color" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         <div ref={mobileSearchRef} className="relative px-2 mb-2">
                            <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-5' : 'left-0 pl-5'}`}>
                                <SearchIcon className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="search"
                                placeholder={language === 'ar' ? 'ابحث...' : 'Search...'}
                                className={`block w-full bg-surface-secondary border-transparent rounded-full py-2 text-sm focus:outline-none focus:ring-2 focus:ring-health-blue ${language === 'ar' ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                                aria-label={language === 'ar' ? 'بحث في الموقع' : 'Search site'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchActive(true)}
                            />
                            {searchResultsPanel}
                        </div>
                        {NAV_LINKS.map(link => (
                           <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`block w-full text-start px-3 py-2 rounded-md font-medium ${currentPage === link.id ? 'bg-health-blue text-white' : 'text-text-primary hover:bg-surface-secondary'}`}
                                aria-current={currentPage === link.id ? 'page' : undefined}
                           >
                               {link.label[language]}
                           </button>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-border-color">
                        <div className="flex flex-col items-center px-5 space-y-3">
                            <LanguageSwitcher />
                             <div className="w-full flex items-center justify-between">
                                <button onClick={() => handleNavClick('dashboard')} className="flex-1 text-center px-4 py-2 text-health-blue border border-health-blue rounded-full hover:bg-health-blue hover:text-white shadow-sm text-sm font-bold bg-transparent">
                                {language === 'ar' ? 'لوحة المؤشرات' : 'Dashboard'}
                                </button>
                                <span className="ml-2 text-xs text-health-alert font-bold">{language === 'ar' ? 'قريباً' : 'Coming soon'}</span>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <button onClick={() => handleNavClick('evaluation')} className="flex-1 text-center px-4 py-2 text-white bg-health-blue rounded-full hover:bg-opacity-90 shadow-sm text-sm">
                                {language === 'ar' ? 'الرصد والتقييم' : 'Monitoring and Evaluation'}
                                </button>
                                <span className="ml-2 text-xs text-health-alert font-bold">{language === 'ar' ? 'قريباً' : 'Coming soon'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
        <SitemapModal isOpen={isSitemapOpen} onClose={() => setIsSitemapOpen(false)} onNavigate={handleNavClick} />
        </>
    );
};

export default Header;
