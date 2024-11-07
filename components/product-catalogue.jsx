'use client';

import { useRef, useEffect, useState } from 'react';
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
  const itemRefs = useRef({});
  const [priorityLimit, setPriorityLimit] = useState(10);

  useEffect(() => {
    if (itemRefs.current[type]) {
      itemRefs.current[type].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [type]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setPriorityLimit(8);
      } else {
        setPriorityLimit(10);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='scrollbar-hide flex gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap'>
        {productsCatalogue.map(({ label, id }) => (
          <div
            key={id}
            className='min-h-10 min-w-64 flex-1 text-center'
            ref={(ele) => (itemRefs.current[id] = ele)}
          >
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
      <div className='grid min-h-[65vh] grid-cols-2 gap-6 pt-8 lg:grid-cols-5 lg:gap-12'>
        {Array.from({ length: productsCatalogueImageCounts[type] }).map(
          (_, index) => (
            <div
              className='flex items-center justify-center rounded-lg p-4 lg:p-6'
              key={`${type}-${index}`}
            >
              <Image
                src={`/products/${type}/${index + 1}.webp`}
                alt={`${type} type product image - ${index + 1}`}
                width={150}
                height={100}
                className='w-full rounded-lg'
                priority={index < priorityLimit}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
