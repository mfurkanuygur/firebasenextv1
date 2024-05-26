import { createUser } from "@/lib/form"
import Link from "next/link"

const Signin = () => {
    return (
        <div className="h-screen w-full px-3 py-24 bg-slate-300 flex flex-col items-center justify-center">
            <div className="text-xl  font-semibold w-full md:w-2/3 lg:w-1/3">
                <div className="text-center"><h1 className="mb-5">Create your account...</h1></div>
                <form action={createUser} className="flex flex-col gap-4 w-full ">
                    <div className="text-sm flex flex-col ">
                        <label htmlFor="name" className="">Name:</label>
                        <input className="w-full py-2 px-2 text-sm rounded-b-md outline-none" type="text" placeholder="Enter your name..." name="name" id="name" />
                    </div>
                    <div className="text-sm flex flex-col ">
                        <label htmlFor="email" className="">Email:</label>
                        <input className="w-full py-2 px-2 text-sm rounded-b-md outline-none" type="text" placeholder="Enter your email..." name="email" id="email" />
                    </div>
                    <div className="text-sm flex flex-col ">
                        <label htmlFor="email" className="">Password:</label>
                        <input className="py-2 px-2 text-sm rounded-b-md outline-none" type="password" placeholder="Enter your password..." name="password" />
                    </div>
                    <button className="w-full mt-2 bg-white rounded-md py-1 text-base hover:bg-slate-500 hover:text-black transition-all">Sign in</button>
                    <div className=" flex flex-col justify-center items-center">
                        <p className="font-light text-sm">Already have an account? </p>
                        <div className="underline text-sm"><Link href="/login">Log in</Link></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin