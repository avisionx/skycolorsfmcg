'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LOGO from "@/assets/sky-colors-logo.png";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`py-3 z-50 fixed top-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-white shadow-sm border-b' : ''}`}>
            <div className="px-5 max-w-[1600px] mx-auto flex items-center">
                <Link href='/'>
                    <Image src={LOGO} width={192} alt="SKY COLORS" />
                </Link>
                <div className="ml-auto lg:flex items-center gap-12 hidden">
                    <Link href='/about'>
                        <Button className='px-1 font-bold text-black/80' variant="link">About</Button>
                    </Link>
                    <Link href='/products'>
                        <Button className='px-1 font-bold text-black/80' variant="link">Products</Button>
                    </Link>
                    <Link href='/contact-us'>
                        <Button className="bg-[#3ab4e7] hover:bg-[#3ab4e7]/90 py-3 px-6 font-bold">Get in Touch</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
