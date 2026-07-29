import { useState, useEffect } from 'react'
import './App.css'

import Hamburger from './assets/icon-hamburger.svg?react'
import Close from './assets/icon-close.svg?react'
import ChevronDown from './assets/icon-chevron-down.svg?react'

import campPlaceholder from './assets/camp1.webp'
import camp2 from './assets/camp2.webp'
import camp3 from './assets/camp3.webp'
import camp4 from './assets/camp4.webp'
import camp5 from './assets/camp5.webp'

import flagSK from './assets/flags/sk.webp'
import flagHU from './assets/flags/hu.webp'
import flagGB from './assets/flags/gb.webp'
import flagDE from './assets/flags/de.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'motion/react'

const logoText = 'YaCHT CaMPING'
const tableData = [
  {
    items: [
      { service: 'xyz', price: '10' },
      { service: 'xyz', price: '12' },
      { service: 'xyz', price: '15' },
      { service: 'xyz', price: '20' },
      { service: 'xyz', price: '25' }
    ]
  }
]

const languageDict = 
  {
    'SK': {language: 'SK', flag: flagSK},
    'HU': {language: 'HU', flag: flagHU},
    'EN': {language: 'EN', flag: flagGB},
    'DE': {language: 'DE', flag: flagDE},
  }


const languageText = {
  'SK': {
    home: 'Domov',
    hero: { header: 'SK header', paragraph: 'SK paragraph'},
    showcase: { header: 'Galéria' }, 
    priceList: { header: 'Cenník', table: {service: 'Služba', price: 'Cena', services: null} }, 
    footer: { header: 'Dostupnosť' }
  },
  'HU': {
    home: 'Főoldal',
    hero: { header: 'Üdvözlünk a Yacht-Camping világában', paragraph: 'Ahol vízi kaland és a természetközeli pihenés találkozik!'}, 
    showcase: { header: 'Galéria' }, 
    priceList: { header: 'Árjegyzék', table: {service: 'Szolgáltatás', price: 'Ár', services: null} }, 
    footer: { header: 'Elérhetőségek' }
  },
  'EN': {
    home: 'Home',
    hero: { header: 'EN header', paragraph: 'EN paragraph'}, 
    showcase: { header: 'Gallery' }, 
    priceList: { header: 'Price List', table: {service: 'Service', price: 'Price', services: null} }, 
    footer: { header: 'Contacts' }
  },
  'DE': {
    home: 'Startseite',
    hero: { header: 'DE header', paragraph: 'DE paragraph'}, 
    showcase: { header: 'Galerie' }, 
    priceList: { header: 'Preisliste', table: {service: 'Service', price: 'Preis', services: null} }, 
    footer: { header: 'Kontakte' }
  },
}

const images = [
  {img: campPlaceholder, alt: 'nieco'},
  {img: camp2, alt: 'nieco'},
  {img: camp3, alt: 'nieco'},
  {img: camp4, alt: 'nieco'},
  {img: camp5, alt: 'nieco'},
  {img: campPlaceholder, alt: 'nieco'},
  {img: camp2, alt: 'nieco'},
  {img: camp3, alt: 'nieco'},
  {img: camp4, alt: 'nieco'},
  {img: camp5, alt: 'nieco'}
]

const Header = ({ setNavVis, language, languageSelectVis, setLanguageSelectVis, handleLanguageSelect }) => {
  return (
    <header className='sticky top-0 bg-white z-100 w-full flex flex-row items-center justify-between p-4'>
      <div className='font-["Big_Shoulders"] font-bold -skew-x-7 text-xl'>
        {logoText.split('').map((e, i) => (
          <span key={i} className={`m-0 ${e.toLowerCase() === 'a' ? 'text-blue-800 lowercase text-lg' : 'text-black'}`}>
            {e}
          </span>
        ))}
      </div>
      <div className='flex flex-row items-center gap-10 relative'>
        <button className='flex flex-row items-center gap-1.5 py-1 px-2' onClick={() => setLanguageSelectVis(p => p == true ? false : true)}>
          <img src={languageDict[language].flag} alt="" className='w-8'/>
          <p>{languageDict[language].language}</p>
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
                <button className='flex flex-row items-center gap-1.5 py-1 px-2 relative' onClick={() => handleLanguageSelect(e)}>
                  <img src={languageDict[e].flag} alt="" className='w-8'/>
                  <p>{languageDict[e].language}</p>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setNavVis(true)}>
          <Hamburger />
        </button>
      </div>
    </header>
  )
}

const Navbar = ({ setNavVis, handleNavClick, navVis, language }) => {
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
    <motion.div className='fixed bg-black/95 top-0 bottom-0 right-0 left-40 z-101 flex flex-col p-6 px-4 pl-6 items-end gap-16' key={navVis}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{duration: 0.4, ease: 'easeInOut'}}
    >
      <button onClick={() => setNavVis(false)}>
        <Close />
      </button>
      <div className='flex flex-col gap-8 w-full text-white'>
        {sections[0].items.map((e, i) => (
          <a href={'#' + e.id} onClick={() => handleNavClick()}>{e.name}</a>
        ))}
      </div>
    </motion.div>
  )
}

const Hero = ({ language }) => {
  return (
    <section className='relative w-full h-[312px] text-white flex flex-col items-center justify-center text-center px-6 gap-1 scroll-mt-[64px]' id='hero'>
      <div className='bg-blue-800/66 inset-0 absolute -z-1'></div>
      <img src={campPlaceholder} alt="" className='absolute inset-0 -z-2 w-full h-full object-cover'/>
      <h1 className='font-bold text-lg'>{languageText[language].hero.header}</h1>
      <p className='text-sm font-light'>{languageText[language].hero.paragraph}</p>
    </section>
  )
}

