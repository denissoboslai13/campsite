import flagSK from '../assets/flags/sk.webp'
import flagHU from '../assets/flags/hu.webp'
import flagGB from '../assets/flags/gb.webp'
import flagDE from '../assets/flags/de.webp'

export const languageDict = {
    'SK': {language: 'SK', flag: flagSK},
    'HU': {language: 'HU', flag: flagHU},
    'EN': {language: 'EN', flag: flagGB},
    'DE': {language: 'DE', flag: flagDE},
  }

export const languageText = {
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
            {age: 'nad 14 rokov', price: '4 €'},
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
            {age: '14 év felett', price: '4 €'},
          ]
        },
    }},  
    footer: { header: 'Elérhetőségek' }
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
            {age: 'Over 14 years old', price: '4 €'},
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
