import { useState, useEffect } from 'react'
import './App.css'
import { useMediaQuery } from 'react-responsive'

import Hamburger from './assets/icon-hamburger.svg?react'
import Close from './assets/icon-close.svg?react'
import ChevronDown from './assets/icon-chevron-down.svg?react'

import heroImg from './assets/camp_pictures/heroImg.webp'

import camp1 from './assets/camp_pictures/img1.webp'
import camp2 from './assets/camp_pictures/img2.webp'
import camp3 from './assets/camp_pictures/img3.webp'
import camp4 from './assets/camp_pictures/img4.webp'
import camp5 from './assets/camp_pictures/img5.webp'
import camp6 from './assets/camp_pictures/img6.webp'

import camp7 from './assets/camp_pictures/img7.webp'
import camp8 from './assets/camp_pictures/img8.webp'
import camp9 from './assets/camp_pictures/img9.webp'
import camp10 from './assets/camp_pictures/img10.webp'
import camp11 from './assets/camp_pictures/img11.webp'
import camp12 from './assets/camp_pictures/img12.webp'


import flagSK from './assets/flags/sk.webp'
import flagHU from './assets/flags/hu.webp'
import flagGB from './assets/flags/gb.webp'
import flagDE from './assets/flags/de.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'motion/react'

const logoText = 'YaCHT CaMPING'

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
    priceList: { 
      header: 'Cenník',
      service: 'Service',
      price: 'Cena',
      table: {
        categories: [
          {category : {
            header: 'Stan',
            services: [
              {service: '1-2 osoba', price: '10€'},
              {service: '3-4 osoba', price: '15€'},
              {service: '6-8 osoba', price: '20€'}
            ]
          }},
          {category: {
            header: 'Auto Karavan',
            services: [
              {service: 'Pri dunaji', price: '30€'},
              {service: 'Stred časť', price: '20€'},
              {service: 'Vrchná časť', price: '15€'}
            ]
          }}, 
          {category: {
            header: 'Mobilný Dom',
            services: [
              {service: '4 miestný- s kuchyňou', price: '50€'},
              {service: '4 miestný- kuchyňa, toaleta, sprcha', price: '60€'},
              {service: '6 miestný- s kuchyňou', price: '80€'}
            ]
          }}
        ],
        people: {
          header: 'Osoby',
          age: 'Vek',
          price: 'Cena',
          prices: [
            {age: 'nad 18 rokov', price: '6€'},
            {age: 'nad 14 rokov', price: '4€'},
          ]
        },
    }}, 
    footer: { header: 'Dostupnosť' }
  },
  'HU': {
    home: 'Főoldal',
    hero: { header: 'Üdvözlünk a Yacht-Camping világában', paragraph: 'Ahol vízi kaland és a természetközeli pihenés találkozik!'}, 
    showcase: { header: 'Galéria' }, 
    priceList: { 
      header: 'Árjegyzék',
      service: 'Szolgáltatás',
      price: 'Ár',
      table: {
        categories: [
          {category : {
            header: 'Sátor',
            services: [
              {service: '1-2 személy', price: '10€'},
              {service: '3-4 személy', price: '15€'},
              {service: '6-8 személy', price: '20€'}
            ]
          }},
          {category: {
            header: 'Lakókocsi',
            services: [
              {service: 'Dunánál', price: '30€'},
              {service: 'középső rész', price: '20€'},
              {service: 'Felső rész', price: '15€'}
            ]
          }}, 
          {category: {
            header: 'Mobilház',
            services: [
              {service: '4 személyes- konyhával', price: '50€'},
              {service: '4 személyes- konyha, wc, zuhanyzó', price: '60€'},
              {service: '6 személyes- konyhával', price: '80€'}
            ]
          }}
        ],
        people: {
          header: 'Személy',
          age: 'Kor',
          price: 'Ár',
          prices: [
            {age: '18 év felett', price: '6€'},
            {age: '14 év felett', price: '4€'},
          ]
        },
    }},  
    footer: { header: 'Elérhetőségek' }
  },
  'EN': {
    home: 'Home',
    hero: { header: 'EN header', paragraph: 'EN paragraph'}, 
    showcase: { header: 'Gallery' }, 
    priceList: { 
      header: 'Price List',
      service: 'Service',
      price: 'Price',
      table: {
        categories: [
          {category : {
            header: 'Tent',
            services: [
              {service: '1-2 person', price: '10€'},
              {service: '3-4 person', price: '15€'},
              {service: '6-8 person', price: '20€'}
            ]
          }},
          {category: {
            header: 'Caravan',
            services: [
              {service: 'By the Danube', price: '30€'},
              {service: 'Middle part', price: '20€'},
              {service: 'Upper part', price: '15€'}
            ]
          }}, 
          {category: {
            header: 'Mobile Home',
            services: [
              {service: '4 person- with kitchen', price: '50€'},
              {service: '4 person- kitchen, toilet, shower', price: '60€'},
              {service: '6 person- with kitchen', price: '80€'}
            ]
          }}
        ],
        people: {
          header: 'Person',
          age: 'Age',
          price: 'Price',
          prices: [
            {age: 'Over 18 years old', price: '6€'},
            {age: 'Over 14 years old', price: '4€'},
          ]
        },
    }}, 
    footer: { header: 'Contacts' }
  },
  'DE': {
    home: 'Startseite',
    hero: { header: 'DE header', paragraph: 'DE paragraph'}, 
    showcase: { header: 'Galerie' }, 
    priceList: { 
      header: 'Price List',
      service: 'Service',
      price: 'Price',
      table: {
        categories: [
          {category : {
            header: 'Tent',
            services: [
              {service: '1-2 person', price: '10€'},
              {service: '3-4 person', price: '15€'},
              {service: '6-8 person', price: '20€'}
            ]
          }},
          {category: {
            header: 'Caravan',
            services: [
              {service: 'By the Danube', price: '30€'},
              {service: 'Middle part', price: '20€'},
              {service: 'Upper part', price: '15€'}
            ]
          }}, 
          {category: {
            header: 'Mobile Home',
            services: [
              {service: '4 person- with kitchen', price: '50€'},
              {service: '4 person- kitchen, toilet, shower', price: '60€'},
              {service: '6 person- with kitchen', price: '80€'}
            ]
          }}
        ],
        people: {
          header: 'Person',
          age: 'Age',
          price: 'Price',
          prices: [
            {age: 'Over 18 years old', price: '6€'},
            {age: 'Over 14 years old', price: '4€'},
          ]
        },
    }}, 
    footer: { header: 'Kontakte' }
  },
}

