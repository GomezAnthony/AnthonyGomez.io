import React from "react";
import logo from "../../assets/animoji-logo.png";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Buttons/Button";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openNavClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between w-[90%] m-auto px-5 animate-fade-in-down delay-150">
          <div>
            <img className="h-32" src={logo} alt="Animoji Logo" />
          </div>
          {/* <div onClick={openNavClick} className="flex">
            {!isOpen ? (
              <FaBars className="text-3xl text-secondary-color cursor-pointer" />
            ) : (
              <FaTimes className="text-3xl text-secondary-color cursor-pointer" />
            )}
          </div> */}
          <div>
             <Button label="Resume" />
          </div>
        </div>
        {/* <div
          className={
            isOpen
              ? "h-screen fixed left-20 w-[100%] bg-tertiary-color ease-in-out duration-500"
              : " fixed left-[100%] ease-out duration-500"
          }
        >
          <div className="h-96 w-[80%]">
            <div className="flex flex-col items-center justify-evenly h-full">
              <Link className="text-2xl uppercase text-primary-color" to="/">
                Home
              </Link>
              <Link className="text-2xl uppercase text-primary-color" to="/">
                Current projects
              </Link>
              <Link className="text-2xl uppercase text-primary-color" to="/">
                Twitch
              </Link>
              <Button label="Resume" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
