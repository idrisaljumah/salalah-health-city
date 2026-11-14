import React from 'react';

const WhatsappAssistant: React.FC = () => (
    <a
        href="https://wa.me/96872540404"
        className="fixed bottom-5 start-[90px] z-[1000] no-underline transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="رسال - واتساب"
    >
        <div className="flex items-center bg-[#25D366] px-[15px] py-[10px] rounded-[50px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                className="w-[35px] h-[35px] me-[10px]" 
                alt="WhatsApp" 
            />
            <span className="text-white text-[18px] font-bold font-heading">رسال</span>
        </div>
    </a>
);

export default WhatsappAssistant;