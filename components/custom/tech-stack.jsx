import Image from "next/image"
import { Badge } from "lucide-react"
import { Tooltip, TooltipTrigger } from "../ui/tooltip"
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"


const TechStack = ({ image, name, className }) => {
    return (
        <div className={className}>
            <Tooltip >
                <TooltipTrigger className="shadow-xl/60 w-[64px] sm:w-[96px] md:w-[128px] flex items-center justify-center py-2 px-1  sm:p-4" asChild>
                    <div className="rounded-2xl bg-white shadow-md flex items-center justify-center transition hover:scale-105">
                        <Image
                            src={image}
                            alt="Tech logo"
                            className="object-contain w-[42px] h-[42px] sm:w-[64px] sm:h-[64px]"
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