import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#161616] text-base-content rounded">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> */}
      <div>
        <div className="grid grid-flow-col gap-4 ">
          <a href="https://www.instagram.com/barbearia_pontochick/" className="hover:text-white">
            <BsInstagram size={30}/>
          </a>
          <a href="#" className="hover:text-white">
          <BsFacebook size={30}/>
          </a>
          <a href="#" className="hover:text-white">
          <BsTwitter size={30}/>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Ponto Chick</p>
      </div>
    </footer>
  );
};

export default Footer;
