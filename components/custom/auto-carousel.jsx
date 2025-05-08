import dicodingLogo from '../../public/dicoding-logo.png'
import alkademiLogo from '../../public/alkademi-logo.png'
import courseraLogo from '../../public/coursera-logo.png'
import udemyLogo from '../../public/udemy-logo.png'
import hackerrankLogo from '../../public/hackerrank-logo.png'

const learningPlatform = [
    { ticker: dicodingLogo.src, name: 'Dicoding' },
    { ticker: alkademiLogo.src, name: 'Alkademi' },
    { ticker: courseraLogo.src, name: 'Coursera' },
    { ticker: udemyLogo.src, name: 'Udemy' },
    { ticker: hackerrankLogo.src, name: 'HackerRank' },
]

const Carousel = () => {
    return (
        <div className="px-3 sm:px-5 md:px-7 lg:px-9 mt-15  ">
            <p className="text-stone-700 text-lg font-medium ">Some Platform i use for study</p>
           
            <div className='overflow-hidden'>
                <ul className='flex gap-20 animate-infinite-scroll'>
                    {[...learningPlatform, ...learningPlatform].map((item, idx) => (
                        <li key={idx}>
                            <img src={item.ticker} alt={item.name} className='min-w-24 max-w-24' />
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default Carousel