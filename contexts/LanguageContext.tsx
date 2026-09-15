'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const defaultLanguageContext: LanguageContextType = {
  lang: 'pt',
  setLanguage: () => undefined,
  toggleLanguage: () => undefined,
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);
const STORAGE_KEY = 'portfolio_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('pt');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') {
      setLang(saved);
      return;
    }

    if (window.navigator.language.toLowerCase().startsWith('en')) {
      setLang('en');
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLang(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en-GB';
  }, [lang]);

  const toggleLanguage = () => setLanguage(lang === 'pt' ? 'en' : 'pt');

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}
