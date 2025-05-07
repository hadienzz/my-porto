import Image from "next/image"
import { Badge } from "lucide-react"
import { Tooltip, TooltipTrigger } from "../ui/tooltip"
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"


const TechStack = ({ image, name, className }) => {
    return (
        <div className={className}>
            <Tooltip >
                <TooltipTrigger className="shadow-xl/30 w-[96px] md:w-[128px] flex items-center justify-center p-4" asChild>
                    <div className="p-4 rounded-2xl bg-white shadow-md flex items-center justify-center transition hover:scale-105">
                        <Image
                            src={image}
                            alt="Tech logo"
                            className="object-contain w-[64px] h-[64px]"
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default TechStack