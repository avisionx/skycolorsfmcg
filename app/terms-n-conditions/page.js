import PageHeader from '@/components/page-header';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions',
};

export default function Terms() {
  return (
    <>
      <PageHeader text='Terms & Conditions' />
      <div className='mx-auto w-full max-w-[1600px] px-5 pb-32 pt-4'>
        <p className='mb-4'>
          Welcome to SKY COLORS FMCG. By accessing or using our website, you
          agree to comply with these terms and conditions.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          1. Use of the Website
        </h2>
        <p className='mb-4'>
          You may use our website for lawful purposes only. You agree not to
          misuse the website or engage in any activity that may disrupt its
          functionality or security.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          2. Intellectual Property
        </h2>
        <p className='mb-4'>
          All content on this website, including text, images, logos, and
          trademarks, is the property of SKY COLORS FMCG. Unauthorized use of
          our intellectual property is prohibited.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          3. Limitation of Liability
        </h2>
        <p className='mb-4'>
          SKY COLORS FMCG is not liable for any damages arising from the use of
          this website or its content. We do not guarantee the accuracy or
          completeness of the information provided.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          4. Changes to the Terms
        </h2>
        <p className='mb-4'>
          We may update these terms from time to time. By continuing to use the
          website after changes are posted, you agree to the revised terms and
          conditions.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>5. Governing Law</h2>
        <p className='mb-4'>
          These terms are governed by the laws of the United Arab Emirates. Any
          disputes arising from these terms will be subject to the exclusive
          jurisdiction of the courts in Dubai, UAE.
        </p>

        <p className='mt-8 text-sm text-black/80'>
          If you have any questions about these terms, please contact us at{' '}
          <Link href='mailto:trio@eim.ae' className='hover:underline'>
            trio@eim.ae
          </Link>
          .
        </p>
      </div>
    </>
  );
}
