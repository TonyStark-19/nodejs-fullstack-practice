// react icons
import { IoMenu } from "react-icons/io5";

// Navbar component
export function Navbar({ setMenuOpen }) {
    return (
        <div className="bg-black p-4 fixed z-3 w-full border-b-2 border-white">
            <div className="max-lg:flex max-lg:flex-row-reverse max-lg:justify-between max-lg:items-center max-lg:gap-2">
                <button className="text-4xl text-white min-lg:hidden cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
                    <IoMenu />
                </button>

                <div className="text-3xl text-white font-semibold">Notes app</div>
            </div>
        </div>
    )
}