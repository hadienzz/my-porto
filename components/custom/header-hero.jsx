'use client'

import { TypeAnimation } from 'react-type-animation'

const HeaderHero = () => {
    return (
        <div className='pt-20 '>
            <TypeAnimation
                sequence={[
                    'Front End Engineer',
                    2000,
                    'Back End Learner',
                    2000,
                    'Web Developer',
                    2000
                ]}
                wrapper='h1'
                repeat={Infinity}
                cursor
                className='text-6xl md:text-7xl lg:text-8xl font-bold text-stone-900 min-h-[120px] '
            />
            <p className="my-5 text-lg max-w-[600px] text-prim leading-[1.2] mx-auto ">
                I am Hadin Pramiadi, a Front End Engineer with 3 years study experience and I have strong knowledge in web development.
            </p>
        </div>
    )
}

export default HeaderHero