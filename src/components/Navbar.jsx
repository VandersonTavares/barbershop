
import left from "../assets/img/left-stripe.png";
import right from "../assets/img/right-stripe.png";
import logo from "../assets/img/logo-center.png";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-center">
      <div className="nav-container px-10 h-[200px] uppercase text-white font-bold ">
        <div className="left flex">
          <div className="left-img mr-10 w-20">
            <img src={left} alt="left-stripe"/>
          </div>
          <ul className="flex gap-6">
            <li className="hover:text-[#88521a] hover:underline" >
              <a href="#">História</a>
            </li>
            <li className="hover:text-[#88521a] hover:underline">
              <a href="#">Serviços</a>
            </li>
          </ul>
        </div>
        <div className="image w-96 mt-8">
          <img src={logo} alt="center-logo" />
        </div>
        <div className="right flex">
          <ul className="flex gap-6">
            <li className="hover:text-[#88521a] hover:underline">
              <a href="#">Time</a>
            </li>
            <li className="hover:text-[#88521a] hover:underline">
              <a href="#">Contato</a>
            </li>
          </ul>
          <div className="left-img ml-10 w-20">
            <img src={right} alt="right-stripe" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
