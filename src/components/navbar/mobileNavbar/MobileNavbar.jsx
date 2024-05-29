import Link from "next/link";
import {
    MdHome,
    MdOutlineLogout,
    MdOutlineCategory,
    MdPerson,
    MdSearch,
    MdOutlineShoppingBasket,
    MdFavorite,
} from "react-icons/md";
import { FiUserPlus, FiUser } from "react-icons/fi";
import { useState } from "react";

const MobileNavbar = ({ loginState, handleLogout }) => {
    const [userMenuState, setUserMenuState] = useState(false);
    return (
        <nav className="block lg:hidden w-full capitalize">
            <div className=" text-center w-full pt-2 ">
                <Link className="text-xl  font-semibold" href={"/"}> nextStore</Link>
            </div>
            <div className="flex items-center justify-between gap-6 px-3">
                <form onSubmit={(e) => handleSearch(e)} className="flex gap-2 items-center border rounded-md  mt-1 w-full">
                    <MdSearch className="text-2xl ml-2" />
                    <input className="w-full p-1 rounded-md transition-all text-sm font-light outline-none text-gray-500 focus:text-black" type="search" placeholder="Search something!!" />
                </form>
                <button onClick={() => { setUserMenuState(!userMenuState) }} className="flex flex-col justify-center items-center ">
                    <MdPerson className="text-xl transition-all hover:text-primary-red" />
                    <p className="text-xs">Account</p>
                    {
                        userMenuState && (
                            loginState && (
                                <div className="absolute z-30 flex flex-col w-full mx-auto  gap-2  py-3  top-20 left-0 bg-white rounded-b-3xl border-b-2  border-black">
                                    <div className="flex gap-2 justify-center items-center" onClick={() => { handleLogout() }}>
                                        <MdOutlineLogout className="text-xl transition-all hover:text-primary-red" />
                                        <p className="text-xs">Exit account</p>
                                    </div>
                                </div>
                            )
                            || (
                                <div className="absolute z-50 flex justify-around  w-full py-3 top-20 left-0 bg-white rounded-b-3xl border-b-2  border-black">
                                    <Link href={"/login"} className="flex  justify-center items-center gap-2 w-auto ">
                                        <FiUser className="text-xl" />
                                        <p className="text-xs font-medium">Login</p>
                                    </Link>
                                    <Link href={"/signin"} className="flex gap-2 justify-center items-center w-auto">
                                        <FiUserPlus className="text-xl " />
                                        <p className="text-xs font-medium">Sign In</p>
                                    </Link>
                                </div>
                            )
                        )
                    }
                </button>
            </div >
            <div className="flex fixed bottom-0 left-0 z-50 w-full overflow-hidden gap-8 py-2 px-3 border-t-2 justify-between items-center capitalize bg-white  ">
                <Link
                    href={"/"}
                    className="flex flex-col justify-center items-center px-1"
                >
                    <MdHome className="text-xl " />
                    <p className="text-xs">Home</p>
                </Link>
                <Link
                    href={"/products"}
                    className="flex flex-col justify-center items-center px-1 w-min"
                >
                    <MdOutlineCategory className="text-xl " />
                    <p className="text-xs">Products</p>
                </Link>
                <Link
                    href={"/basket"}
                    className="flex flex-col  justify-center px-1  items-center"
                >
                    <MdOutlineShoppingBasket className="text-xl transition-all hover:text-primary-red" />
                    <p className="text-xs">basket</p>
                </Link>
                <Link
                    href={"/favorites"}
                    className="flex flex-col  justify-center px-1  items-center my-1"
                >
                    <MdFavorite className="text-xl transition-all hover:text-primary-red" />
                    <p className="text-xs">Favorites</p>
                </Link>
            </div>
        </nav >
    );
};

export default MobileNavbar;
// {(true && (
//     <div>

//         {/* <button onClick={() => handleLogout()}> */}
//         <button onClick={() => { setUserMenuState(!userMenuState) }} className="flex flex-col justify-center items-center px-2">
//             <MdPerson className="text-xl transition-all hover:text-primary-red" />
//             <p className="text-xs">Account</p>
//             {userMenuState &&
//                 (
//                     <div className="absolute z-30  flex flex-col w-full gap-2 p-2  -top-24 right-0 bg-gray-500 rounded-s-md">
//                         <div className="flex gap-2 justify-center ">
//                             <MdOutlineLogout className="text-xl transition-all hover:text-primary-red" />
//                             <p className="text-xs">Exit  account</p>
//                         </div>
//                     </div>
//                 )
//             }
//         </button>
//     </div>
// )) || (
//         <>
//             <Link
//                 href={"/login"}
//                 className="flex flex-col justify-center items-center"
//             >
//                 <div className="flex flex-col justify-center items-center ">
//                     <FiUser className="text-xl" />
//                     <p className="text-xs font-medium">Login</p>
//                 </div>
//             </Link>
//             <Link
//                 href={"/signin"}
//                 className="flex flex-col justify-center items-center"
//             >
//                 <div className="flex flex-col justify-center items-center ">
//                     <FiUserPlus className="text-xl " />
//                     <p className="text-xs font-medium">Sign In</p>
//                 </div>
//             </Link>
//         </>
//     )}
