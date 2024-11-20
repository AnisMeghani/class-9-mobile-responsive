import Image from "next/image"
export default function Navbar(){
    return(
        <div>
            {/* parental navbar settings */}
            <nav className="flex bg-blue-200  w-full h-28 md:h-48 lg:h-40 gap-1">
                {/* logo image allignment */}
                <div className="text-center md:pt-1 w-6/12 h-2 lg:w-2/12 lg:pt-1 ">
                <Image 
                src="/logoimage.webp"
                alt="Logo"
                width={200}
                height={190} />
                </div>
            {/* adding text */}
                <div className=" text-blue-950 italic capitalize text-3xl font-semibold mt-5 md:text-6xl lg:w-full lg:text-7xl">GHULAM AND SONS ELECTRIC CENTRE</div>
            </nav>
        </div>
    )
}