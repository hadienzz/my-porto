import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"

const Nav = () => {
    return (
        <nav className="flex w-full p-2 flex justify-between items-center rounded-sm bg-[#FFF] ">
            <div className="flex gap-2 text-[Inter]">
                <Avatar>
                    <AvatarImage src />
                    <AvatarFallback>Logo</AvatarFallback>
                </Avatar>
                <h1 className="text-lg font-bold text-slate-900">Hadienzz</h1>
            </div>
            <div>
                <Button>Book A Call</Button>
            </div>
        </nav>
    )
}

export default Nav