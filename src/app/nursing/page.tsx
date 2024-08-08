"use client";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const NursingPage  = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className="NursingSkillBanner">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="main-banner-title text-4xl font-bold text-[#FFFFFF] text-[63px] font-extrabold leading-[1.2] break-words text-center">
            {t('coreNursingSkills')}
          </div>
          <div className="text-2xl mt-8 mb-8 font-medium text-center text-[34.2px] leading-[44.46px] font-['Noto Sans KR']">
            {t('practiceManage')}
          </div>

          <div className="flex flex-col mt-60 md:flex-row md:space-x-20 space-y-4 md:space-y-0 items-center">
            <a
              href="https://nursingskill.mrware.us/web/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#20cbba] hover:bg-[#39bfe7] rounded-full w-[250px] h-[60px] transition-colors duration-300 transform hover:scale-105  shadow-lg"
            >
              <img src="/Group1.png" alt="Icon" className="w-6 h-6 mr-2" />
              {t('nav1')}
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#d764ff] hover:bg-[#e28cff] rounded-full w-[250px] h-[60px] transition-colors duration-300 transform hover:scale-105  shadow-lg"
            >
              <img src="/Group2.png" alt="Icon" className="w-6 h-6 mr-2" />
              {t('nav3')}
            </a>
          </div>

          <div className="flex flex-col mt-10 md:flex-row md:space-x-20 space-y-4 md:space-y-0 items-center">
            <a
              href="https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_4da40ab7f9d14b998a98d89a4810f18b/images/%ED%95%B5%EC%8B%AC%EA%B0%84%ED%98%B8%EC%88%A0%EA%B8%B0/%ED%95%B5%EC%8B%AC%EA%B0%84%ED%98%B8%EC%88%A0%EA%B8%B0%20%EC%BD%98%ED%85%90%EC%B8%A0%20%ED%99%9C%EC%9A%A9%20%EB%A7%A4%EB%89%B4%EC%96%BC_V.02%20(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#8168ff] hover:bg-[#9b8bff] rounded-full w-full md:w-[570px] h-[60px] transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
              <img src="/Group2.png" alt="Icon" className="w-6 h-6 mr-2" />
              {t('nav2')}
            </a>
          </div>
        </div>
      </div>

      <div className="nursing-skill-intro-wrap bg-[#F8F8FF]">
        {/* 첫번째 */}
        <div className="first flex justify-center items-center py-40 flex-col sm:flex-row ">
          <div className="contents-1 w-[300px] h-[350px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10 shadow-lg transition-transform duration-2 transform hover:scale-105">
          <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-1.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                Student
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('practiceAnywhere2')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('practiceAnyhere')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('likeRepeatedPractice')} 
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('likeRepeatedPractice2')}   
              </p>
            </div>
          </div>
          <div className="contents-2 w-[300px] h-[350px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10 shadow-lg transition-transform duration-2 transform hover:scale-105">
            <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-2.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                Professor
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                <span className="line-1">{t('studentLearningStatus')}&nbsp;</span>
                <span className="line-2">{t('studentLearningStatus2')}</span>
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                {t('feedbackIsGood')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                {t('coreNursingSkillScoring')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                {t('coreNursingSkillManaging')}
              </p>
            </div>
          </div>
          <div className="contents-2 w-[300px] h-[350px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10 shadow-lg transition-transform duration-2 transform hover:scale-105">
            <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-3.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                School
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                {t('vrDesc1')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                {t('vrDesc2')}
              </p>
            </div>
          </div>
        </div>
        {/* 두번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#f2f0f4]">
            <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
              <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
                {t('welcomeMessage')}
              </h1>
              <div className="nursing-skill-desc mt-8 text-center">
                <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                  {t('introDescription1')}
                </p>
                <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                  {t('introDescription2')}
                </p>
              </div>
              <div className="w-full max-w-[1024px] h-auto mt-10 rounded-[20px] bg-[#FFFFFF] flex flex-col md:flex-row justify-between items-center p-4">
                <div className="w-full md:w-1/2 pr-4">
                  <video
                    className="w-full h-auto rounded-[20px]"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/nursing_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 pl-4">
                  <div className="flex flex-col items-start">
                    <div className="w-[124.15px] h-[42.79px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9] mb-4">
                      <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                        {t('onsiteFeeling')}
                      </p>
                    </div>
                    <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[30px] text-[#2F2F2F] mb-6">
                      {t('onsiteFeelingDescription')}
                    </p>
                    <div className="w-[124.15px] h-[42.79px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9] mb-4">
                      <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                        {t('practice')}
                      </p>
                    </div>
                    <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[30px] text-[#2F2F2F] mb-6">
                      {t('practiceDescription')}
                    </p>
                    <div className="w-[124.15px] h-[42.79px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9] mb-4">
                      <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                        {t('evaluation')}
                      </p>
                    </div>
                    <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[30px] text-[#2F2F2F]">
                      {t('evaluationDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    {/* 세번째 */}
                    <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#20cbba]">
            <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
              <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
                {t('immersivePractice')}
              </h1>
              <div className="nursing-skill-desc mt-8 text-center">
                <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                  {t('immersionDescription1')}
                </p>
              </div>
              <div className="w-full max-w-[1420px] mt-10 rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box10.png"
                        alt="Image 1"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('immediateAccess')}
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box11.png"
                        alt="Image 4"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                        {t('goalAndSituation')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box12.png"
                        alt="Image 1"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('learningAndAssessment')}
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box13.png"
                        alt="Image 4"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('coreSkillsSelection')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box3.png"
                        alt="Image 1"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('customizableQuestions')}
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box14.png"
                        alt="Image 4"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('multipleChoiceQuestions')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box15.png"
                        alt="Image 1"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('supplementaryVideos')}
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                    <div className="w-full h-[208px] rounded-[20px]">
                      <img
                        src="/box16.png"
                        alt="Image 4"
                        className="w-full h-full rounded-[20px]"
                      />
                    </div>
                    <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                      <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                        {t('voiceRecognition')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* 네번째 */}
