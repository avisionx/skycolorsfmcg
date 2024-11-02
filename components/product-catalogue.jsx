'use client';

import { productsCatalogue } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ProductCatalogue() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') ?? productsCatalogue[0].id;

  return (
    <>
      <div className='scrollbar-hide flex gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap'>
        {productsCatalogue.map(({ label, id }) => (
          <div key={id} className='min-h-10 min-w-64 flex-1 text-center'>
            <Link
              href={{ query: { type: id } }}
              className={`text-pretty px-3 pb-2 duration-300 ${id === type ? 'border-b-4 border-[#016da2]' : ''}`}
            >
              <span
                className={`bg-gradient-to-t ${id === type ? 'from-[#016da2]' : 'from-black/60'} to-black bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent duration-300`}
              >
                {label}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className='grid gap-4 pt-8 md:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 12 }).map((_, index) => (
          <div className='rounded-lg' key={`${type}-${index}`}>
            <Image
              src={`https://picsum.photos/seed/${type}-${index}/300/200.webp`}
              alt=''
              width={150}
              height={100}
              className='w-full rounded-lg'
            />
          </div>
        ))}
      </div>
    </>
  );
}
