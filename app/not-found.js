import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <BackgroundBeamsWithCollision className='flex-1 flex-col px-5'>
            <p className="relative z-20 text-5xl lg:text-7xl font-bold text-center text-black/80 dark:text-white font-sans tracking-tight">
                Error&nbsp;
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">404.</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">404.</span>
                    </div>
                </div>
            </p>
            <p class="text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8">This page doesn't exist. Looks like you are lost.</p>
            <Link href='/' className='mt-12'>
                <Button variant="link" className="py-3 px-6 font-bold p-1">Go back Home <ArrowRight className='ml-1' /></Button>
            </Link>
        </BackgroundBeamsWithCollision>
    )
}