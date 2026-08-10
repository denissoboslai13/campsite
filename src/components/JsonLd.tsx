import reviews from '../data/reviews.json'

const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Campground",
      "name": "Camp Chľaba-Kováčov",
      "description": "Camp Chľaba-Kováčov - Kde sa stretáva vodné dobrodružstvo a relax v blízkosti prírody!",
      "url": "https://yacht-camping.com",
      "image": [
        "https://yacht-camping.com/images/heroImg.webp",
        "https://yacht-camping.com/images/img12.webp"
      ],
      "telephone": "+421915705498",
      "email": "yachtcamping1@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chľaba 752",
        "addressLocality": "Chľaba",
        "postalCode": "94365",
        "addressCountry": "SK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.82485293294582,
        "longitude":  18.803076384709954
      },
      "priceRange": "€€",
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviews.ratingValue,
        reviewCount: reviews.reviewCount,
    },
    }

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
)