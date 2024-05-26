import { useLoginState } from "@/store/store";
import Link from "next/link"
import { FiUserPlus, FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdOutlineLogout, MdMenu, MdSearch } from "react-icons/md";

const navLinks = [
  { id: "1", name: "Home", url: "/" },
  { id: "2", name: "Products", url: "/products" },
  { id: "3", name: "about", url: "/about" },
]


const DesktopNavbar = () => {
  const loginState = useLoginState((state) => state.loginState)
  const updateLoginState = useLoginState((state) => state.updateLoginState)
  return (
    <div className="hidden md:flex justify-between items-center capitalize font-bold w-full">
      <Link className="text-xl md:text-2xl font-semibold " href={"/"}>NextStore</Link>
      {navLinks.map(link => (
        <Link key={link.id} href={link.url} className="hidden md:block font-light text-sm transition-all hover:text-primary-red ">{link.name}</Link>
      ))}

      <form onSubmit={(e) => handleSearch(e)} className="hidden md:flex items-center border rounded-md  ">
        <input type="text" placeholder="Search something!!" className="w-full py-1 px-2 rounded-md transition font-light outline-none text-gray-500 focus:text-black " />
        <MdSearch onClick={(e) => handleSearch(e)} className="text-3xl mr-2 cursor-pointer" />
      </form>
      {/* onChange={updateText} */}
      {
        loginState &&
        <div className="flex gap-8">
          <Link href={"/favorites"} className="hidden md:block"><MdOutlineFavoriteBorder className="text-xl transition-all hover:text-primary-red" /></Link>
          <Link href={"/cart"} className="hidden md:block"><MdOutlineShoppingCart className="text-xl transition-all hover:text-primary-red" /></Link>
          <button onClick={() => handleLogout()} ><MdOutlineLogout className="hidden md:block text-xl transition-all hover:text-primary-red" /></button>
        </div>
        || <>
          <div className="flex gap-6 ">
            <Link href={"/login"} className="hidden md:block border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
              <div className="flex gap-2 justify-center items-center ">
                <FiUser className="text-xl" />
                <p className="text-sm font-medium">Login</p>
              </div>
            </Link>
            <Link href={"/signin"} className="hidden md:block border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
              <div className="flex gap-2 justify-center items-center ">
                <FiUserPlus className="text-xl " />
                <p className="text-sm font-medium">Sign In</p>
              </div>
            </Link>
          </div>
        </>
      }
      <div className='cursor-pointer md:hidden'>
        <MdMenu className="text-3xl" onClick={() => openMenu()} />
      </div>
    </div>
  )
}

export default DesktopNavbar