<div className="second flex flex-col justify-center items-center py-20 w-full bg-[#d764ff]">
            <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
              <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
                {t('practiceEvaluationManagement')}
              </h1>
            </div>
            <div className="w-full max-w-[1060.04px] h-auto md:h-[260px] mt-10 rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#1BC768] shadow-[0_4px_24px_rgba(233,233,233,0.5)]">
              <div className="flex flex-col md:flex-row justify-between items-center p-4 md:h-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-[370.34px] h-[208.21px] rounded-[10px] border-[1px] border-[#EFEFEF]">
                    <img
                      src="/stu.png"
                      alt="Image"
                      className="w-full h-full rounded-[10px]"
                    />
                  </div>
                  <div className="md:ml-10 mt-4 md:mt-0">
                    <div className="w-[90.69px] h-[36.77px] rounded-[100px] flex justify-center items-center bg-[#1BC768]">
                      <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                        {t('student')}
                      </p>
                    </div>
                    <div className="text-center mt-6">
                      <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                        {t('studentDescription1')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[1060.04px] h-auto md:h-[260px] mt-10 rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#1BC768] shadow-[0_4px_24px_rgba(233,233,233,0.5)]">
              <div className="flex flex-col md:flex-row justify-between items-center p-4 md:h-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-[370.34px] h-[208.21px] rounded-[10px] border-[1px] border-[#EFEFEF]">
                    <img
                      src="/tea.png"
                      alt="Image"
                      className="w-full h-full rounded-[10px]"
                    />
                  </div>
                  <div className="md:ml-10 mt-4 md:mt-0">
                    <div className="w-[90.69px] h-[36.77px] rounded-[100px] flex justify-center items-center bg-[#1BC768]">
                      <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                        {t('instructor')}
                      </p>
                    </div>
                    <div className="text-center mt-6 mr-20">
                      <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                        {t('instructorDescription1')}
                      </p>
                    </div>
                    <div className="text-center mr-2">
                      <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                        {t('instructorDescription2')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 다섯번째 */}
          <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#F8F8FF]">
            <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
              <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
                {t('easyAccessEnvironment')}
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between p-8 md:h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[641.39px] h-[414.65px] rounded-[10px] border-[1px] border-[#EFEFEF] mr-15">
                  <img
                    src="/web.png"
                    alt="Image"
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
                <div className="md:ml-10 mt-4 md:mt-0 relative md:mt-0 md:ml-10">
                  <div className="absolute w-[151.97px] h-[54.86px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9] top-[-27px] left-[20px]"> {/* 위치 조정 */}
                    <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                      {t('webVersion')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-[570px] h-[168px] bg-[#FFFFFF] rounded-[20px] flex flex-col justify-center items-start pl-4 shadow-lg">
                      <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                        {t('webVersionDescription1')}
                      </p>
                      <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                        {t('webVersionDescription2')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between p-8 md:h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[641.39px] h-[414.65px] rounded-[10px] border-[1px] border-[#EFEFEF] mr-15">
                  <img
                    src="/web2.png"
                    alt="Image"
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
                <div className="md:ml-10 mt-4 md:mt-0 relative md:mt-0 md:ml-10">
                  <div className="absolute w-[151.97px] h-[54.86px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9] top-[-27px] left-[20px]"> {/* 위치 조정 */}
                    <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                    {t('installVersion')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-[570px] h-[168px] bg-[#FFFFFF] rounded-[20px] flex flex-col justify-center items-start pl-4 shadow-lg">
                      <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      {t('installVersionDescription1')}
                      </p>
                      <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      {t('installVersionDescription2')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 여섯번째 */}
          <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#f2f0f4]">
            <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
              <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
                {t('recommendedSpecs')}
              </h1>
            </div>
            <table className="download-spec-table w-full max-w-[1024px] mt-10 font-['Noto Sans KR'] ">
              <thead>
                <tr className="download-spec-head bg-[#5D5DF9] h-[64px] rounded-[12px]">
                  <th className="download-col-first w-[25%] px-4 text-left border-r border-[#EFEFEF] text-center text-[#FFFFFF]">
                    {t('category')}
                  </th>
                  <th className="download-col-rest w-[75%] px-4 text-left text-center text-[#FFFFFF]">
                    {t('webSpecs')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                  <td className="download-col-first w-[25%] px-4 text-left text-center">
                    {t('processor')}
                  </td>
                  <td className="download-col-rest w-[75%] px-4 text-left text-center">
                    {t('processorSpec')}
                  </td>
                </tr>
                <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                  <td className="download-col-first w-[25%] px-4 text-left text-center">
                    {t('memory')}
                  </td>
                  <td className="download-col-rest w-[75%] px-4 text-left text-center">
                    {t('memorySpec')}
                  </td>
                </tr>
                <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                  <td className="download-col-first w-[25%] px-4 text-left text-center">
                    {t('operatingSystem')}
                  </td>
                  <td className="download-col-rest w-[75%] px-4 text-left text-center">
                    <p>{t('osSpec')}</p>
                    <p>({t('osSpecDetails')})</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 일곱번째 */}
          <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#ffffff]">
            <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
              <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              {t('hmdCompatible')}
              </h1>
              <div className="nursing-skill-desc mt-8 text-center">
                <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                {t('immersivePractice')}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-8 gap-8">
              <div className="flex flex-col items-center border border-[#d1d5db] rounded-lg p-4 mx-8">
                <img src="/pico.png" alt="Pico G2 4K" className="w-[300px] h-[300px] object-contain" />
                <p className="mt-2 font-['Noto Sans KR'] font-[400] text-[22px] text-[#7c40ff]">Pico G2 4K</p>
              </div>
              <div className="flex flex-col items-center border border-[#d1d5db] rounded-lg p-4 mx-8">
                <img src="/quest.png" alt="Meta Quest 2" className="w-[300px] h-[300px] object-contain" />
                <p className="mt-2 font-['Noto Sans KR'] font-[400] text-[22px] text-[#7c40ff]">Meta Quest 2</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NursingPage ;