const Showcase = ({ language, lightboxVis, setLightboxVis, imgIndex, setImgIndex, handleLightboxOpen }) => {
  return (
    <section className='px-4 py-20 scroll-mt-[64px] text-center' id='showcase'>
      <h2 className='font-bold text-[2.5rem] mb-10'>{languageText[language].showcase.header}</h2>
      <div className='grid grid-cols-2 grid-rows-5 gap-y-8 gap-x-4'>
        {images.map((e, i) => {
          console.log(i)
          return (
            <span className='relative'>
              <button className='absolute inset-0 bg-blue-800/33 opacity-0 hover:opacity-100 cursor-pointer transition focus:opacity-100 focus:outline-none' onClick={() =>  handleLightboxOpen(i)}></button>
              <img src={e.img} alt="" className='w-full h-full object-cover'/>  
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
              <div className='w-full flex flex-row justify-end pr-2'>
                <button onClick={() => setLightboxVis(false)} className='bg-zinc-700 p-2 text-zinc-400 flex justify-center items-center rounded-full hover:text-blue-400 transition cursor-pointer'>
                  <Close />
                </button>
              </div>
              <div className='h-[228px]'>
                <img src={images[imgIndex].img} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className='w-full flex flex-row text-zinc-400 items-center justify-center gap-4'>
                <button onClick={() => setImgIndex(p => p == 0 ? 9 : p-1)}>
                  <FontAwesomeIcon icon={faArrowLeft} className='p-1.5 py-2 bg-zinc-700 rounded-full hover:text-blue-400 transition cursor-pointer'/>
                </button>
                <button onClick={() => setImgIndex(p => p == 9 ? 0 : p+1)}>
                  <FontAwesomeIcon icon={faArrowRight} className='p-1.5 py-2 bg-zinc-700 rounded-full hover:text-blue-400 transition cursor-pointer'/>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='flex justify-center pt-18'>
        <div className='relative w-full aspect-video'>
          <iframe 
            src="https://www.youtube.com/embed/NpEaa2P7qZI" 
            title="video placeholder" 
            frameBorder="0" 
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

const PriceList = ({ language }) => {
  return (
    <section className='py-12 pb-36 flex flex-col items-center scroll-mt-[64px]' id='priceList'>
      <h2 className='font-bold text-[2.5rem] mb-10'>{languageText[language].priceList.header}</h2>
      <table className='table-auto border-collapse border'>
        <tr>
          <th className='border py-3 p-4 pr-16'>{languageText[language].priceList.table.service}</th>
          <th className='border py-3 p-4 pr-16'>{languageText[language].priceList.table.price}</th>
        </tr>
        {tableData[0].items.map((item) => (
          <tr>
            <td className='border py-3 p-4'>{item.service}</td>
            <td className='border py-3 p-4'>{item.price}</td>
          </tr>
        ))}
      </table>
    </section>
  )
}

const Footer = ({ language }) => {
  return (
    <footer className='bg-blue-800 w-full py-12 pt-8 pb-8 px-6 flex flex-col gap-10 scroll-mt-[64px] text-center' id='footer'>
      <h2 className='font-bold text-[2rem] text-white'>{languageText[language].footer.header}</h2>
      <div className='flex flex-col gap-3 items-center'>
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
      <div className='flex justify-center border-3 border-white'>
        <div className='relative w-full aspect-video'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21430.21820753928!2d18.803142899999997!3d47.8245335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a890023d8af8b%3A0x130435ac01181746!2zQ2FtcCBDaMS-YWJhLUtvdsOhxI1vdg!5e0!3m2!1ssk!2ssk!4v1785247708408!5m2!1ssk!2ssk" 
            width="600" 
            height="450"  
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            className='absolute inset-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [navVis, setNavVis] = useState(false)
  const [language, setLanguage] = useState('SK')
  const [languageSelectVis, setLanguageSelectVis] = useState(false)
  const [lightboxVis, setLightboxVis] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
 
  useEffect(() => {
    const localLanguage = window.localStorage.getItem("localLanguage");
    if (localLanguage) {
      setLanguage(localLanguage)
    }
  }, []);

  const handleNavClick = () => {
    setNavVis(false)
  }

  const handleLanguageSelect = ( language ) => {
    setLanguage(language)
    setLanguageSelectVis(false)
    window.localStorage.setItem('localLanguage', language)
  }

  const handleLightboxOpen = ( index ) => {
    setLightboxVis(true)
    setImgIndex(index)
  }

  return (
    <main className='min-w-[375px] font-[Asap]'>
      <Header setNavVis={setNavVis} language={language} languageSelectVis={languageSelectVis} setLanguageSelectVis={setLanguageSelectVis} handleLanguageSelect={handleLanguageSelect} />
      <AnimatePresence>
        {navVis && (
          <Navbar setNavVis={setNavVis} handleNavClick={handleNavClick} navVis={navVis} language={language}/>
        )}
      </AnimatePresence>
      <Hero language={language} />
      <Showcase language={language} lightboxVis={lightboxVis} setLightboxVis={setLightboxVis} imgIndex={imgIndex} setImgIndex={setImgIndex} handleLightboxOpen={handleLightboxOpen} />
      <PriceList language={language} />
      <Footer language={language} />
    </main>
  )

}

export default App
