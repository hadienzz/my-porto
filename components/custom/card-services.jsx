import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "../ui/card"
import { } from '@radix-ui/react-arrow'
import TechStack from "./tech-stack"
import Link from "next/link"


const CardServices = ({ image, title, content }) => {
    return (
        <Card className={'border-[#444444] border-[0.2px] shadow-2xl my-18 lg:my-0'}>
            <CardHeader className={'grid place-items-center justify-center items-center -mt-[70px]'}>
                <TechStack image={image} className={''} service />
                <CardTitle className={'text-2xl mx-auto text-center mt-10'}>{title}</CardTitle>
            </CardHeader>
            <CardContent className={'text-center text-prim text-lg'}>
                <p className="lg:w-[266px] mx-auto">{content}</p>
            </CardContent>
            <CardFooter className={'mt-15'}>
                <Button className={'cursor-pointer mx-auto group border-[1px] border-[#00000f] bg-transparent hover:bg-transparent text-prim py-5 rounded-4xl'}>
                    <Link href={'/contact'}>
                        <p className="text-base font-medium group-hover:text-black ">Let's Talk <span className="text-[0px] group-hover:text-base transition-[1s]">&#10230;</span> </p>
                    </Link>
                </Button>
            </CardFooter>
        </Card>

    )
}

export default CardServices