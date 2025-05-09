import Image from "next/image"
import { Badge } from "lucide-react"
import { Tooltip, TooltipTrigger } from "../ui/tooltip"
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"


const TechStack = ({ image, name, className }) => {
    return (
        <div className={className}>
            <Tooltip className="">
                <TooltipTrigger className="hover:shadow-purple-800 inset-1.5  sm:w-[96px] md:w-[128px] flex items-center justify-center py-4 px-4  sm:p-4" asChild>
                    <div className="rounded-2xl bg-white shadow-2xl flex items-center justify-center transition hover:scale-105 border-[0.1px] border-stone-500">
                        <Image
                            src={image}
                            alt="Tech logo"
                            className="object-contain w-[64px] h-[64px] sm:w-[64px] sm:h-[64px]"
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