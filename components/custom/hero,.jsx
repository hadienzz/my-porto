import identityImg from '../../assets/identity.jpeg'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className="px-2 sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-5xl font-semibold text-stone-700 ">Front End Engineer</h1>
            <p className="text-md my-2 ">I am front end engineer with 3 years study experience and i have strong knowledge in web development</p>
            <Button>Contact Me!</Button>
        </section>
    )
}

export default Hero