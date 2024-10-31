'use client';

import Image from 'next/image';
import HERO_IMG from '@/public/skycolorsfmcg-hero.webp';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Vortex } from '@/components/ui/vortex';
import PRODUCTS_IMG_1 from '@/assets/our-products/food.webp';
import PRODUCTS_IMG_2 from '@/assets/our-products/personal-care.webp';
import PRODUCTS_IMG_3 from '@/assets/our-products/household.webp';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <div className='relative z-10 mx-auto h-full w-full max-w-[1600px] px-5'>
          <div className='h-full w-full flex-col items-center gap-5 lg:flex lg:flex-row'>
            <div className='pt-24 lg:pt-0'>
              <h1 className='text-balance text-4xl font-bold tracking-tight text-black/80 lg:text-6xl'>
                Your Trusted Partner in Global FMCG Brands
              </h1>
              <h2 className='mt-2 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
                Delivering high-quality food, non-food, and personal care
                products worldwide.
              </h2>
              <div className='mt-6 flex items-center gap-x-8'>
                <Link href='/contact-us'>
                  <MovingBorderButton
                    borderRadius='0.75rem'
                    className='border-none bg-[#3ab4e7] bg-gradient-to-r from-[#3ab4e7] to-[#016da2] p-2 text-[14px] font-bold text-white hover:bg-[#3ab4e7]/90 hover:opacity-90'
                    containerClassName='h-12 w-52'
                  >
                    Get in Touch
                  </MovingBorderButton>
                </Link>
                <Link href='/products'>
                  <Button variant='link' className='p-0 text-[16px] font-bold'>
                    Our Products <ArrowRight className='ml-1' />
                  </Button>
                </Link>
              </div>
            </div>
            <div className='mt-12 pb-20 lg:ml-auto lg:mt-0 lg:py-32'>
              <Image
                src={HERO_IMG}
                width={400}
                height={400}
                className='w-full rounded-lg lg:ml-auto lg:w-10/12'
                alt=''
              />
            </div>
          </div>
        </div>
      </AuroraBackground>
      <div className='overflow-hidden'>
        <Vortex
          backgroundColor='rgb(0,6,9)'
          rangeY={100}
          particleCount={15}
          baseHue={150}
          className='flex h-full w-full flex-col items-center justify-center px-5 py-8 text-white lg:py-16'
        >
          <div className='flex flex-col items-center'>
            <p className='text-4xl font-bold'>About Us</p>
            <hr className='mb-8 mt-3 w-1/3 p-0' />
          </div>
          <h3 className='mx-auto max-w-3xl text-center'>
            Our story begins in 1998 in a small office in Deira, Dubai. Mr.
            Girish Bhagtani had a vision of giving Dubai the kind of household,
            electric and electronics business it deserved. A business that would
            not compromise on quality and standards. He also expanded the
            business to offer services in food , non-food and personal care
            items.
            <br />
            <br />
            Sky Colors established in 2017, specializes in the wholesale
            distribution of food, non-food, and personal care products. With
            over 9 years of experience, we have expanded globally, building
            long-standing relationships with suppliers and customers alike.
          </h3>
          <div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16'>
            <div className='flex flex-col gap-3 text-center'>
              <p className='text-3xl font-bold'>27+</p>
              <p>Years Experience</p>
            </div>
            <div className='flex flex-col gap-3 text-center'>
              <p className='text-3xl font-bold'>15+</p>
              <p>Countries Global Presence</p>
            </div>
            <div className='flex flex-col gap-3 text-center'>
              <p className='text-3xl font-bold'>1000+</p>
              <p>Products Available</p>
            </div>
          </div>
        </Vortex>
      </div>
      <div className='mx-auto w-full max-w-[1600px] px-5 pb-20 pt-16'>
        <div className='flex items-center'>
          <p className='text-4xl font-bold text-black/80'>Our Products</p>
          <Link href='/products' className='ml-auto'>
            <Button variant='link' className='p-1 px-6 py-3 pr-0 font-bold'>
              View All <ArrowRight className='ml-1' />
            </Button>
          </Link>
        </div>
        <h4 className='mt-2 text-pretty text-lg font-medium text-gray-500'>
          Explore our extensive range of high-quality FMCG products, including
          trusted food, personal care, and household essentials. Sourced
          globally and crafted for excellence, we bring reliable brands to meet
          your everyday needs.
        </h4>
        <div className='mt-8 grid w-full grid-cols-1 gap-8 lg:grid-cols-3'>
          <Link
            className='group relative flex items-end justify-start overflow-hidden rounded-lg'
            href='/products#food-n-beverage'
          >
            <Image
              src={PRODUCTS_IMG_1}
              alt=''
              className='duration-300 group-hover:scale-105'
            />
            <div className='absolute w-full rounded-b-lg bg-white/30 px-12 py-3 text-center text-xl font-semibold text-black/80 backdrop-blur-sm duration-300 group-hover:py-6 group-hover:text-2xl'>
              FOOD & BEVERAGE
            </div>
          </Link>
          <Link
            className='group relative flex items-end justify-start overflow-hidden rounded-lg'
            href='/products#home-care'
          >
            <Image
              src={PRODUCTS_IMG_2}
              alt=''
              className='duration-300 group-hover:scale-105'
            />
            <div className='absolute w-full rounded-b-lg bg-white/30 px-12 py-3 text-center text-xl font-semibold text-black/80 backdrop-blur-sm duration-300 group-hover:py-6 group-hover:text-2xl'>
              HOME CARE
            </div>
          </Link>
          <Link
            className='group relative flex items-end justify-start overflow-hidden rounded-lg'
            href='/products#personal-care'
          >
            <Image
              src={PRODUCTS_IMG_3}
              alt=''
              className='duration-300 group-hover:scale-105'
            />
            <div className='absolute w-full rounded-b-lg bg-white/30 px-12 py-3 text-center text-xl font-semibold text-black/80 backdrop-blur-sm duration-300 group-hover:py-6 group-hover:text-2xl'>
              PERSONAL CARE
            </div>
          </Link>
        </div>
      </div>
      <div className='bg-muted pb-20 pt-16'>
        <div className='mx-auto w-full max-w-[1600px] px-5'>
          <div className='flex flex-col items-center'>
            <p className='text-balance text-center text-4xl font-bold text-black/80'>
              Associated Brands
            </p>
            <hr className='mb-8 mt-3 w-[100px] p-0' />
          </div>
          <Carousel
            className='w-full'
            opts={{ loop: true, dragFree: true }}
            plugins={[Autoplay({ delay: 2000, stopOnMouseEnter: true })]}
          >
            <CarouselContent className='-ml-1'>
              {Array.from({ length: 12 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className='pl-1 md:basis-1/3 lg:basis-1/5'
                >
                  <div className='p-1'>
                    <Image
                      src={`https://picsum.photos/seed/${index}/300/200.webp`}
                      alt=''
                      width={150}
                      height={100}
                      className='w-full rounded-lg'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-4 size-10 border-0 bg-white/20 text-white backdrop-blur-sm' />
            <CarouselNext className='right-4 size-10 border-0 bg-white/20 text-white backdrop-blur-sm' />
          </Carousel>
        </div>
      </div>
      <div className='relative mx-auto my-20 w-full max-w-[1600px] px-5'>
        <div className='flex !h-auto w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-100 px-5 pb-32 pt-32 shadow-sm bg-dot-black/[0.2]'>
          <div className='pointer-events-none absolute inset-0 mx-5 flex items-center justify-center rounded-lg bg-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]'></div>
          <p className='z-20 text-balance text-center text-4xl font-bold text-black/80'>
            Ready to Grow with Us?
          </p>
          <p className='z-20 mt-2 text-pretty text-center font-medium text-gray-500'>
            Partner with SKY COLORS FMCG today for all your FMCG needs.
          </p>
          <div className='z-20 mt-10 grid grid-cols-1 items-center gap-6 text-center lg:grid-cols-2'>
            <Link href='/contact-us'>
              <MovingBorderButton
                borderRadius='0.75rem'
                className='border-none bg-[#3ab4e7] bg-gradient-to-r from-[#3ab4e7] to-[#016da2] p-2 text-[14px] font-bold text-white hover:bg-[#3ab4e7]/90 hover:opacity-90'
                containerClassName='h-12 w-52'
              >
                Get in Touch
              </MovingBorderButton>
            </Link>
            <Link href='/products'>
              <Button variant='link' className='p-0 text-[16px] font-bold'>
                Our Products <ArrowRight className='ml-1' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
