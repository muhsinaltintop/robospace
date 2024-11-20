import React from 'react'
import Contact from '../_components/Contact'
export const metadata = {
  title: "İletişim Sayfası",
  description: "Odaksan Robospace İletişim - Gaziantep",
  keywords: ["iletişim", "telefon", "ulaşım", "harita", "fax", "eposta"
  ]
}

const page = () => {
  return (
    <div><Contact/></div>
  )
}

export default page