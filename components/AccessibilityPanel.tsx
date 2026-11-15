
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../App';

const AccessibilityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></svg>
);
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);
const SpeakerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>
);

const AccessibilityPanel: React.FC = () => {
    const { language, isHighContrast, toggleHighContrast, isLargeText, toggleLargeText } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleSpeak = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            const text = mainContent.innerText || mainContent.textContent || '';
            const utterance = new SpeechSynthesisUtterance(text);
            
            const voices = window.speechSynthesis.getVoices();
            const targetLang = language === 'ar' ? 'ar-OM' : 'en-GB';
            const voice = voices.find(v => v.lang === targetLang) || voices.find(v => v.lang.startsWith(language));
            
            if (voice) {
                utterance.voice = voice;
            }
            utterance.lang = targetLang;
            
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };
    
    // Pre-load voices
    useEffect(() => {
        window.speechSynthesis.getVoices();
    }, []);

    const content = {
        togglePanel: { en: "Open Accessibility Panel", ar: "فتح لوحة الوصول" },
        closePanel: { en: "Close Accessibility Panel", ar: "إغلاق لوحة الوصول" },
        title: { en: "Accessibility Tools", ar: "أدوات الوصول" },
        readPage: { en: "Read This Page", ar: "اقرأ هذه الصفحة" },
        stopReading: { en: "Stop Reading", ar: "إيقاف القراءة" },
        highContrast: { en: "High Contrast", ar: "تباين عالٍ" },
        largeText: { en: "Large Text", ar: "نص كبير" },
    };

    return (
        <div className="fixed bottom-5 end-5 z-50">
            {isOpen && (
                <div className="bg-surface-primary shadow-2xl rounded-3xl p-5 w-72 border border-border-color mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-text-primary">{content.title[language]}</h3>
                         <button onClick={() => setIsOpen(false)} className="p-1 text-text-secondary hover:text-text-primary" aria-label={content.closePanel[language]}>
                            <CloseIcon className="w-5 h-5"/>
                        </button>
                    </div>
                    <ul className="space-y-3">
                        <li>
                            <button onClick={handleSpeak} className="w-full text-start flex items-center justify-between p-2 rounded hover:bg-surface-secondary">
                                <span>{isSpeaking ? content.stopReading[language] : content.readPage[language]}</span>
                                <SpeakerIcon className={`w-5 h-5 ${isSpeaking ? 'text-alert' : ''}`} />
                            </button>
                        </li>
                        <li className="flex items-center justify-between p-2">
                           <label htmlFor="high-contrast-toggle">{content.highContrast[language]}</label>
                           <input type="checkbox" id="high-contrast-toggle" checked={isHighContrast} onChange={toggleHighContrast} className="toggle-switch" />
                        </li>
                        <li className="flex items-center justify-between p-2">
                           <label htmlFor="large-text-toggle">{content.largeText[language]}</label>
                           <input type="checkbox" id="large-text-toggle" checked={isLargeText} onChange={toggleLargeText} className="toggle-switch" />
                        </li>
                    </ul>
                </div>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="bg-moss text-white p-4 rounded-full shadow-lg hover:bg-opacity-80" aria-label={content.togglePanel[language]} aria-expanded={isOpen}>
                <AccessibilityIcon className="w-6 h-6"/>
            </button>
            <style>{`
                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 34px;
                    height: 20px;
                    background-color: #ccc;
                    border-radius: 20px;
                    transition: background-color 0.3s;
                    appearance: none;
                    cursor: pointer;
                }
                .toggle-switch:before {
                    content: '';
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: white;
                    top: 2px;
                    left: 2px;
                    transition: transform 0.3s;
                }
                .toggle-switch:checked {
                    background-color: rgb(var(--fern));
                }
                .toggle-switch:checked:before {
                    transform: translateX(14px);
                }
            `}</style>
        </div>
    );
};

export default AccessibilityPanel;
