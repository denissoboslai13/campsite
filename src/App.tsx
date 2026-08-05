import './App.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { AnimatePresence } from 'motion/react'
import { HotKeys } from 'react-hotkeys'

import { languageText } from './components/languageData'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Showcase } from './components/Showcase'
import { PriceList } from './components/PriceList'
import { Footer } from './components/Footer'

const keyMap = {  
  leftKey: 'left',
  rightKey: 'right',
  back: ["esc", "backspace", "del"]
}

function App() {
  const [navVis, setNavVis] = useState(false)
  const [language, setLanguage] = useState<string>('SK')
  const [languageSelectVis, setLanguageSelectVis] = useState(false)
  const [lightboxVis, setLightboxVis] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [tableVis, setTableVis] = useState(0)
  const [vidVis, setVidVis] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 1023 })

  const handlers = {
    leftKey: () => {
      if (lightboxVis) {
        setImgIndex(p => p == 0 ? 11 : p-1)
      }
    },

    rightKey: () => {
      if (lightboxVis) {
        setImgIndex(p => p == 11 ? 0 : p+1)
      }
    },

    back: () => {
      setLanguageSelectVis(false)
      setNavVis(false)
      setLightboxVis(false)
    }
  }

  console.log(imgIndex)

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("localLanguage");
    if (localLanguage) {
      setLanguage(localLanguage)
    }
  }, []);

  useEffect(() => {
  if (lightboxVis) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
  };
}, [lightboxVis]);

  const handleNavClick = () => {
    setNavVis(false)
  }

  const handleLanguageSelect = ( language: string ) => {
    setLanguage(language)
    setLanguageSelectVis(false)
    window.localStorage.setItem('localLanguage', language)
  }

  const handleLightboxOpen = ( index: number ) => {
    setLightboxVis(true)
    setImgIndex(index)
  }

  const sections = [
    {
      items: [
        {id: 'hero', name: languageText[language].home},
        {id: 'showcase', name: languageText[language].showcase.header},
        {id: 'priceList', name: languageText[language].priceList.header},
        {id: 'footer', name: languageText[language].footer.header}
      ]
    }
  ]

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <main className='min-w-[375px] font-[Asap]'>
        <Header setNavVis={setNavVis} language={language} languageSelectVis={languageSelectVis} setLanguageSelectVis={setLanguageSelectVis} handleLanguageSelect={handleLanguageSelect} isMobile={isMobile} sections={sections} handleNavClick={handleNavClick}/>
        <AnimatePresence>
          {navVis && (
            <Navbar setNavVis={setNavVis} handleNavClick={handleNavClick} navVis={navVis} sections={sections}/>
          )}
        </AnimatePresence>
        <Hero language={language} />
        <Showcase language={language} lightboxVis={lightboxVis} setLightboxVis={setLightboxVis} imgIndex={imgIndex} setImgIndex={setImgIndex} handleLightboxOpen={handleLightboxOpen} vidVis={vidVis} setVidVis={setVidVis}/>
        <PriceList language={language} tableVis={tableVis} setTableVis={setTableVis}/>
        <Footer language={language} />
      </main>
    </HotKeys>
  )

}

export default App
