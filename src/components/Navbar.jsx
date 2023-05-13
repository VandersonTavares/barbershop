// import { useState } from "react";

import logo from "../assets/img/logo-center.png";

// import { HiOutlineBars4 } from "react-icons/hi2";

const Navbar = () => {
  
  // const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-bar w-screen flex justify-around sm:justify-around lg:hidden">
        <div className="w-80">
          <img src={logo} alt="" />
        </div>
        {/* <button className="button" onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <HiOutlineBars4 size={40} color="#88521a" />
        </button> */}
      </div>
      <div className="main-menu hidden lg:flex lg:justify-center lg:w-screen">
        <div className="main-nav flex items-center font-bold uppercase">
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:text-[#88521a]">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#88521a]">Historia</a>
            </li>
          </ul>
          <div className="center-logo w-80">
            <img src={logo} alt="" />
          </div>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:text-[#88521a]">Time</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#88521a]">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
