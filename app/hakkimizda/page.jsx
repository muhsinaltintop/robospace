import React from 'react'
import ContentRenderer from './ContentRenderer'

export const metadata  = {
  title: "Hakkımızda",
  description: "Güneş Panel Temizleme Robotu Hakkında",
  keywords: ['Güneş Panel Temizleme Robotu', 'Güneş Paneli Yıkama Makinası', 'GES Temizlik Robotu',  'Panel Temizleme Robotu'],
};

const page = () => {
  return (
    <div>
      <ContentRenderer/>
    </div>
  )
}

export default page