"use client"
import Image from "next/image"
import Link from "next/link"
import { MdInfoOutline, MdOutlineFavorite, MdOutlineShoppingBasket } from "react-icons/md"

const RenderProduct = ({ product ,productID}) => {
  return (
    <div className="shadow-lg m-3 capitalize rounded-md">
      <div className="relative">
        <button className="absolute right-3 top-3 " onClick={() => { console.log(product.id) }}>
          <MdOutlineFavorite className="text-red-600 text-xl" />
        </button>
        <Image src={product.img} width={300} height={300} alt={product.title} className="rounded-t-md" />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <h1 className="text-sm line-clamp-1">{product.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">{product.category}</p>
          <p className="font-bold">$ {product.price}</p>
        </div>
        <div className=" grid grid-cols-2 gap-2 items-center ">
          <button className=" rounded-md bg-white py-1 ">
            <MdOutlineShoppingBasket className="text-xl w-full" />
          </button>
          <Link href={`/products/${productID}`} className=" rounded-md bg-white py-1">
            <MdInfoOutline className="text-xl w-full" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RenderProduct