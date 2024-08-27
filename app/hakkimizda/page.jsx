"use client"
import React, { useState } from 'react';
import SideMenu from '../_components/SideMenu';
import { AboutOdaksan, Mission, Production, Quality, Vision } from './Content';


const Page = () => {
  // Aktif içeriği tutacak state
  const [activeContent, setActiveContent] = useState('home');

  // Menü öğelerine tıklanınca çalışacak fonksiyon
  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  // Dinamik olarak gösterilecek içerik
  const renderContent = () => {
    switch (activeContent) {
      case 'odaksan':
        return <AboutOdaksan/>;
      case 'vision':
        return <Vision/>;
      case 'mission':
        return <Mission/>;
      case 'quality':
        return <Quality/>;
      case 'production':
        return <Production/>;
      default:
        return <AboutOdaksan/>;
    }
  };

  return (
    <div className="flex">
      {/* Sol Menü */}
      <SideMenu onMenuClick={handleMenuClick} />

      {/* Sağ Taraf Dinamik İçerik */}
      <div className="flex-1 p-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default Page;
