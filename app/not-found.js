import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <BackgroundBeamsWithCollision className='min-h-[600px] w-full flex-1 flex-col px-5'>
      <p className='relative z-20 text-center font-sans text-5xl font-bold tracking-tight text-black/80 dark:text-white lg:text-7xl'>
        Error&nbsp;
        <div className='relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]'>
          <div className='absolute left-0 top-[1px] bg-gradient-to-r from-[#3ab4e7] to-[#016da2] bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]'>
            <span className=''>404.</span>
          </div>
          <div className='relative bg-gradient-to-r from-[#3ab4e7] to-[#016da2] bg-clip-text bg-no-repeat py-4 text-transparent'>
            <span className=''>404.</span>
          </div>
        </div>
      </p>
      <p className='text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8'>
        This page doesn&apos;t exist. Looks like you are lost.
      </p>
      <Link href='/' className='mt-12'>
        <Button variant='secondary' className='px-7 py-6 font-bold'>
          Go back Home <ArrowRight className='ml-1' />
        </Button>
      </Link>
    </BackgroundBeamsWithCollision>
  );
}
