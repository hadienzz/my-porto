import Input from "@/components/custom/input"
import { Button } from "@/components/ui/button"

const ContactPage = () => {
    return (
        <main className="px-3 sm:px-5 md:px-7 lg:px-9  font-inter md:max-w-[1200px]  text-start gap-5 mx-auto  ">
            <div className="md:w-[450px] ">
                <h1 className="pt-20 lg:pt-40 text-5xl">Send me a message</h1>
                <p className=" text-lg text-prim mt-4 max-w-[400px]">Have a project in mind or just want to say hi? Send me a message using form the below</p>

                <form action="" className="mt-6 grid gap-6 md:w-[500px] w-[400px]">
                    <Input id={'Name'} />
                    <Input id={'Email'} type='email' />
                    <Input id={'Message'} textArea />
                    <Button className={'text-lg text-white py-6 cursor-pointer rounded-4xl '}>Submit</Button>
                </form>
            </div>
        </main>
    )
}

export default ContactPage