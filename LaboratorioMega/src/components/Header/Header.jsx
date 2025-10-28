import "./Header.css";
import Logo from '../../assets/LogoMega.jpeg';
import React, { useState, useEffect } from 'react';

export default function Header() {

  const [isVisible, setIsVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
   
    if (window.scrollY > 100) {

      if (window.scrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
    } else {
    
      setIsVisible(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 

  
  const headerClass = isVisible ? 'header' : 'header hidden';

  return (
    <header className={headerClass}> 

      <div className="logo_icon"><img src={Logo} alt="Logo Mega " /></div>


      <nav className="nav">
        <a href="#home">INÍCIO</a>
        <a href="#servicos">SERVIÇOS</a>
        <a href="#projetos">PROJETOS</a>
        <a href="#contato">CONTATO</a>
      </nav>
    </header>
  );
}