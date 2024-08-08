"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#252525] min-w-[200px] py-8 relative text-white font-body text-center">
      <div>
        <p className="text-white text-[22px] font-semibold">{t('companyName')}</p>
      </div>
      <p className="text-white text-[16px] font-normal mt-6">
        {t('address')}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
        <div className="flex items-center">
          <img src="/footer1.png" alt="Phone Icon" className="mr-2" />
          <span>{t('phone1')}</span>
        </div>
        <div className="flex items-center">
          <img src="/footer2.png" alt="Phone Icon" className="mr-2" />
          <span>{t('phone2')}</span>
        </div>
        <div className="flex items-center">
          <img src="/footer3.png" alt="Email Icon" className="mr-2" />
          <a
            href={`mailto:${t('email')}`}
            className="text-white hover:text-gray-300"
          >
            {t('email')}
          </a>
        </div>
      </div>
      <p className="copyrights text-[#999] text-[.9166666666666667em] font-bold mt-6">
        {t('footerCopyRight')}
      </p>
    </div>
  );
};

export default Footer;
