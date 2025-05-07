
import { Button } from '../ui/button'
import figmaLogo from '../../public/figma-logo.png'
import tailwindLogo from '../../public/tailwind-logo.png'
import nodeLogo from '../../public/node-logo.png'
import nextLogo from '../../public/next-js-logo.png'
import { Badge } from '../ui/badge'
import TechStack from './tech-stack'
import { TooltipProvider } from '@radix-ui/react-tooltip'


const Hero = () => {
    return (
        <section className="px-2 sm:px-4 md:px-6 lg:px-8 mt-8 md:flex flex-row-reverse justify-center items center gap-40">
            <div className='relative'>
                <TooltipProvider className="">
                    <TechStack image={figmaLogo} name={'Figma'} className={'ml-20'} />
                    <TechStack image={nextLogo} name={'Next JS'} className={'ml-70'} />
                    <TechStack image={nodeLogo} name={'Next JS'} className={'ml-35'} />
                    <TechStack image={tailwindLogo} name={'Next JS'} className={'ml-75'} />
                    <TechStack image={githubLogo} name={'Next JS'} className={'ml-75'} />
                </TooltipProvider>
            </div>

            <div>
                <h1 className="text-6xl md:text-8xl font-inter "> Front End Engineer</h1>
                <p className=" my-2 text-lg max-w-[420px] text-stone-700 font-medium">I am Hadin Pramiadi, a Front End Engineer with 3 years study experience and i have strong knowledge in web development</p>
                <Button>Contact Me!</Button>
            </div>
        </section>
    )
}

export default Hero