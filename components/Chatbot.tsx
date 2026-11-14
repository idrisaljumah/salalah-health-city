
import React, { useState, useRef, useEffect, useContext } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AppContext } from '../App';
import { AXES_DATA, COMMITTEES_DATA, LEADERS_DATA, RESOURCES_DATA } from '../constants';

const SmartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
);

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const { language } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const content = {
        title: { en: 'Salalah Health City Assistant', ar: 'مساعد مدينة صلالة الصحية' },
        placeholder: { en: 'Ask a question...', ar: 'اطرح سؤالاً...' },
        welcome: { 
            en: 'Hello! I am your AI assistant. Ask me anything about Salalah Health City, our committees, or our strategic axes.', 
            ar: 'مرحباً! أنا مساعدك الذكي. اسألني أي شيء عن مدينة صلالة الصحية، لجاننا، أو محاورنا الاستراتيجية.' 
        },
        send: { en: 'Send', ar: 'إرسال' },
        close: { en: 'Close chat', ar: 'إغلاق المحادثة' },
        open: { en: 'Open AI Assistant', ar: 'فتح المساعد الذكي' }
    };

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                { id: 'welcome', role: 'model', text: content.welcome[language] }
            ]);
        }
    }, [language]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: inputText.trim()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Construct system instruction from app data
            const systemContext = `
            You are the intelligent AI agent for "Salalah Health City", a WHO-aligned community health initiative in Oman.
            Your goal is to assist users by providing accurate information based on the initiative's data.
            
            DATA CONTEXT:
            - Leaders: ${JSON.stringify(LEADERS_DATA)}
            - Committees: ${JSON.stringify(COMMITTEES_DATA)}
            - Strategic Axes: ${JSON.stringify(AXES_DATA)}
            - Resources: ${JSON.stringify(RESOURCES_DATA)}
            
            INSTRUCTIONS:
            1. Answer questions specifically about Salalah Health City.
            2. Use the provided JSON data to answer queries about leadership, committees, axes, criteria, and resources.
            3. If the user asks in Arabic, respond in Arabic. If in English, respond in English.
            4. Be helpful, polite, and concise.
            5. If you don't know the answer based on the provided data, politely inform the user that you don't have that specific information and suggest they check the Resources page.
            `;

            const chat = ai.chats.create({
                model: 'gemini-3-pro-preview',
                config: {
                    systemInstruction: systemContext,
                },
                history: messages.filter(m => m.id !== 'welcome').map(m => ({
                    role: m.role,
                    parts: [{ text: m.text }]
                }))
            });

            const result = await chat.sendMessage({ message: userMessage.text });
            const responseText = result.text;

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: responseText || (language === 'ar' ? 'عذراً، لم أتمكن من الرد. يرجى المحاولة مرة أخرى.' : 'Sorry, I could not generate a response. Please try again.')
            };

            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: language === 'ar' ? 'حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.' : 'Connection error. Please try again later.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-5 start-5 z-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${isOpen ? 'bg-surface-primary text-text-secondary rotate-90' : 'bg-gradient-to-r from-health-blue to-health-green text-white'}`}
                aria-label={isOpen ? content.close[language] : content.open[language]}
            >
                {isOpen ? <CloseIcon className="w-6 h-6" /> : <SmartIcon className="w-6 h-6 animate-pulse" />}
                {!isOpen && (
                    <span className="absolute bottom-full start-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black/70 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {content.open[language]}
                    </span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 start-5 z-50 w-[90vw] max-w-sm h-[500px] bg-surface-primary rounded-2xl shadow-2xl border border-border-color flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-health-blue to-health-green text-white flex items-center justify-between">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <SmartIcon className="w-5 h-5" />
                            <h3 className="font-bold font-heading">{content.title[language]}</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                            <CloseIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-health-background">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                                        msg.role === 'user'
                                            ? 'bg-health-blue text-white rounded-br-none rtl:rounded-bl-none rtl:rounded-br-2xl'
                                            : 'bg-white text-text-primary border border-gray-100 rounded-bl-none rtl:rounded-br-none rtl:rounded-bl-2xl'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-bl-none rtl:rounded-br-none rtl:rounded-bl-2xl shadow-sm border border-gray-100">
                                    <div className="flex space-x-1 rtl:space-x-reverse">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-surface-primary border-t border-border-color flex items-center gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder={content.placeholder[language]}
                            className="flex-1 bg-health-background border-transparent focus:border-health-blue focus:ring-0 rounded-full px-4 py-2 text-sm"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputText.trim()}
                            className="p-2 bg-health-blue text-white rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label={content.send[language]}
                        >
                            <SendIcon className="w-5 h-5 transform rtl:rotate-180" />
                        </button>
                    </form>
                </div>
            )}
            
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default Chatbot;
