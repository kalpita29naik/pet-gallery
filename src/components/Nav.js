import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs"
import Gallery from "./Gallery"
import Logo from "./Logo";
import PetPage from "./PetPage";

function Nav() {
 return (
  <div>
   <nav className="flex flex-1 text-center items-center p-3 gap-5 sm:gap-6 md:gap-7 lg:gap-10">
    <div>
     <Logo />
    </div>


    <Link to="/" className="font-bold  font-Delius text-base sm:text-lg md:text-xl lg:text-2xl" >Home</Link>
    <Link to="/gallery" className="font-bold font-Delius text-base sm:text-lg md:text-xl lg:text-2xl">Gallery</Link>
    <Link to="/about-us" className="font-bold font-Delius text-base sm:text-lg md:text-xl lg:text-2xl">About Us</Link>


   </nav>

   <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/PetPage/:id" element={<PetPage />} />
   </Routes>
  </div>
 )


}

export default Nav;