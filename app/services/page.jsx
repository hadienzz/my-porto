import codeIcon from '../../public/code-icon.png'
import problemSolvingIcon from '../../public/problem-solving-icon.png'
import evaluateIcon from '../../public/evaluate-icon.png'
import CardServices from "@/components/custom/card-services"


const CARD_SERVICES = [
    { image: codeIcon, title: ' Responsive and Interactive Web Design', content: 'For company or existing projects. I work as part of the development team.', },
    { image: problemSolvingIcon, title: 'Solving Problem and Solving Error', content: 'For assignment or individual, I also work as Problem Solving Error', },
    { image: evaluateIcon, title: ' Project Evaluation and Usability Testing', content: 'For evaluation and improving scalability project i also do evaluation', },
]


const ServicePage = () => {
    return (
        <section className="px-3 sm:px-5 md:px-7 lg:px-9  font-inter md:max-w-[1200px]  text-start gap-5 mx-auto">
            <div className="pt-40">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-stone-900">Services</h1>
                <p className="my-5 text-xl max-w-[620px] text-prim leading-[1.2]">
                    I work holistically from ideation to supporting implementation. Over the years, I've designed everything from consumer mobile apps to web platforms and enterprise software.
                </p>
            </div>

            <div>
                <div className="lg:mt-40 lg:grid grid-cols-3 gap-6 gap-y-2">
                    {CARD_SERVICES.map((item, idx) => (
                        <CardServices {...item} key={idx} />
                    ))}
                </div>
            </div>

        </section >

    )
}

export default ServicePage