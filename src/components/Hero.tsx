import heroImg from '../assets/camp_pictures/heroImg.webp'

import { languageText } from './languageData'
import type { Language } from './languageData'

interface Props {
  language: Language
}

export const Hero = ({ language }: Props) => {
  return (
    <section className='relative w-full h-78 md:h-117.5 lg:h-139 xl:h-153 3xl:min-h-189 text-white flex flex-col items-center justify-center text-center px-6 gap-1 lg:gap-3 xl:gap-5 scroll-mt-16' id='hero'>
      <div className='bg-blue-800/66 inset-0 absolute -z-1'></div>
      <img src={heroImg} alt="Hero image of campground" className='absolute inset-0 -z-2 w-full h-full object-cover'/>
      <h1 className='font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl'>{languageText[language].hero.header}</h1>
      <p className='text-sm md:text-lg lg:text-xl xl:text-2xl font-light'>{languageText[language].hero.paragraph}</p>
    </section>
  )
}