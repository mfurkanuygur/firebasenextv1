"use client"
import { getUniqueUserData } from "@/lib/request"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MdInfoOutline, MdOutlineFavorite, MdOutlineFavoriteBorder, MdOutlineShoppingBasket } from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RenderProduct = ({ product = { id: "test", title: "test", desc: "test", price: "test", category: "test", img: "https://i.imgur.com/KeqG6r4.jpeg" }, productID="11" }) => {
  const router = useRouter()
  const handleUserBasket = () => {
    const userToken = Cookies.get("userToken")
    if (userToken) {
      getUniqueUserData(userToken, productID, product)
    }
    else {
      toast.error("Please login your account!")
      // setTimeout(() => {
      //   router.push("/login")
      // },2500)
    }
  }
  return (
    // hover:scale-105 transition-all
    <div className="shadow-lg  capitalize rounded-md bg-white ">
      <div className="relative">
        <button className="absolute right-3 top-3 " onClick={() => { console.log(product?.id) }}>
          <MdOutlineFavoriteBorder className="text-red-600 text-xl" />
        </button>
        <Image src={product?.img} width={275} height={250} alt={product?.title} className="rounded-t-md" />
      </div>
      <div className="flex flex-col gap-1 p-2 justify-between">
        <h1 className="text-sm min-h-10 line-clamp-2" title={product?.title}>{product?.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">{product?.category}</p>
          <p className="font-bold">$ {product?.price}</p>
        </div>
        <p>{product.count}</p>
        <div className=" grid grid-cols-2 gap-2 items-center ">
          <button onClick={() => { handleUserBasket() }} className=" rounded-md bg-slate-200 py-1 hover:bg-slate-400 hover:text-white transition-all">
            <MdOutlineShoppingBasket className="text-xl w-full" />
          </button>
          <Link href={`/products/${productID}`} className=" rounded-md bg-slate-200 py-1 hover:bg-slate-400 hover:text-white transition-all">
            <MdInfoOutline className="text-xl w-full" />
          </Link>
        </div>
      </div>
      <ToastContainer theme="colored" autoClose={1500} closeOnClick rtl={false} />
    </div>
  )
}

export default RenderProduct