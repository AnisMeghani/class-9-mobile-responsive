import Image from "next/image";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FeaturedProducts />
    </div>
  );
}
