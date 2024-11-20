import Image from "next/image"

const FeaturedProducts= () => {
    return(
        <div>
            {/* allignment of led bulb */}
            <h1 className="text-xl mt-4 ml-5 font-bold lg:mt-10 lg:pl-8 underline lg:text-3xl">LED Bulbs</h1>
            {/* allignment of image 1 */}
        <div className="flex flex-col justify-around lg:flex-row">
        <div className="lg:w-5/12 w-full">
        <div className="flex justify-center mt-6">
                <Image 
                src="/led bulb 50W.jpeg"
                alt="50Watt Led Bulb"
                width={150}
                height={100} />
            </div>
            {/* setting price */}
            <p className="text-center font-semibold">50 Watt</p>
            <p className="text-center font-semibold">PKR-1250/=</p>
            {/* adding buy now button */}
            <div className="flex justify-center items-center">
            <button className="bg-blue-600 rounded-md px-6 py-1 text-white">Buy Now</button>
            </div>
            </div>
            {/* allignment of image 2 */}
            <div className="lg:w-5/12 w-full">

            <div className="flex justify-center mt-6">
            <Image 
                src="/led bulb 50W.jpeg"
                alt="40Watt Led Bulb"
                width={150}
                height={100} />
            </div>
            {/* setting price */}
            <p className="text-center font-semibold">40 Watt</p>
            <p className="text-center font-semibold">PKR-1050/=</p>
            {/* adding buy now button */}
            <div className="flex justify-center items-center">
            <button className="bg-blue-600 rounded-md px-6 py-1 text-white">Buy Now</button>
            </div>
            </div>
            {/* allignment of image 3 */}
            <div className="lg:w-5/12 w-full">
            <div className="flex justify-center mt-6">
                <Image 
                src="/led bulb 50W.jpeg"
                alt="30Watt Led Bulb"
                width={150}
                height={100} />
            </div>
            {/* setting price */}
            <p className="text-center font-semibold">30 Watt</p>
            <p className="text-center font-semibold">PKR-650/=</p>
            {/* adding buy now button */}
            <div className="flex justify-center items-center">
            <button className="bg-blue-600 rounded-md px-6 py-1 text-white">Buy Now</button>
            </div>
            </div>
            {/* allignment of image 4 */}
            <div className="lg:w-5/12 w-full">
            <div className="flex justify-center mt-6">
                <Image 
                src="/led bulb 50W.jpeg"
                alt="12Watt Led Bulb"
                width={150}
                height={100} />
            </div>
            {/* setting price */}
            <p className="text-center font-semibold">12 Watt</p>
            <p className="text-center font-semibold">PKR-250/=</p>
            {/* adding buy now button */}
            <div className="flex justify-center items-center">
            <button className="bg-blue-600 rounded-md px-6 py-1 text-white">Buy Now</button>
            </div>
            </div>

        </div>
        </div>
    )
} 
// exporting component
export default FeaturedProducts