import { useState } from 'react'
import './App.css'

import Hamburger from './assets/icon-hamburger.svg?react'
import flagSK from './assets/flags/sk.webp'
import ChevronDown from './assets/icon-chevron-down.svg?react'
import placeholderImg from './assets/placeholder.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

const Header = () => {
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
        <Hamburger />
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <section className='bg-blue-800 w-full h-[256px] text-white flex flex-col items-center justify-center text-center px-6 gap-1'>
      <h1 className='font-bold text-lg'>Üdvözlünk a Yacht-Camping világában</h1>
      <p className='text-sm font-light'>Ahol vízi kaland és a természetközeli pihenés találkozik!</p>
    </section>
  )
}

const Showcase = () => {
  return (
    <section className='px-4 py-16'>
      <div className='grid grid-cols-2 grid-rows-5 gap-y-8 gap-x-4'>
        {images.map((e, i) => (
          <span>
            <img src={placeholderImg} alt="" />
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
            allowFullscreen
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
    <section className='py-12 pb-24 flex flex-col items-center'>
      <h2 className='font-bold text-3xl mb-12'>Cenník</h2>
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-w-[375px] font-[Asap]'>
      <Header />
      <Hero />
      <Showcase />
      <PriceList />
      <section className='bg-blue-800 w-full py-12 pb-8 px-6 flex flex-col gap-10'>
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
      </section>
    </main>
  )

}

export default App
