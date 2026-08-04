import { languageText } from "./languageData";

import { images } from "./imageData"

import { AnimatePresence, motion } from "motion/react"

import Close from '../assets/icon-close.svg?react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Showcase = ({ language, lightboxVis, setLightboxVis, imgIndex, setImgIndex, handleLightboxOpen }) => {
  return (
    <section className='px-4 lg:px-12 py-20 2xl:py-25 scroll-mt-[64px] text-center md:px-10 xl:px-20 3xl:!px-30' id='showcase'>
      <h2 className='font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] mb-10 xl:mb-20'>{languageText[language].showcase.header}</h2>
      <div className='grid grid-cols-2 grid-rows-5 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 gap-y-8 gap-x-4'>
        {images.map((e, i) => {
          return (
            <span className='relative rounded-sm overflow-hidden' key={i}>
              <button className='absolute inset-0 bg-blue-800/33 opacity-0 hover:opacity-100 cursor-pointer transition focus:opacity-100 focus:outline-none' onClick={() =>  handleLightboxOpen(i)} aria-label={e.alt + i.toString()}></button>
              <img src={e.img} alt={e.alt} className='w-full h-full object-cover'/>  
            </span>
          )
        })}
        <AnimatePresence>
          {lightboxVis && (
            <motion.div className='fixed inset-0 bg-black/80 z-102 flex flex-col items-center justify-center px-8 gap-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex flex-row justify-end md:text-lg'>
                <button onClick={() => setLightboxVis(false)} className='bg-zinc-700 p-2 text-zinc-400 flex justify-center items-center rounded-full hover:text-blue-400 transition cursor-pointer'>
                  <Close />
                </button>
              </div>
              <div className='rounded-md overflow-hidden max-h-[60vh] lg:max-h-[70vh] max-w-full flex items-center justify-center'>
                <img
                  src={images[imgIndex].img}
                  alt=""
                  className='max-h-[70vh] max-w-full w-auto h-auto object-contain'
                />
              </div>
              <div className='w-full flex flex-row text-zinc-400 items-center justify-center gap-4 md:gap-6 md:text-lg'>
                <button onClick={() => setImgIndex(p => p == 0 ? 11 : p-1)}>
                  <FontAwesomeIcon icon={faArrowLeft} className='p-1.5 py-2 bg-zinc-700 rounded-full hover:text-blue-400 transition cursor-pointer'/>
                </button>
                <button onClick={() => setImgIndex(p => p == 11 ? 0 : p+1)}>
                  <FontAwesomeIcon icon={faArrowRight} className='p-1.5 py-2 bg-zinc-700 rounded-full hover:text-blue-400 transition cursor-pointer'/>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='flex justify-center pt-18 xl:pt-30 md:px-24 lg:px-40 xl:px-52 2xl:px-72'>
        <div className='relative w-full aspect-video'>
          <iframe 
          src="https://www.youtube.com/embed/m4B7nXNl0Ss" 
          title="yacht-camping-promo" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          loading='lazy'
          className='absolute inset-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </section>
  )
}