import Image from "next/image"
import notFoundGif from "../../public/notfound.gif"

const notFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <Image src={notFoundGif} width={200} height={200} alt="Page not found..."/>
            <h1 className="text-xl font-bold">Oopps! Page not found!</h1>
        </div>
    )
}

export default notFound