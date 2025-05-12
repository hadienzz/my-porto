
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


const  Hero = () => {
    return (
        <section className="px-3 sm:px-5 md:px-7 lg:px-9 flex flex-col items-center  font-inter md:max-w-[1200px] mx-auto text-start md:text-center gap-5">
            <div className="pt-20">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-stone-900">Front End <span className=''>Engineer</span></h1>
                <p className="my-5 text-base max-w-[520px] text-[#444444] leading-[1.2] mx-auto">
                    I am Hadin Pramiadi, a Front End Engineer with 3 years study experience and I have strong knowledge in web development.
                </p>
                <Link href={'https://www.linkedin.com/in/hadin-pramiadi-55946525b/'} target='_blank'>
                    <Button className="cursor-pointer px-6 py-6 ">Lets Connect!</Button>
                </Link>
            </div>

            <TooltipProvider>
                <div className="flex flex-col gap-8">
                    <h1 className='text-stone-900  font-medium text-lg'>My Current Skills</h1>
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