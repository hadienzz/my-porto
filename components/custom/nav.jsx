'use client'

import { Menu, Target } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet"
import logo from '../../public/logo.png'
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="border-b-[0.5px] border-[black] fixed w-full backdrop-blur-sm z-1">
            <div className="hidden md:flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 ">
                <div>
                    <img src={logo.src} className="w-16 h-16" alt="Logo" />
                </div>
                <ul className="inline-flex gap-4">
                    <Link href={'/services'}>Services</Link>
                    <Link href={'#'}>Business</Link>
                    <Link href={'#'}>Partner</Link>
                    <Link href={'#'}>About Me</Link>
                </ul>
                <div>
                    <Link href={'https://wa.me/6281283832132'} target="_blank">
                        <Button className="cursor-pointer">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild className="cursor-pointer">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className={'px-2 w-1/2'}>

                        <SheetTitle className={''}>
                            <img src={logo.src} alt="Logo" className="w-16 h-16" />
                        </SheetTitle>

                        <div className="flex flex-col gap-4 ">
                            <Link href="/" className="hover:bg-stone-100 p-1 ">Home</Link>
                            <Link href="/services" className="hover:bg-stone-100 p-1 ">Services</Link>
                            <Link href="#partner" className="hover:bg-stone-100 p-1 ">Partner</Link>
                            <Link href="#about" className="hover:bg-stone-100 p-1 ">About me </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>


        </nav>
    )
}

export default Nav