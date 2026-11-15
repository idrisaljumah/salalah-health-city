
import React, { useState, useRef, useContext } from 'react';
import { AppContext } from '../App';

const InteractiveMap: React.FC = () => {
    const { language } = useContext(AppContext);
    const [viewMode, setViewMode] = useState<'image' | 'google'>('image');
    
    // Zoom/Pan state for Image
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const content = {
        title: { en: 'Salalah Health City Map', ar: 'خارطة مدينة صلالة الصحية' },
        subtitle: { en: 'Explore the master plan and real-time location data.', ar: 'استكشف المخطط العام وبيانات الموقع في الوقت الفعلي.' },
        masterPlan: { en: 'Master Plan', ar: 'المخطط العام' },
        googleMap: { en: 'Live Google Map', ar: 'خارطة جوجل المباشرة' },
        reset: { en: 'Reset View', ar: 'إعادة ضبط العرض' },
        hint: { en: 'Click and drag to move, use controls to zoom.', ar: 'انقر واسحب للتحريك، استخدم أدوات التحكم للتكبير.' }
    };

    const handleZoom = (factor: number) => {
        setScale(prev => Math.min(Math.max(1, prev + factor), 4));
    };
    
    const resetZoom = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (viewMode !== 'image') return;
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || viewMode !== 'image') return;
        e.preventDefault();
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <section className="py-20 bg-surface-primary" aria-labelledby="map-title">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 id="map-title" className="text-3xl font-bold font-heading text-moss">{content.title[language]}</h2>
                    <p className="mt-2 text-text-secondary">{content.subtitle[language]}</p>
                </div>

                <div className="flex justify-center mb-6 space-x-4 rtl:space-x-reverse">
                    <button
                        onClick={() => setViewMode('image')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${viewMode === 'image' ? 'bg-moss text-white' : 'bg-surface-primary text-text-secondary border border-border-color hover:bg-gray-100'}`}
                    >
                        {content.masterPlan[language]}
                    </button>
                    <button
                        onClick={() => setViewMode('google')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${viewMode === 'google' ? 'bg-moss text-white' : 'bg-surface-primary text-text-secondary border border-border-color hover:bg-gray-100'}`}
                    >
                        {content.googleMap[language]}
                    </button>
                </div>

                <div className="relative w-full h-[600px] bg-surface-primary rounded-3xl overflow-hidden border border-border-color group">
                    {viewMode === 'image' ? (
                        <div 
                            className="w-full h-full relative cursor-move overflow-hidden"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            ref={containerRef}
                        >
                            <img 
                                ref={imgRef}
                                src="https://i.im.ge/2025/11/23/4azmBh.7.jpeg" 
                                alt="Salalah Health City Master Plan" 
                                className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-75 origin-center"
                                style={{ 
                                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                                }}
                                draggable={false}
                            />
                            
                            {/* Controls Overlay */}
                            <div className="absolute bottom-6 right-6 flex flex-col gap-2 bg-surface-primary/90 backdrop-blur rounded-2xl shadow-lg p-2 z-10">
                                <button onClick={() => handleZoom(0.5)} className="p-2 hover:bg-gray-100 rounded text-moss" aria-label="Zoom In">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                </button>
                                <button onClick={() => handleZoom(-0.5)} className="p-2 hover:bg-gray-100 rounded text-moss" aria-label="Zoom Out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
                                </button>
                                <button onClick={resetZoom} className="p-2 hover:bg-gray-100 rounded text-moss" aria-label="Reset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0 0h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 0h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0 0L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 0L15 15" /></svg>
                                </button>
                            </div>
                            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur pointer-events-none z-10">
                                {content.hint[language]}
                            </div>
                        </div>
                    ) : (
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.347517173425!2d54.09172355!3d17.01428785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd1798363385759%3A0x86733276856037e9!2sSalalah%2C%20Oman!5e1!3m2!1sen!2s!4v1732380000000!5m2!1sen!2s" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Salalah Google Map"
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default InteractiveMap;
