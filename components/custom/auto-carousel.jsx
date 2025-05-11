import dicodingLogo from '../../public/dicoding-logo.png'
import alkademiLogo from '../../public/alkademi-logo.png'
import courseraLogo from '../../public/coursera-logo.png'
import udemyLogo from '../../public/udemy-logo.png'
import hackerrankLogo from '../../public/hackerrank-logo.png'
import leetcodeLogo from '../../public/leetcode-logo.png'

const learningPlatform = [
    { ticker: dicodingLogo.src, name: 'Dicoding' },
    { ticker: alkademiLogo.src, name: 'Alkademi' },
    { ticker: courseraLogo.src, name: 'Coursera' },
    { ticker: udemyLogo.src, name: 'Udemy' },
    { ticker: hackerrankLogo.src, name: 'HackerRank' },
    { ticker: leetcodeLogo.src, name: 'Leetcode' },
]

const Carousel = () => {
    return (
        <div className="px-3 sm:px-5 md:px-7 lg:px-9 pt-20 md:flex justify-center md:max-w-[1200px] items-center overflow-hidden mx-auto ">
            <p className="text-stone-700 text-lg min-w-[250px]">Some Platform i use for study</p>
            <div className='overflow-hidden flex mt-2 '>
                <ul className='flex gap-20 animate-infinite-scroll '>
                    {[...learningPlatform, ...learningPlatform].map((item, idx) => (
                        <li key={idx}>
                            <img src={item.ticker} alt={item.name} className='min-w-18 max-w-18' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Carousel