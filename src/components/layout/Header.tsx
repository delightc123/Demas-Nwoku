'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

interface HeaderProps {
  logo?: string;
  logoAlt?: string;
}

export default function Header({
  logo = '/images/logo_3d_gold.png',
  logoAlt = 'The Legacy Initiative',
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <Image
            src={logo}
            alt={logoAlt}
            width={70}
            height={70}
            className={styles.logoImage}
          />
        </a>
      </div>
    </header>
  );
}
