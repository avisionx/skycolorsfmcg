'use client';

import { motion } from 'framer-motion';
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
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { BackgroundLines } from '@/components/ui/background-lines';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <div className='relative z-10 mx-auto h-full w-full max-w-[1600px] px-5'>
          <div className='h-full w-full flex-col items-center gap-5 lg:flex lg:flex-row'>
            <div className='pt-24 lg:pt-0'>
              <h1 className='text-balance text-4xl font-bold tracking-tight text-black/80 lg:text-6xl'>
                Your Trusted Partner in Global FMCG Solutions
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
          particleCount={100}
          baseHue={150}
          className='flex h-full w-full flex-col items-center justify-center px-5 py-8 text-white lg:py-16'
        >
          <div className='flex flex-col items-center'>
            <p className='text-4xl font-bold'>About Us</p>
            <hr className='mb-8 mt-3 w-1/3 p-0' />
          </div>
          <h3 className='mx-auto max-w-3xl text-center text-lg'>
            Established in 2017, we specialize in the wholesale distribution of
            food, non-food, and personal care products. With over 20 years of
            experience, we have expanded globally, building long-standing
            relationships with suppliers and customers alike.
          </h3>
          <div className='mt-16 grid grid-cols-2 gap-12 lg:grid-cols-4'>
            <motion.div
              className='flex flex-col gap-3 text-center'
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              <p className='text-3xl font-bold'>25+</p>
              <p>Years Experience</p>
            </motion.div>
            <motion.div
              className='flex flex-col gap-3 text-center'
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              <p className='text-3xl font-bold'>50+</p>
              <p>Countries Global Presence</p>
            </motion.div>
            <motion.div
              className='flex flex-col gap-3 text-center'
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              <p className='text-3xl font-bold'>1000+</p>
              <p>Products Available</p>
            </motion.div>
            <motion.div
              className='flex flex-col gap-3 text-center'
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            >
              <p className='text-3xl font-bold'>150+</p>
              <p>Partners Worldwide</p>
            </motion.div>
          </div>
          <div>
            <Link href='/about'>
              <Button variant='link' className='mt-12 px-1 py-0 text-white'>
                Continue Reading <ArrowRight className='ml-1' />
              </Button>
            </Link>
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
          <div>
            <Image src={PRODUCTS_IMG_1} alt='' className='rounded-lg' />
          </div>
          <div>
            <Image src={PRODUCTS_IMG_2} alt='' className='rounded-lg' />
          </div>
          <div>
            <Image src={PRODUCTS_IMG_3} alt='' className='rounded-lg' />
          </div>
        </div>
      </div>

      <div className='bg-muted pb-20 pt-16'>
        <div className='mx-auto w-full max-w-[1600px] px-5'>
          <div className='flex flex-col items-center'>
            <p className='text-balance text-center text-4xl font-bold text-black/80'>
              Our Trusted Partners
            </p>
            <hr className='mb-8 mt-3 w-[100px] p-0' />
          </div>
          <div className='grid grid-cols-2 justify-center gap-6 md:grid-cols-3 lg:grid-cols-6'>
            <Image
              src='https://picsum.photos/300/200'
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
            <Image
              src='https://picsum.photos/300/200'
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
            <Image
              src='https://picsum.photos/300/200'
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
            <Image
              src='https://picsum.photos/300/200'
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
            <Image
              src='https://picsum.photos/300/200'
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
            <Image
              src='https://picsum.photos/300/200'
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
          </div>
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-center overflow-hidden py-16 antialiased'>
        <div className='flex flex-col items-center'>
          <p className='text-balance px-5 text-center text-4xl font-bold text-black/80'>
            What Our Partners Say
          </p>
          <hr className='mb-8 mt-3 w-1/3 p-0' />
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
      <div className='relative mx-auto mb-20 w-full max-w-[1600px] px-5'>
        <BackgroundLines className='flex !h-auto w-full flex-col items-center justify-center rounded-2xl bg-slate-100 px-5 pb-36 pt-32 shadow-sm'>
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
        </BackgroundLines>
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];
