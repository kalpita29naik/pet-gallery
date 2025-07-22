import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<div>
			<nav aria-label="Main Navigation" className="flex justify-between items-center p-4 flex-wrap">
				<Logo />
				<div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`font-bold font-Delius text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 ${isActive ? "underline text-black" : ""
							}`}
					// className="font-bold  font-Delius text-base sm:text-lg md:text-xl lg:text-2xl"
					>
						Home
					</NavLink>
					<NavLink to="/gallery" className={({ isActive }) =>
						`font-bold font-Delius text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 ${isActive ? "underline text-black" : ""
						}`}>Gallery</NavLink>
					<NavLink to="/about-us" className={({ isActive }) =>
						`font-bold font-Delius text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 ${isActive ? "underline text-black" : ""
						}`}>About Us</NavLink>
				</div>
			</nav>
		</div>
	)


}

export default Nav;