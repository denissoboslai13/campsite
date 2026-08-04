import { useState, useEffect } from 'react'
import './App.css'
import { useMediaQuery } from 'react-responsive'

import { AnimatePresence } from 'motion/react'
import { languageText } from './components/languageData'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Showcase } from './components/Showcase'
import { PriceList } from './components/PriceList'
import { Footer } from './components/Footer'

function App() {
  const [navVis, setNavVis] = useState(false)
  const [language, setLanguage] = useState<string>('SK')
  const [languageSelectVis, setLanguageSelectVis] = useState(false)
  const [lightboxVis, setLightboxVis] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [tableVis, setTableVis] = useState(0)

  const isMobile = useMediaQuery({ maxWidth: 1023 })

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
    <main className='min-w-[375px] font-[Asap]'>
      <Header setNavVis={setNavVis} language={language} languageSelectVis={languageSelectVis} setLanguageSelectVis={setLanguageSelectVis} handleLanguageSelect={handleLanguageSelect} isMobile={isMobile} sections={sections} handleNavClick={handleNavClick}/>
      <AnimatePresence>
        {navVis && (
          <Navbar setNavVis={setNavVis} handleNavClick={handleNavClick} navVis={navVis} sections={sections}/>
        )}
      </AnimatePresence>
      <Hero language={language} />
      <Showcase language={language} lightboxVis={lightboxVis} setLightboxVis={setLightboxVis} imgIndex={imgIndex} setImgIndex={setImgIndex} handleLightboxOpen={handleLightboxOpen} />
      <PriceList language={language} tableVis={tableVis} setTableVis={setTableVis}/>
      <Footer language={language} />
    </main>
  )

}

export default App
