'use client';

import {
  productsCatalogue,
  productsCatalogueImageCounts,
} from '@/lib/constants';
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
              <h2
                className={`inline bg-gradient-to-t ${id === type ? 'from-[#016da2]' : 'from-black/60'} to-black bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent duration-300`}
              >
                {label}
              </h2>
            </Link>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 gap-12 pt-8 lg:grid-cols-5'>
        {Array.from({ length: productsCatalogueImageCounts[type] }).map(
          (_, index) => (
            <div
              className='flex items-center justify-center rounded-lg p-6'
              key={`${type}-${index}`}
            >
              <Image
                src={`/products/${type}/${index + 1}.webp`}
                alt={`${type} type product image - ${index + 1}`}
                width={150}
                height={100}
                className='w-full rounded-lg'
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
