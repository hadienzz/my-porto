
import heroAssets from '../../assets/hero-assets.png'
import figmaLogo from '../../assets/figma-logo.png'
import githubLogo from '../../assets/github-logo.png'
import instaLogo from '../../assets/insta-logo.png'
import linkedinLogo from '../../assets/linkedin-logo.png'
import { Button } from "../ui/button"
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const badgeIcon = [
    { icon: figmaLogo.src },
    { icon: githubLogo.src },
    { icon: instaLogo.src },
    { icon: linkedinLogo.src },
]

const HeroSection = () => {
    return (
        <section className="pt-8 ">

            <div className="w-3/4 lg:w-1/2 text-stone-900">
                <Badge className={'text-black bg-[#A5D6FF] text-[#003B73]'}>• Available For Work</Badge>
                <h1 className="font-bold text-7xl ">Hi, I'm a web developer</h1>
                <p className="font-md text-xl my-2"> I have 3 years of experience of making website from scratch</p>
                <Button className={'cursor-pointer'}>Book A Call</Button>
            </div>

            <div className=" mt-4 ">
                <div>
                    <img src={heroAssets.src} className="rounded-lg w-full h-80 object-fit" alt="" />
                </div>
                <div className='flex items-center'>
                    <Card className={'grid grid-cols-[80px_80px] gap-4 bg-[#EAEAEA] '}>
                        {badgeIcon.map((item, idx) => (
                            <img src={item.icon} className='bg-white rounded-full p-3 object-fill' key={idx} />
                        ))}
                    </Card>
                    <Card className={'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-5000w-full  w-full h-full'}>

                    </Card>
                </div>
            </div >

        </section >
    )
}

export default HeroSection