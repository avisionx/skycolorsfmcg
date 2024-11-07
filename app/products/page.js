import PageHeader from '@/components/page-header';
import ProductCatalogue from '@/components/product-catalogue';
import { Suspense } from 'react';

export const metadata = {
  title: 'Our Products',
};

export default function Products() {
  return (
    <>
      <PageHeader text='Our Products' />
      <div className='mx-auto w-full max-w-[1600px] px-5 pb-32 pt-4'>
        <Suspense fallback={<div className='min-h-[60dvh]'></div>}>
          <ProductCatalogue />
        </Suspense>
      </div>
    </>
  );
}
