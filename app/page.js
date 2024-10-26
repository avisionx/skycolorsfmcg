'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import HERO_IMG from "@/public/skycolorsfmcg-hero.webp"
import { AuroraBackground } from '@/components/ui/aurora-background';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Vortex } from '@/components/ui/vortex';
import PRODUCTS_IMG_1 from "@/assets/our-products/food.webp"
import PRODUCTS_IMG_2 from "@/assets/our-products/personal-care.webp"
import PRODUCTS_IMG_3 from "@/assets/our-products/household.webp"
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";


export default function Home() {
  return (<>
    <AuroraBackground>
      <div className='px-5 mx-auto max-w-[1600px] h-full z-10 relative w-full'>
        <div className='lg:flex flex-col lg:flex-row gap-5 h-full items-center w-full'>
          <div className='pt-24 lg:pt-0'>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-black/80 lg:text-6xl">
              Your Trusted Partner in Global FMCG Solutions
            </h1>
            <h2 className="mt-2 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Delivering high-quality food, non-food, and personal care products worldwide.
            </h2>
            <div className="mt-6 flex gap-x-3">
              <Link href='/contact-us'>
                <Button className="bg-[#3ab4e7] hover:bg-[#3ab4e7]/90 py-3 px-6 font-bold">Get in Touch</Button>
              </Link>
              <Link href='/products'>
                <Button variant="link" className="py-3 px-6 font-bold p-1 ml-4">Our Products <ArrowRight className='ml-1' /></Button>
              </Link>
            </div>
          </div>
          <div className='pb-20 lg:py-32 lg:ml-auto mt-12 lg:mt-0'>
            <Image src={HERO_IMG} width={400} height={400} className='rounded-lg w-full lg:w-10/12 lg:ml-auto' alt='' />
          </div>
        </div>
      </div>
    </AuroraBackground>
    <div className="overflow-hidden">
      <Vortex
        backgroundColor="rgb(0,6,9)"
        rangeY={100}
        particleCount={100}
        baseHue={150}
        className="flex items-center flex-col justify-center px-5 w-full h-full text-white py-8 lg:py-16"
      >
        <div className='flex items-center flex-col'>
          <p className="text-4xl font-bold">About Us</p>
          <hr className='w-1/3 p-0 mt-3 mb-8' />
        </div>
        <h3 className="text-lg max-w-3xl mx-auto text-center">
          Established in 2017, we specialize in the wholesale distribution of food, non-food, and personal care products. With over 20 years of experience, we have expanded globally, building long-standing relationships with suppliers and customers alike.
        </h3>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div className='text-center gap-3 flex flex-col'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: "easeInOut",
            }}>
            <p className="text-3xl font-bold">25+</p>
            <p>Years Experience</p>
          </motion.div>
          <motion.div className='text-center gap-3 flex flex-col'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}>
            <p className="text-3xl font-bold">50+</p>
            <p>Countries Global Presence</p>
          </motion.div>
          <motion.div className='text-center gap-3 flex flex-col'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}>
            <p className="text-3xl font-bold">1000+</p>
            <p>Products Available</p>
          </motion.div>
          <motion.div className='text-center gap-3 flex flex-col'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeInOut",
            }}>
            <p className="text-3xl font-bold">150+</p>
            <p>Partners Worldwide</p>
          </motion.div>
        </div>
        <div>
          <Link href='/about'>
            <Button variant="link" className="text-white py-0 mt-12 px-1">Continue Reading <ArrowRight className='ml-1' /></Button>
          </Link>
        </div>
      </Vortex>
    </div>
    <div className="py-16 mx-auto max-w-[1600px] px-5 w-full">
      <div className="flex items-center">
        <p className="text-4xl font-bold text-black/80">Our Products</p>
        <Link href='/products' className="ml-auto">
          <Button variant="link" className="py-3 px-6 font-bold p-1 pr-0">View All <ArrowRight className='ml-1' /></Button>
        </Link>
      </div>
      <h4 className="mt-2 text-pretty text-lg font-medium text-gray-500">
        Explore our extensive range of high-quality FMCG products, including trusted food, personal care, and household essentials. Sourced globally and crafted for excellence, we bring reliable brands to meet your everyday needs.
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-8">
        <div>
          <Image src={PRODUCTS_IMG_1} alt="" className="rounded-lg" />
        </div>
        <div>
          <Image src={PRODUCTS_IMG_2} alt="" className="rounded-lg" />
        </div>
        <div>
          <Image src={PRODUCTS_IMG_3} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>

    <FeaturesSectionDemo />

    {/* TESTIMONIALS SECTION INFINITE MOVING CARD compinent */}

    <div className="bg-white text-gray-900">

      {/* Products Section */}
      <section id="products" className="p-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product Item */}
          <div className="bg-white p-4 shadow hover:shadow-lg transition">
            <Image src="/food-product.jpg" alt="Food Product" width={300} height={200} />
            <h3 className="text-xl font-bold mt-4">Food Products</h3>
            <p>High-quality, globally sourced food products.</p>
          </div>
          <div className="bg-white p-4 shadow hover:shadow-lg transition">
            <Image src="/personal-care.jpg" alt="Personal Care" width={300} height={200} />
            <h3 className="text-xl font-bold mt-4">Personal Care</h3>
            <p>Leading brands for personal care and hygiene.</p>
          </div>
          <div className="bg-white p-4 shadow hover:shadow-lg transition">
            <Image src="/cleaning.jpg" alt="Non-Food Products" width={300} height={200} />
            <h3 className="text-xl font-bold mt-4">Non-Food Products</h3>
            <p>Quality products for household and industrial use.</p>
          </div>
          <div className="bg-white p-4 shadow hover:shadow-lg transition">
            <Image src="/toiletries.jpg" alt="Toiletries" width={300} height={200} />
            <h3 className="text-xl font-bold mt-4">Toiletries</h3>
            <p>Premium toiletries from global brands.</p>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global-reach" className="p-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Global Reach</h2>
        <p className="text-lg max-w-3xl mx-auto">With a presence in over 50 countries, we ensure seamless distribution across the globe.</p>
        <div className="mt-8 relative">
          <Image src="/world-map.png" alt="Global Map" width={800} height={400} className="mx-auto" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-12 text-center bg-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Grow with Us?</h2>
        <p className="text-lg mb-8">Partner with SKY COLORS FMCG today for all your FMCG needs.</p>
        <button className="bg-yellow-500 hover:bg-yellow-600">Contact Us</button>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-white text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-yellow-300">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300">Terms of Service</a>
        </div>
        <p className="mt-4">© 2024 SKY COLORS FMCG. All rights reserved.</p>
      </footer>
    </div>
  </>
  );
}
