import { signUser } from "@/lib/form"

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center w-full text-white">
            <h1 className="text-xl md:text-3xl my-3">Login</h1>
            <form className="flex flex-col gap-4 w-1/3 text-black p-8 border-2 border-white" action={signUser}>
                <input className="py-2 px-2 text-sm rounded-md outline-none" type="text" placeholder="Enter your email..." name="email" />
                <input className="py-2 px-2 text-sm rounded-md outline-none" type="password" placeholder="Enter your password..." name="password" />
                <button className="w-full bg-white rounded-md py-2 hover:bg-black hover:text-white transition-all">Login</button>
            </form>
        </div>
    )
}

export default Login    