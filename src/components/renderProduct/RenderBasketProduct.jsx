"use client"
import Image from "next/image"
import Link from "next/link"
import { MdInfoOutline, MdOutlineFavoriteBorder, MdOutlineShoppingBasket, MdPlusOne } from "react-icons/md"
import { FiUserPlus, FiUser, FiPlus, FiMinus } from "react-icons/fi";

import { ToastContainer } from "react-toastify"

const RenderBasketProduct = ({ product, productID }) => {
    return (
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
                <div className=" grid grid-cols-3 gap-3 items-center ">
                    <button className=" rounded-md bg-slate-200 py-1 hover:bg-slate-400 hover:text-white transition-all">
                        <FiMinus className="text-xl w-full" />
                    </button>
                    <div className="w-full flex flex-col text-center ">
                        <p className="font-bold text-sm border-b-2 ">{product.count}</p>
                        <p className="text-xs capitalize">count</p>
                    </div>
                    <button className=" rounded-md bg-slate-200 py-1 hover:bg-slate-400 hover:text-white transition-all">
                        <FiPlus className="text-xl w-full" />
                    </button>
                </div>
                <Link href={`/products/${productID}`} className=" rounded-md bg-slate-200 py-1 hover:bg-slate-400 hover:text-white transition-all">
                    <MdInfoOutline className="text-xl w-full" />
                </Link>
            </div>
            <ToastContainer theme="colored" autoClose={1500} closeOnClick rtl={false} />
        </div>
    )
}

export default RenderBasketProduct