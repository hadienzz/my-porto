
import { Button } from '../ui/button'
import figmaLogo from '../../public/figma-logo.png'
import tailwindLogo from '../../public/tailwind-logo.png'
import nodeLogo from '../../public/node-logo.png'
import nextLogo from '../../public/next-js-logo.png'
import githubLogo from '../../public/github-logo.png'
import TechStack from './tech-stack'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import Link from 'next/link'


const Hero = () => {
    return (
        <section className="px-3 sm:px-5 md:px-7 lg:px-9 mt-8 md:flex justify-center items-center place-items-center  relative flex-row-reverse">
            <div className="  ">
                <TooltipProvider className="">
                    <TechStack image={figmaLogo} name={'Figma'} className={'ml-40'} />
                    <TechStack image={nextLogo} name={'Next JS'} className={''} />
                    <TechStack image={nodeLogo} name={'Node JS'} className={'ml-35'} />
                    <TechStack image={tailwindLogo} name={'Tailwind CSS'} className={'ml-75'} />
                    <TechStack image={githubLogo} name={'Github'} className={'ml-15'} />
                </TooltipProvider>
            </div>

            <div className="relative ">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter lg:w-[120px] "> Front End Engineer</h1>
                <p className=" my-2 text-lg max-w-[420px] text-stone-700 leading-[1.2]">I am Hadin Pramiadi, a Front End Engineer with 3 years study experience and i have strong knowledge in web development</p>
                <Link href={'https://www.linkedin.com/in/hadin-pramiadi-55946525b/'} target='_blank'>
                    <Button className={'cursor-pointer'}>Contact Me!</Button>
                </Link>
            </div>


        </section>
    )
}

export default Hero