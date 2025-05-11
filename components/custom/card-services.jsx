import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "../ui/card"
import { } from '@radix-ui/react-arrow'
import TechStack from "./tech-stack"


const CardServices = ({ image, title, content }) => {
    return (
        <Card className={'border-[#444444] border-[0.2px] shadow-2xl my-18 md:my-0'}>
            <CardHeader className={'grid place-items-center justify-center items-center -mt-[70px]'}>
                <TechStack image={image} service />
                <CardTitle className={'text-2xl mx-auto text-center mt-10'}>{title}</CardTitle>
            </CardHeader>
            <CardContent className={'text-center text-prim text-lg'}>
                <p className="lg:w-[266px] mx-auto">{content}</p>
            </CardContent>
            <CardFooter className={'mt-15'}>
                <Button className={'cursor-pointer mx-auto'}>
                    <div className="flex items-center justify-center gap-2">
                        <p className="">Let's Talk</p>
                        <span className={`hidden`}>
                            <svg width="28" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </span>
                    </div>
                </Button>
            </CardFooter>
        </Card>

    )
}

export default CardServices