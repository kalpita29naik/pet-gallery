import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs"
import Gallery from "./Gallery"
import Logo from "./Logo";
import PetPage from "./PetPage";

function Nav() {
 return (
  <div>
   <nav className="flex flex-1 text-center gap-10 items-center mt-0">
    <div>
     <Logo />
    </div>


    <Link to="/" className="font-bold text-2xl font-Delius " >Home</Link>
    <Link to="/gallery" className="font-bold text-2xl font-Delius">Gallery</Link>
    <Link to="/about-us" className="font-bold text-2xl font-Delius ">About Us</Link>


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