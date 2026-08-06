import { motion } from "motion/react"

import Close from '../assets/icon-close.svg?react'
import type { Section } from "./languageData"

interface Props {
  setNavVis: (visible: boolean) => void
  sections: Section[],
  handleNavigationClick: (id: string) => void
}

export const Navbar = ({ setNavVis, sections, handleNavigationClick }: Props) => {
  return (
    <motion.div className='fixed bg-black/95 top-0 bottom-0 right-0 left-40 md:left-100 z-101 flex flex-col p-6 px-4 pl-6 items-end gap-16'
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{duration: 0.4, ease: 'easeInOut'}}
    >
      <button onClick={() => setNavVis(false)} aria-label="Close Icon">
        <Close className='text-white'/>
      </button>
      <div className='flex flex-col gap-8 w-full text-white'>
        {sections[0].items.map((e, i) => (
          <button key={i} onClick={() => handleNavigationClick(e.id)} className="text-left">{e.name}</button>
        ))}
      </div>
    </motion.div>
  )
}