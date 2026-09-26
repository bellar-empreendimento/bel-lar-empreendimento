'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const phoneNumber = "5594991441811";
  const message = "Olá!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Automatically open the popup after 5 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowNotification(false);
  };

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* Popup Window */}
      <div 
        className={`mb-4 transition-all duration-300 origin-bottom-left ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-[#0b1e3e] p-4 flex items-center justify-between relative">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#f2521c] bg-white flex items-center justify-center p-1">
                <Image src="/midia/sobre/favicon.webp" alt="Bel Lar Empreendimentos" width={40} height={40} className="object-contain" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0b1e3e]"></div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-tight">Bel Lar Empreendimentos</h4>
                <p className="text-white/80 text-xs">Atendimento</p>
              </div>
            </div>
            <button 
              onClick={closePopup}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat Area */}
          <div className="bg-[#f0f2f5] p-4 pb-6">
            <div className="bg-white rounded-lg p-3 rounded-tl-none shadow-sm inline-block max-w-[85%] relative">
              <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
              <h5 className="text-[#0b1e3e] text-xs font-bold mb-1">Bel Lar Empreendimentos</h5>
              <p className="text-gray-700 text-sm">Olá, como posso ajudar?</p>
              <div className="text-[10px] text-gray-400 text-right mt-1">Agora</div>
            </div>
          </div>
          
          {/* Footer Action */}
          <div className="p-4 bg-white text-center">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold rounded-full py-3 px-6 w-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.36L.23 24l5.83-1.53A11.9 11.9 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm.056 21.98c-1.89 0-3.74-.51-5.36-1.47l-.38-.23-3.98 1.05 1.06-3.88-.25-.4A9.97 9.97 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.46-7.46c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.8-1.47-1.79-1.64-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.5.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.11.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Button */}
      <button 
        onClick={toggleOpen}
        className={`w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105 relative ${isOpen ? 'rotate-[-15deg]' : ''}`}
        aria-label="Atendimento via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.36L.23 24l5.83-1.53A11.9 11.9 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm.056 21.98c-1.89 0-3.74-.51-5.36-1.47l-.38-.23-3.98 1.05 1.06-3.88-.25-.4A9.97 9.97 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.46-7.46c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.8-1.47-1.79-1.64-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.5.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.11.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
        
        {/* Notification Dot */}
        {showNotification && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
}
