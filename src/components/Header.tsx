import { languageDict } from './languageData'

import ChevronDown from '../assets/icon-chevron-down.svg?react'
import Hamburger from '../assets/icon-hamburger.svg?react'

import { AnimatePresence, motion } from 'motion/react'

const logoText = 'YaCHT CaMPING'

export const Header = ({ setNavVis, language, languageSelectVis, setLanguageSelectVis, handleLanguageSelect, isMobile, sections, handleNavClick }) => {
  return (
    <header className='sticky top-0 bg-white z-100 w-full flex flex-row items-center justify-between p-4 lg:px-8'>
      <div className='font-["Big_Shoulders"] font-bold -skew-x-7 text-xl lg:text-2xl'>
        {logoText.split('').map((e, i) => (
          <span key={i} className={`m-0 ${e.toLowerCase() === 'a' ? 'text-blue-800 lowercase text-lg lg:text-xl' : 'text-black'}`}>
            {e}
          </span>
        ))}
      </div>
      <div className='flex flex-row items-center gap-10 lg:gap-20 relative lg:text-lg'>
        <button className='font-[Asap] flex flex-row items-center gap-1.5 py-1 lg:py-2 px-2 cursor-pointer group' onClick={() => setLanguageSelectVis(p => p == true ? false : true)}>
          <img src={languageDict[language].flag} alt="" className='w-8'/>
          <p className='group-hover:text-blue-800 transition'>{languageDict[language].language}</p>
          <ChevronDown />
        </button>
        <AnimatePresence>
          {languageSelectVis && (
            <motion.div className='absolute top-9 bg-white pb-1.5 pr-[15px] rounded-md overflow-hidden'
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {Object.keys(languageDict).filter(p => p !== language).map((e, i) => (
                <button className='flex flex-row items-center gap-1.5 py-1 px-2 relative group cursor-pointer' key={e} onClick={() => handleLanguageSelect(e)}>
                  <img src={languageDict[e].flag} alt="" className='w-8'/>
                  <p className='group-hover:text-blue-800 transition'>{languageDict[e].language}</p>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {isMobile && (
          <button onClick={() => setNavVis(true)}>
            <Hamburger />
          </button>
        )}
        {!(isMobile) && (
          <div className='flex flex-row gap-12 w-full text-black'>
            {sections[0].items.map((e, i) => (
              <a href={'#' + e.id} key={i} onClick={() => handleNavClick()} className='hover:text-blue-800 transition'>{e.name}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}