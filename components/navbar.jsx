'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LOGO from '@/assets/sky-colors-logo.png';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full py-3 transition-colors duration-300 ${isScrolled ? 'border-b bg-white shadow-sm' : ''}`}
    >
      <div className='mx-auto flex max-w-[1600px] items-center px-5'>
        <Link href='/'>
          <Image src={LOGO} width={192} alt='SKY COLORS' />
        </Link>
        <div className='ml-auto hidden items-center gap-12 lg:flex'>
          <Link href='/about'>
            <Button className='px-1 font-bold text-black/80' variant='link'>
              About
            </Button>
          </Link>
          <Link href='/products'>
            <Button className='px-1 font-bold text-black/80' variant='link'>
              Products
            </Button>
          </Link>
          <Link href='/contact-us'>
            <Button className='bg-[#3ab4e7] px-6 py-3 font-bold hover:bg-[#3ab4e7]/90'>
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
