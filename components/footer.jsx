import Link from 'next/link';
import Image from 'next/image';
import LOGO from '@/assets/sky-colors-logo.webp';

export default function Footer() {
  return (
    <footer className='bg-[#016DA2]'>
      <div className='mx-auto max-w-[1600px] px-5 pb-6 pt-12'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link href='/' className='flex items-center'>
              <Image src={LOGO} width={256} alt='SKY COLORS' />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            <div>
              <p className='mb-3 font-semibold text-white'>Sitemap</p>
              <ul className='text-sm text-white'>
                <li className='mb-3'>
                  <Link href='/products' className='hover:underline'>
                    Products
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/contact-us' className='hover:underline'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='mb-3 font-semibold text-white'>Follow Us</p>
              <ul className='text-sm text-white'>
                <li className='mb-3'>
                  <Link
                    href='https://www.linkedin.com/company/sky-colors-general-trading-llc/'
                    target='_blank'
                    className='hover:underline'
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='mb-3 font-semibold text-white'>Legal</p>
              <ul className='text-sm text-white'>
                <li className='mb-3'>
                  <Link href='/privacy-policy' className='hover:underline'>
                    Privacy Policy
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/terms-n-conditions' className='hover:underline'>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-4 border-gray-200' />
        <div className='pt-2 sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-white'>
            © {new Date().getFullYear()}{' '}
            <Link href='/' className='hover:underline'>
              SKY COLORS FMCG
            </Link>
            . All Rights Reserved.
          </span>
          <div className='mt-4 flex sm:mt-0 sm:justify-center'>
            <a
              href='https://www.linkedin.com/company/sky-colors-general-trading-llc/'
              className='text-white hover:text-white/80'
              target='_blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='size-6'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
              <span className='sr-only'>LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
