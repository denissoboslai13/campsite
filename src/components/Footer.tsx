import { languageText } from './languageData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = ({ language }) => {
  return (
    <footer className='bg-blue-800 w-full py-12 pt-8 pb-8 px-10 lg:mt-12 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 xl:gap-16 scroll-mt-[64px] text-center md:px-20 xl:px-35 2xl:px-45 xl:py-20' id='footer'>
      <div className='flex flex-col gap-10 xl:gap-14 lg:text-center lg:items-center lg:justify-center'>
        <h2 className='font-bold text-[2rem] md:text-[2.3rem] lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[3.3rem] text-white'>{languageText[language].footer.header}</h2>
        <div className='flex flex-col gap-3 xl:gap-5 items-center md:text-lg xl:text-xl 2xl:text-2xl'>
          <span className='text-white flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <p>Chľaba 752</p>
          </span>
          <span className='text-white flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faPhone}/>
            <p>+421 915 705 498</p>
          </span>
          <span className='text-white flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>yachtcamping1@gmail.com</p>
          </span>
        </div>
      </div>
      <div className='flex justify-center lg:w-full lg:ml-24 3xl:!ml-96'>
        <div className='relative w-full aspect-video border-3 border-white'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21430.21820753928!2d18.803142899999997!3d47.8245335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a890023d8af8b%3A0x130435ac01181746!2zQ2FtcCBDaMS-YWJhLUtvdsOhxI1vdg!5e0!3m2!1ssk!2ssk!4v1785247708408!5m2!1ssk!2ssk"   
            title="maps"
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            className='absolute inset-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </footer>
  )
}