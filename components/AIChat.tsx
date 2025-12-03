import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    const session = createChatSession();
    if (session) {
      setChatSession(session);
      setMessages([{ role: 'model', text: "Welcome to Vortex! I'm your AI assistant. Need help finding the perfect gear?" }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || !chatSession) return;

    const userMsg = inputText.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');
    setIsLoading(true);

    const reply = await sendMessageToGemini(chatSession, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!chatSession) return null; // Don't show if no API key configured

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-vortex-accent/30 transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-vortex-800 text-white rotate-90' : 'bg-vortex-accent text-black'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-vortex-900 border border-vortex-accent/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-vortex-800 p-4 border-b border-white/10 flex items-center">
            <Bot className="text-vortex-accent mr-2" size={20} />
            <div>
              <h3 className="text-white font-bold">Vortex AI</h3>
              <p className="text-xs text-vortex-accent animate-pulse">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-vortex-800">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-vortex-accent text-black rounded-tr-none'
                      : 'bg-vortex-800 text-gray-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-vortex-800 rounded-2xl rounded-tl-none px-4 py-2 border border-white/5 flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-vortex-800/50 border-t border-white/10">
            <div className="flex items-center bg-vortex-900 rounded-full border border-white/10 px-4 py-2 focus-within:border-vortex-accent/50 transition-colors">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about gaming gear..."
                className="bg-transparent border-none focus:ring-0 text-white w-full text-sm placeholder-gray-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="text-vortex-accent hover:text-white disabled:opacity-50 transition-colors ml-2"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