const images = [
  {img: camp1, alt: 'nieco'},
  {img: camp2, alt: 'nieco'},
  {img: camp3, alt: 'nieco'},
  {img: camp4, alt: 'nieco'},
  {img: camp5, alt: 'nieco'},
  {img: camp6, alt: 'nieco'},
  {img: camp7, alt: 'nieco'},
  {img: camp8, alt: 'nieco'},
  {img: camp9, alt: 'nieco'},
  {img: camp10, alt: 'nieco'},
  {img: camp11, alt: 'nieco'},
  {img: camp12, alt: 'nieco'}
]

const Header = ({ setNavVis, language, languageSelectVis, setLanguageSelectVis, handleLanguageSelect, isMobile, sections, handleNavClick }) => {
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
        <button className='flex flex-row items-center gap-1.5 py-1 lg:py-2 px-2 cursor-pointer group' onClick={() => setLanguageSelectVis(p => p == true ? false : true)}>
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

const Navbar = ({ setNavVis, handleNavClick, navVis, sections }) => {
  return (
    <motion.div className='fixed bg-black/95 top-0 bottom-0 right-0 left-40 md:left-100 z-101 flex flex-col p-6 px-4 pl-6 items-end gap-16' key={navVis}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{duration: 0.4, ease: 'easeInOut'}}
    >
      <button onClick={() => setNavVis(false)}>
        <Close className='text-white'/>
      </button>
      <div className='flex flex-col gap-8 w-full text-white'>
        {sections[0].items.map((e, i) => (
          <a href={'#' + e.id} key={i} onClick={() => handleNavClick()}>{e.name}</a>
        ))}
      </div>
    </motion.div>
  )
}

