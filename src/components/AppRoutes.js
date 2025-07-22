import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import PetPage from "./PetPage";

function AppRoutes() {
 return (

  <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path="/about-us" element={<AboutUs />} />
   <Route path="/gallery" element={<Gallery />} />
   <Route path="/petPage/:id" element={<PetPage />} />
  </Routes>

 );
}

export default AppRoutes;
