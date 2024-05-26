"use client"
import { useLoginState } from "@/store/store";
import Cookies from "js-cookie";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiUserPlus, FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdOutlineLogout, MdMenu, MdSearch } from "react-icons/md";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";


const Navbar = () => {
    const [inputText, setInputText] = useState(null)
    const router = useRouter()
    const [menuState, setMenuState] = useState(false)
    const openMenu = () => {
        setMenuState(!menuState)
    }
    const userToken = Cookies?.get("userToken")
    const loginState = useLoginState((state) => state.loginState)
    const updateLoginState = useLoginState((state) => state.updateLoginState)
    useEffect(() => {
        if (Cookies.get("userToken") && !loginState) {
            updateLoginState(true);
        }
    }, [loginState, updateLoginState, userToken]);

    const handleLogout = () => {
        Cookies.remove("userToken");
        updateLoginState(false);
    };
    return (
        <header className="container mx-auto h-auto  bg-white text-main-color pb-2 md:pb-0 fixed top-0 left-0" >
            <DesktopNavbar />

            {menuState && (
                <div className="flex flex-col justify-center items-center text-center gap-5 mt-5 capitalize font-bold  md:hidden">
                    {Links.map(link => (
                        <Link key={link.id} href={link.url} className=" font-light text-sm transition-all hover:text-primary-red ">{link.name}</Link>
                    ))}
                    {
                        loginState &&
                        <div className="flex gap-5 ">
                            <Link href={"/favorites"} ><MdOutlineFavoriteBorder className="text-xl transition-all hover:text-primary-red" /></Link>
                            <Link href={"/cart"} ><MdOutlineShoppingCart className="text-xl transition-all hover:text-primary-red" /></Link>
                            <button onClick={() => handleLogout()} ><MdOutlineLogout className="text-xl transition-all hover:text-primary-red" /></button>
                        </div>
                        || <div className="flex gap-6 ">
                            <Link href={"/login"} className=" border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
                                <div className="flex gap-2 justify-center items-center ">
                                    <FiUser className="text-xl" />
                                    <p className="text-sm font-medium">Login</p>
                                </div>
                            </Link>
                            <Link href={"/signin"} className=" border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
                                <div className="flex gap-2 justify-center items-center ">
                                    <FiUserPlus className="text-xl " />
                                    <p className="text-sm font-medium">Sign In</p>
                                </div>
                            </Link>
                        </div>
                    }

                    {/* <form onSubmit={(e) => handleSearch(e)} className="flex relative items-center border rounded-md">
                    <input type="search" ref={inputRef} placeholder="Search something!!" className="w-auto p-1  rounded-md transition font-light  outline-none text-gray-500 focus:text-black" />
                </form>  */}
                </div>
            )}
            <MobileNavbar  loginState={loginState} handleLogout={handleLogout} />
            {/* onSubmit={(e) => handleSearch(e)} 
            <form onSubmit={(e) => handleSearch(e)} className="flex gap-2 items-center border rounded-md md:hidden mx-4 mt-1">
                <MdSearch className="text-2xl ml-2" />
                <input type="search" onChange={updateText} placeholder="Search something!!" className="w-auto p-1  rounded-md transition font-light  outline-none text-gray-500 focus:text-black" />
            </form>*/}

        </header >
    )
}

export default Navbar