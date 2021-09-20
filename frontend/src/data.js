import React from 'react'

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'


export const links = [
    {
        id: 1,
        url: "/",
        text: "Home"
    },
    {
        id: 2,
        url: "/about",
        text: "About"
    },
    {
        id: 3,
        url: "/products",
        text: "Products"
    }
]


export const services = [
    {
      id: 1,
      icon: <GiCompass />,
      title: 'Mission',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
      id: 2,
      icon: <GiDiamondHard />,
      title: 'Vision',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
      id: 3,
      icon: <GiStabbedNote />,
      title: 'History',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
  ]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`