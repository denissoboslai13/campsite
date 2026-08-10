import './App.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { AnimatePresence } from 'motion/react'
import { HotKeys } from 'react-hotkeys'
import { Routes, Route } from 'react-router'

import { languageText } from './components/languageData'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Showcase } from './components/Showcase'
import { PriceList } from './components/PriceList'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { PP } from './components/PP'

import type { Language } from './components/languageData'
import { JsonLd } from './components/JsonLd'

const keyMap = {  
  leftKey: 'left',
  rightKey: 'right',
  back: ["esc", "backspace", "del"]
}

function App() {
  const [navVis, setNavVis] = useState(false)
  const [language, setLanguage] = useState<Language>('SK')
  const [languageSelectVis, setLanguageSelectVis] = useState(false)
  const [lightboxVis, setLightboxVis] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [tableVis, setTableVis] = useState(0)
  const [vidVis, setVidVis] = useState(false)
  const [mapVis, setMapVis] = useState(false)

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

  const isLanguage = (value: string): value is Language => {
    return ['SK', 'HU', 'EN'].includes(value)
  }

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("localLanguage")
    if (localLanguage && isLanguage(localLanguage)) {
      setLanguage(localLanguage)
    }
    const mapCookies = window.localStorage.getItem("mapCookies")
    if (mapCookies) {
      setMapVis(true)
    }
  }, [])

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

  const handleNavigationClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setNavVis(false)
  }

  const handleLanguageSelect = ( language: Language ) => {
    setLanguage(language)
    setLanguageSelectVis(false)
    window.localStorage.setItem('localLanguage', language)
  }

  const handleMapClick = () => {
    setMapVis(true)
    window.localStorage.setItem('mapCookies', 'true')
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
      <JsonLd />
      <Routes>
        <Route path='/' element={
          <main className='min-w-93.75 font-[Asap]'>
            <Header setNavVis={setNavVis} language={language} languageSelectVis={languageSelectVis} setLanguageSelectVis={setLanguageSelectVis} handleLanguageSelect={handleLanguageSelect} isMobile={isMobile} sections={sections} handleNavigationClick={handleNavigationClick}/>
            <AnimatePresence>
              {(navVis && isMobile) && (
                <Navbar setNavVis={setNavVis} handleNavigationClick={handleNavigationClick} sections={sections}/>
              )}
            </AnimatePresence>
            <Hero language={language} />
            <Showcase language={language} lightboxVis={lightboxVis} setLightboxVis={setLightboxVis} imgIndex={imgIndex} setImgIndex={setImgIndex} handleLightboxOpen={handleLightboxOpen} vidVis={vidVis} setVidVis={setVidVis}/>
            <PriceList language={language} tableVis={tableVis} setTableVis={setTableVis}/>
            <Footer language={language} mapVis={mapVis} handleMapClick={handleMapClick} />
          </main>
          } />
          <Route path='*' element={<NotFound />} />
          <Route path='/prevadzkovy-poriadok' element={<PP language={language}/>} />
      </Routes>
    </HotKeys>
  )

}

export default App
