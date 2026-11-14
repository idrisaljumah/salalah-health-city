
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { AppContext } from '../App';
import { NAV_LINKS } from '../constants';

interface SitemapModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (page: string) => void;
}

const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose, onNavigate }) => {
    const { language } = useContext(AppContext);

    if (!isOpen) return null;

    const content = {
        title: { en: 'Sitemap', ar: 'خارطة الموقع' },
        close: { en: 'Close', ar: 'إغلاق' }
    };

    return createPortal(
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-scale-in">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-2xl font-bold font-heading text-health-blue">{content.title[language]}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label={content.close[language]}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                    <div className="grid gap-3">
                        {NAV_LINKS.filter(link => link.id !== 'news').map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    onNavigate(link.id);
                                    onClose();
                                }}
                                className="flex items-center p-3 rounded-lg hover:bg-health-background transition-colors text-start group"
                            >
                                <span className="w-2 h-2 rounded-full bg-health-blue/50 group-hover:bg-health-blue transition-colors me-3"></span>
                                <span className="text-lg text-gray-700 group-hover:text-health-blue font-medium">{link.label[language]}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SitemapModal;
