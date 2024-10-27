import PageHeader from '@/components/page-header';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader text='Privacy Policy' />
      <div className='mx-auto w-full max-w-[1600px] px-5 pb-32 pt-12'>
        <p className='mb-4'>
          At SKY COLORS FMCG, we are committed to protecting your privacy. This
          privacy policy explains how we collect, use, and safeguard your
          information when you visit our website.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          1. Information We Collect
        </h2>
        <p className='mb-4'>
          We may collect personal information such as your name, email address,
          phone number, and any other details you provide to us. We also collect
          non-personal information such as browser type, pages visited, and
          usage patterns.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          2. How We Use Your Information
        </h2>
        <p className='mb-4'>
          We use your information to improve our website, respond to your
          inquiries, send updates, and enhance your user experience. We may also
          use your information to comply with legal requirements.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          3. Information Sharing and Disclosure
        </h2>
        <p className='mb-4'>
          We do not sell or rent your personal information to third parties.
          However, we may share information with third-party service providers
          for business purposes or as required by law.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>4. Security</h2>
        <p className='mb-4'>
          We take appropriate measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          internet transmission is completely secure.
        </p>

        <h2 className='mb-4 mt-8 text-2xl font-semibold'>
          5. Changes to this Privacy Policy
        </h2>
        <p className='mb-4'>
          We may update our privacy policy from time to time. Any changes will
          be posted on this page, and we encourage you to review it
          periodically.
        </p>

        <p className='mt-8 text-sm text-black/80'>
          If you have any questions about our privacy practices, please contact
          us at{' '}
          <Link href='mailto:trio@eim.ae' className='hover:underline'>
            trio@eim.ae
          </Link>
          .
        </p>
      </div>
    </>
  );
}
