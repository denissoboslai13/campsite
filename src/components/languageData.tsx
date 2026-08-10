import flagSK from '../assets/flags/sk.webp'
import flagHU from '../assets/flags/hu.webp'
import flagGB from '../assets/flags/gb.webp'

export type Language = 'SK' | 'HU' | 'EN'

export const languageDict: Record<Language, { language: string, flag: string }> = {
    'SK': {language: 'SK', flag: flagSK},
    'HU': {language: 'HU', flag: flagHU},
    'EN': {language: 'EN', flag: flagGB},
  }

interface ServiceEntry {
  service: string
  price: string
}

interface Category {
  header: string
  services: ServiceEntry[]
}

interface PeopleEntry {
  age: string
  price: string
}

interface PriceTable {
  categories: { category: Category }[]
  people: {
    header: string
    age: string
    price: string
    prices: PeopleEntry[]
  }
}

interface PriceList {
  header: string
  service: string
  price: string
  table: PriceTable
}

interface Hero {
  header: string
  paragraph: string
}

interface Showcase {
  header: string
}

interface Footer {
  header: string,
  pp: string,
  map: string
}

interface LanguageText {
  home: string
  hero: Hero
  showcase: Showcase
  priceList: PriceList
  footer: Footer
  pp: string
}

export const languageText: Record<Language, LanguageText> = {
  'SK': {
    home: 'Domov',
    hero: { header: 'Vitajte vo svete Yacht-Camping', paragraph: 'Miesto, kde sa stretáva vodné dobrodružstvo a relax v blízkosti prírody!'},
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
              {service: '1-2 osoba', price: '10 €'},
              {service: '3-4 osoba', price: '15 €'},
              {service: '6-8 osoba', price: '20 €'}
            ]
          }},
          {category: {
            header: 'Auto Karavan',
            services: [
              {service: 'Pri dunaji', price: '30 €'},
              {service: 'Stred časť', price: '20 €'},
              {service: 'Vrchná časť', price: '15 €'}
            ]
          }}, 
          {category: {
            header: 'Mobilný Dom',
            services: [
              {service: '4 miestný- s kuchyňou', price: '50 €'},
              {service: '4 miestný- kuchyňa, toaleta, sprcha', price: '60 €'},
              {service: '6 miestný- s kuchyňou', price: '80 €'}
            ]
          }}
        ],
        people: {
          header: 'Osoby',
          age: 'Vek',
          price: 'Cena',
          prices: [
            {age: 'nad 18 rokov', price: '6 €'},
            {age: 'nad 14 rokov', price: '3 €'},
          ]
        },
    }}, 
    footer: { header: 'Dostupnosť', pp: 'Prevádzkový Poriadok', map: 'Kliknite pre načítanie mapy!'},
    pp: 'Naspäť'
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
              {service: '1-2 személy', price: '10 €'},
              {service: '3-4 személy', price: '15 €'},
              {service: '6-8 személy', price: '20 €'}
            ]
          }},
          {category: {
            header: 'Lakókocsi',
            services: [
              {service: 'Dunánál', price: '30 €'},
              {service: 'középső rész', price: '20 €'},
              {service: 'Felső rész', price: '15 €'}
            ]
          }}, 
          {category: {
            header: 'Mobilház',
            services: [
              {service: '4 személyes- konyhával', price: '50 €'},
              {service: '4 személyes- konyha, wc, zuhanyzó', price: '60 €'},
              {service: '6 személyes- konyhával', price: '80 €'}
            ]
          }}
        ],
        people: {
          header: 'Személy',
          age: 'Kor',
          price: 'Ár',
          prices: [
            {age: '18 év felett', price: '6 €'},
            {age: '14 év felett', price: '3 €'},
          ]
        },
    }},  
    footer: { header: 'Elérhetőségek', pp: 'Üzemeltetési Szabályok', map: 'Kattintson a térkép betöltéséhez!'},
    pp: 'Vissza'
  },
  'EN': {
    home: 'Home',
    hero: { header: 'Welcome to the world of Yacht-Camping', paragraph: 'Where water adventures meet relaxation in nature!'}, 
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
              {service: '1-2 person', price: '10 €'},
              {service: '3-4 person', price: '15 €'},
              {service: '6-8 person', price: '20 €'}
            ]
          }},
          {category: {
            header: 'Caravan',
            services: [
              {service: 'By the Danube', price: '30 €'},
              {service: 'Middle part', price: '20 €'},
              {service: 'Upper part', price: '15 €'}
            ]
          }}, 
          {category: {
            header: 'Mobile Home',
            services: [
              {service: '4 person- with kitchen', price: '50 €'},
              {service: '4 person- kitchen, toilet, shower', price: '60 €'},
              {service: '6 person- with kitchen', price: '80 €'}
            ]
          }}
        ],
        people: {
          header: 'Person',
          age: 'Age',
          price: 'Price',
          prices: [
            {age: 'Over 18 years old', price: '6 €'},
            {age: 'Over 14 years old', price: '3 €'},
          ]
        },
    }}, 
    footer: { header: 'Contacts', pp: 'Operating rules', map: 'Click to load map!'},
    pp: 'Back'
  }
}


interface SectionItem {
  id: string
  name: string
}

export interface Section {
  items: SectionItem[]
}

export const PPSections = {
  2: { header: '2. Prevádzková doba', items: ['Areál je otvorený v období od 1. mája do 30. septembra každého roka.', 'Prístup mimo tohto obdobia je možný len so súhlasom prevádzkovateľa.', 'Prevádzková doba: denne od 8:00 do 20:00.', 'Nočný pokoj: od 22:00 do 06:00.']},
  5: { header: '5. Ochrana zdravia, bezpečnosť a požiarna ochrana', items: ['Otvorený oheň je povolený len na vyznačených miestach.', 'Grilovanie je povolené pri dodržaní bezpečnostných pravidiel', 'Každý je povinný poznať únikové cesty a zásady požiarnej bezpečnosti.', 'Deti do 15 rokov môžu byť v areáli iba v sprievode dospelej osoby.']},
  6: { header: '6. Zodpovednosť a sankcie', items: ['Prevádzkovateľ nenesie zodpovednosť za škody na osobnom majetku nájomcov a návštevníkov ani za úrazy spôsobené vlastným konaním.', 'Každý nájomca je zodpovedný za škody spôsobené na zariadení areálu.', 'Pri porušení poriadku môže prevádzkovateľ osobe odoprieť vstup do areálu alebo ukončiť jej pobyt bez nároku na vrátenie poplatkov.']},
  7: { header: '7. Záverečné ustanovenia', items: ['Tento poriadok je záväzný pre všetkých nájomcov a návštevníkov areálu.', 'Poriadok je vyvesený na viditeľnom mieste v areáli a k dispozícii u prevádzkovateľa.', 'Nadobúda účinnosť dňa: 18.06.2025']},
}