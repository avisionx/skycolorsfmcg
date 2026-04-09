import PageHeader from '@/components/page-header';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
};

export default function ContactUs() {
  return (
    <>
      <PageHeader text='Contact Us' />
      <div className='mx-auto grid min-h-[60dvh] w-full max-w-[1600px] gap-6 px-5 pb-32 pt-12 lg:grid-cols-2'>
        <div className='overflow-hidden rounded-lg'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.083666958841!2d55.30006231192327!3d25.267770777572537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43838a9c24f5%3A0x20cc783528c05524!2sSKY%20COLORS%20GENERAL%20TRADING%20LLC!5e0!3m2!1sen!2sin!4v1730540223004!5m2!1sen!2sin'
            className='min-h-96'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='eager'
            referrerPolicy='no-referrer-when-downgrade'
            title='Sky Colors FMCG'
          />
        </div>
        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='flex items-center gap-2 bg-gradient-to-t from-[#016da2] to-black bg-clip-text text-center tracking-tight text-transparent'>
              <MapPin className='size-[32px] text-[#016da2]' />
              <span className='text-2xl font-bold'>Address</span>
            </h2>
            <p className='ml-10 mt-1 text-lg text-black/80'>
              Sky Colors General Trading LLC. <br />
              Office 905, Emirates NBD Bank Building, Baniyas Road, Deira,{' '}
              <br />
              P.O Box No. 30993, <br />
              Dubai, U.A.E. <br />
            </p>
          </div>
          <div>
            <h2 className='flex items-center gap-2 bg-gradient-to-t from-[#016da2] to-black bg-clip-text text-center tracking-tight text-transparent'>
              <Phone className='size-[32px] text-[#016da2]' />
              <span className='text-2xl font-bold'>Phone</span>
            </h2>
            <p className='ml-10 mt-1 text-lg text-black/80'>
              Office No. - +971 4 229 1429
            </p>
          </div>
          <div>
            <h2 className='flex items-center gap-2 bg-gradient-to-t from-[#016da2] to-black bg-clip-text text-center tracking-tight text-transparent'>
              <Mail className='size-[32px] text-[#016da2]' />
              <span className='text-2xl font-bold'>Email</span>
            </h2>
            <p className='ml-10 mt-1 text-lg text-black/80'>
              Shoot us an email at{' '}
              <Link className='underline' href='mailto:info@skycolorsfmcg.com'>
                info@skycolorsfmcg.com
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className='flex items-center gap-2 bg-gradient-to-t from-[#016da2] to-black bg-clip-text text-center tracking-tight text-transparent'>
              <svg
                className='size-[36px] text-[#016da2]'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                x='0px'
                y='0px'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z'></path>
              </svg>
              <span className='text-2xl font-bold'>WhatsApp</span>
            </h2>
            <p className='ml-10 mt-1 text-lg text-black/80'>
              Click{' '}
              <Link
                className='underline'
                href='https://wa.me/+971509697243?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20the%20availability%20of%20certain%20FMCG%20products.%20Can%20you%20help%20me%20with%20product%20options%20and%20pricing%3F'
              >
                here
              </Link>{' '}
              to chat on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
