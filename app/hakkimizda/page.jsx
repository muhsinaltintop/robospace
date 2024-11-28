import React from 'react'
import ContentRenderer from './ContentRenderer'

export const metadata  = {
  title: "Hakkımızda",
  description: "Güneş Paneli Temizleme Robotu Hakkında",
  keywords: ['Güneş Paneli Temizleme Robotu', 'Güneş Paneli Yıkama Makinası', 'GES Temizlik Robotu',  'Panel Temizleme Robotu'],
};

const page = () => {
  return (
    <div>
      <ContentRenderer/>
    </div>
  )
}

export default page