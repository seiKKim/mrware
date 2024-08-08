'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, []);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    router.refresh();
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/icare_main.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="relative z-10">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4">
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
          >
            <img src="/language-icon.png" alt="Language" className="w-10 h-10 mr-20 mt-5" />
            {/* <span>{i18n.language.toUpperCase()}</span> */}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 py-4 w-30 bg-white rounded-md shadow-xl z-20 mr-20">
              <button
                className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                onClick={() => changeLanguage('en')}
              >
                English
              </button>
              <button
                className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                onClick={() => changeLanguage('ko')}
              >
                한국어
              </button>
            </div>
          )}
        </div>
      </div>

        <div className="main-banner-header-wrap pt-[10rem] pb-[10rem] px-8 md:px-16 lg:px-32">
          <div className="main-banner-title text-4xl font-bold text-[#FFFFFF] text-[63px] font-extrabold leading-[1.2] break-words text-center">
            <label>{t('Medical Reality,')}</label> <label>{t('MRWARE')}</label>
          </div>
          <div className="main-banner-desc mt-6 text-[#FFFFFF] text-[29px] font-medium leading-[1.2] break-words text-center ">
            <p className="mt-10">{t('의료 실습 플랫폼 MRWARE에서')}</p>
            <p className="mt-5">
              {t('실습부터 실습결과 관리까지, 언제 어디서든 만나 보세요.')}
            </p>
            <p className="mt-5">
              {t('의료 실습 교육의 새로운 패러다임을 제시합니다.')}
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-16 lg:px-0 justify-items-center items-center">
          <div className="main-banner-nav-list mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 max-w-[1024px] mx-auto">
            <a href="/nursing" className="block flex group">
              <div className="bg-white p-10 flex rounded-lg cursor-pointer w-full h-full flex-col group-hover:bg-[#FF535D] group-hover:text-white transition duration-300 transform group-hover:scale-105 shadow-[0_10px_15px_rgba(28,28,28,0.5)] hover:shadow-[0_15px_25px_rgba(28,28,28,0.5)]">
                <p className="text-[#FF535D] cursor-pointer text-[24px] font-[600] font-['Noto Sans'] leading-[24px] text-center group-hover:text-white">
                  {t('핵심간호술기')}
                </p>
                <img
                  src="/nursingskill.png"
                  alt="nursing skill"
                  className="w-[150px] h-[170px] mx-auto mt-4"
                />
                <div className="mt-auto flex justify-end">
                  <img
                    src="/mrarrow.png"
                    alt="arrow"
                    className="w-8 h-8 group-hover:content-['url(/mrarrowhover.png)']"
                  />
                </div>
              </div>
            </a>

            <a href="/Physioterapy" className="block flex group">
              <div className="bg-white p-10 flex rounded-lg cursor-pointer w-full h-full flex-col group-hover:bg-[#1BC768] group-hover:text-white transition duration-300 transform group-hover:scale-105 shadow-[0_10px_15px_rgba(28,28,28,0.5)] hover:shadow-[0_15px_25px_rgba(28,28,28,0.5)]">
                <p className="text-[#1BC768] cursor-pointer text-[24px] font-[600] font-['Noto Sans'] leading-[24px] text-center group-hover:text-[#FFFFFF]">
                  {t('물리치료')}
                </p>
                <img
                  src="/mr.png"
                  alt="nursing skill"
                  className="w-[150px] h-[170px] mx-auto mt-4"
                />
                <div className="mt-auto flex justify-end">
                  <img
                    src="/mrarrow.png"
                    alt="arrow"
                    className="w-8 h-8 group-hover:content-['url(/mrarrowhover.png)']"
                  />
                </div>
              </div>
            </a>

            <a href="/carehub" className="block flex group">
              <div className="bg-white p-10 flex rounded-lg cursor-pointer w-full h-full flex-col group-hover:bg-[#39D0FF] group-hover:text-white transition duration-300 transform group-hover:scale-105 shadow-[0_10px_15px_rgba(28,28,28,0.5)] hover:shadow-[0_15px_25px_rgba(28,28,28,0.5)]">
                <p className="text-[#39D0FF] cursor-pointer text-[24px] font-[600] font-['Noto Sans'] leading-[24px] text-center group-hover:text-[#FFFFFF]">
                  {t('요양보호')}
                </p>
                <img
                  src="/health.png"
                  alt="nursing skill"
                  className="w-[150px] h-[170px] mx-auto mt-4"
                />
                <div className="mt-auto flex justify-end">
                  <img
                    src="/mrarrow.png"
                    alt="arrow"
                    className="w-8 h-8 group-hover:content-['url(/mrarrowhover.png)']"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
