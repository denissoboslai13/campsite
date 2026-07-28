import { useState } from 'react'
import './App.css'

import Hamburger from './assets/icon-hamburger.svg?react'
import Close from './assets/icon-close.svg?react'
import flagSK from './assets/flags/sk.webp'
import ChevronDown from './assets/icon-chevron-down.svg?react'
import campPlaceholder from './assets/camp placeholder.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'motion/react'

const logoText = 'YaCHT CaMPING'
const images = [1,1,1,1,1,1,1,1,1,1,1,1]
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

const sections = [
  {
    items: [
      {id: 'hero', name: 'Domov'},
      {id: 'showcase', name: 'Galéria'},
      {id: 'priceList', name: 'Cenník'},
      {id: 'footer', name: 'Kontakty'}
    ]
  }
]

const Header = ({ setNavVis }) => {
  return (
    <header className='sticky top-0 bg-white z-100 w-full flex flex-row items-center justify-between p-4'>
      <div className='font-["Big_Shoulders"] font-bold -skew-x-7 text-xl'>
        {logoText.split('').map((e, i) => (
          <span key={i} className={`m-0 ${e.toLowerCase() === 'a' ? 'text-blue-800 lowercase text-lg' : 'text-black'}`}>
            {e}
          </span>
        ))}
      </div>
      <div className='flex flex-row items-center gap-10'>
        <div className='flex flex-row items-center gap-1.5 py-1 px-2'>
          <img src={flagSK} alt="" className='w-8'/>
          <p>SK</p>
          <ChevronDown />
        </div>
        <button onClick={() => setNavVis(true)}>
          <Hamburger />
        </button>
      </div>
    </header>
  )
}

const Navbar = ({ setNavVis, handleNavClick, navVis }) => {
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

const Hero = () => {
  return (
    <section className='relative w-full h-[312px] text-white flex flex-col items-center justify-center text-center px-6 gap-1 scroll-mt-[64px]' id='hero'>
      <div className='bg-blue-800/66 inset-0 absolute -z-1'></div>
      <img src={campPlaceholder} alt="" className='absolute inset-0 -z-2 w-full h-full object-cover'/>
      <h1 className='font-bold text-lg'>Üdvözlünk a Yacht-Camping világában</h1>
      <p className='text-sm font-light'>Ahol vízi kaland és a természetközeli pihenés találkozik!</p>
    </section>
  )
}

const Showcase = () => {
  return (
    <section className='px-4 py-20 scroll-mt-[64px] text-center' id='showcase'>
      <h2 className='font-bold text-[2.5rem] mb-10'>Galéria</h2>
      <div className='grid grid-cols-2 grid-rows-5 gap-y-8 gap-x-4'>
        {images.map((e, i) => (
          <span className='relative'>
            <div className='absolute inset-0 bg-blue-800/33 opacity-0 hover:opacity-100 cursor-pointer transition'></div>
            <img src={campPlaceholder} alt="" />
          </span>
        ))}
      </div>
      <div className='flex justify-center pt-18'>
        <div className='relative w-full aspect-video'>
          <iframe 
            src="https://www.youtube.com/embed/NpEaa2P7qZI" 
            title="video placeholder" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            loading='lazy'
            className='absolute inset-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

const PriceList = () => {
  return (
    <section className='py-12 pb-36 flex flex-col items-center scroll-mt-[64px]' id='priceList'>
      <h2 className='font-bold text-[2.5rem] mb-10'>Cenník</h2>
      <table className='table-auto border-collapse border'>
        <tr>
          <th className='border py-3 p-4 pr-16'>Service</th>
          <th className='border py-3 p-4 pr-16'>Cena</th>
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

const Footer = () => {
  return (
    <footer className='bg-blue-800 w-full py-12 pt-8 pb-8 px-6 flex flex-col gap-10 scroll-mt-[64px] text-center' id='footer'>
      <h2 className='font-bold text-[2rem] text-white'>Kontaktujte nás</h2>
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
            referrerpolicy="strict-origin-when-cross-origin"
            className='absolute inset-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [navVis, setNavVis] = useState(false)

  const handleNavClick = () => {
    setNavVis(false)
  }

  return (
    <main className='min-w-[375px] font-[Asap]'>
      <Header setNavVis={setNavVis}/>
      <AnimatePresence>
        {navVis && (
          <Navbar setNavVis={setNavVis} handleNavClick={handleNavClick} navVis={navVis} />
        )}
      </AnimatePresence>
      <Hero />
      <Showcase />
      <PriceList />
      <Footer />
    </main>
  )

}

export default App