const Hero = ({ language }) => {
  return (
    <section className='relative w-full h-[312px] md:h-[470px] lg:h-[556px] xl:h-[612px] 3xl:min-h-[756px] text-white flex flex-col items-center justify-center text-center px-6 gap-1 lg:gap-3 xl:gap-5 scroll-mt-[64px]' id='hero'>
      <div className='bg-blue-800/66 inset-0 absolute -z-1'></div>
      <img src={heroImg} alt="" className='absolute inset-0 -z-2 w-full h-full object-cover'/>
      <h1 className='font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl'>{languageText[language].hero.header}</h1>
      <p className='text-sm md:text-lg lg:text-xl xl:text-2xl font-light'>{languageText[language].hero.paragraph}</p>
    </section>
  )
}

const Showcase = ({ language, lightboxVis, setLightboxVis, imgIndex, setImgIndex, handleLightboxOpen }) => {
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

const PriceList = ({ language, tableVis, setTableVis }) => {

  const tableData = (languageText[language].priceList)
  const kategorie = tableData.table.categories
  console.log('kategorie', tableData.table.people.header)

  return (
    <section className='py-12 2xl:py-25 pb-36 px-6 flex flex-col items-center scroll-mt-[64px] md:px-26 lg:px-50 xl:px-80 2xl:px-90' id='priceList'>
      <h2 className='font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] mb-14'>{tableData.header}</h2>
      <div className='flex flex-row gap-6 md:gap-10 lg:gap-14 xl:gap-18 mb-10 lg:mb-14 border-b-2 border-t-2 font-medium px-4'>
        {tableData.table.categories.map((e, i) => (
            <button onClick={() => setTableVis(i)} className={`${tableVis == i ? "border-b-3 border-blue-600" : "border-b-3 border-white"} cursor-pointer py-4 pt-5 md:text-lg xl:text-xl`}>
              {e.category.header}
            </button>
        ))}
      </div>
      <table className='table-auto border-collapse border md:text-lg lg:text-xl w-full'>
        <thead className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          <tr>
            <th className='border py-4'>{tableData.service}</th>
            <th className='border py-4'>{tableData.price}</th>
          </tr>
        </thead>
        <tbody>
          {tableVis == 0 && (
            <>
              {kategorie[0].category.services.map((e, i) => (
                  <tr>
                    <td className='border p-4'>{e.service}</td>
                    <td className='border p-4'>{e.price}</td>
                  </tr>
              ))}
            </>
          )}
          {tableVis == 1 && (
            <>
              {kategorie[1].category.services.map((e, i) => (
                  <tr>
                    <td className='border p-4'>{e.service}</td>
                    <td className='border p-4'>{e.price}</td>
                  </tr>
              ))}
            </>
          )}
          {tableVis == 2 && (
            <>
              {kategorie[2].category.services.map((e, i) => (
                  <tr>
                    <td className='border p-4'>{e.service}</td>
                    <td className='border p-4'>{e.price}</td>
                  </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      <h3 className='font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] mt-14 lg:mt-28 mb-10 lg:mb-14 border-b-2 border-t-2 py-2 px-8'>{tableData.table.people.header}</h3>
      <div className='w-full lg:px-20 xl:px-30'>
        <table className='table-auto border-collapse border md:text-lg lg:text-xl w-full'>
          <thead className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            <tr>
              <th className='border p-4'>{tableData.table.people.age}</th>
              <th className='border p-4'>{tableData.table.people.price}</th>
            </tr>
          </thead>
          <tbody>
            {tableData.table.people.prices.map((e, i) => (
                <tr>
                  <td className='border p-4'>{e.age}</td>
                  <td className='border p-4'>{e.price}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

const Footer = ({ language }) => {
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

function App() {
  const [navVis, setNavVis] = useState(false)
  const [language, setLanguage] = useState('SK')
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
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = ''; // cleanup on unmount too
  };
}, [lightboxVis]);

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
