export default function PageHeader({ text }) {
  return (
    <div className='relative flex w-full items-center justify-center bg-dot-black/[0.2]'>
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='z-20 flex flex-col items-center px-5 py-28'>
        <h1 className='text-balance bg-gradient-to-t from-black/60 to-black bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl'>
          {text}
        </h1>
        <hr className='mt-4 w-1/2 p-0' />
      </div>
    </div>
  );
}
