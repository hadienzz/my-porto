
import { Button } from '../ui/button'
import figmaLogo from '../../public/figma-logo.png'
import tailwindLogo from '../../public/tailwind-logo.png'
import nodeLogo from '../../public/node-logo.png'
import nextLogo from '../../public/next-js-logo.png'
import githubLogo from '../../public/github-logo.png'
import javascriptLogo from '../../public/js-logo.png'
import reactLogo from '../../public/react-js-logo.png'
import TechStack from './tech-stack'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import HeaderHero from './header-hero'


const Hero = () => {
    return (
        <section className="px-3 sm:px-5 md:px-7 lg:px-9 flex flex-col items-center  font-inter md:max-w-[1200px] mx-auto text-start md:text-center gap-5">

            <HeaderHero />

            <div className='flex gap-2 justify-center items-center'>
                <Link href={'https://www.linkedin.com/in/hadin-pramiadi-55946525b/'} target='_blank'>
                    <Button className="cursor-pointer px-6 py-6 w-36">Lets Connect!</Button>
                </Link>
                <Link href={'/contact'}>
                    <Button className={'bg-transparent cursor-pointer text-black border-1 border-black w-36 py-6 hover:text-white'}>Send me a message</Button>
                </Link>
            </div>

            <TooltipProvider>
                <div className="flex flex-col gap-8">
                    <h1 className='text-stone-900 font-medium text-lg'>My Current Skills</h1>
                    <div className='flex justify-center gap-4'>
                        <TechStack image={javascriptLogo} name="JavaScript" />
                        <TechStack image={reactLogo} name="React JS" />
                        <TechStack image={nodeLogo} name="Node JS" />
                        <TechStack image={nextLogo} name="Next JS" />
                    </div>
                    <div className='flex justify-center gap-4'>
                        <TechStack image={figmaLogo} name="Figma" />
                        <TechStack image={githubLogo} name="Github" />
                        <TechStack image={tailwindLogo} name="Tailwind CSS" />
                    </div>
                </div>
            </TooltipProvider>
        </section>
    )
}

export default Hero