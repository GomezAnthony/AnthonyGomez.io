import { React, useState } from "react";
import logo from "../../assets/animoji-logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Buttons/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between w-[90%] m-auto">
          <div>
            <img className="h-28" src={logo} alt="Animoji Logo" />
          </div>
        {/* Display hidden on small devices and anything that is 700px and above, dsiplay flex */}
          <div className="hidden md:flex md:justify-evenly md:items-center  ">
              <Link className="text-lg p-4 uppercase text-black font-regular" to="/">
                Home
              </Link>
              <Link className="text-lg p-4 uppercase text-black font-regular" to="/">
                Work
              </Link>
              <Link className="text-lg p-4 uppercase text-black font-regular" to="/">
                Skills
              </Link>
              <Button label="Resume" />
            </div>
          <div onClick={openNavClick} className="block md:hidden">
            {!isOpen ? (
              <FaBars className="text-3xl text-black cursor-pointer" />
            ) : (
              <FaTimes className="text-3xl z-10 text-black cursor-pointer" />
            )}
          </div>
        </div>
        <div
          className={
            isOpen
              ? "h-screen fixed left-14 w-[100%] bg-black ease-in-out duration-500 z-10"
              : " fixed left-[100%] ease-out duration-500"
          }
        >
          <div className="h-96">
            <div className="flex flex-col items-center justify-between my-32 h-full">
              <Link className="text-2xl uppercase text-white font-regular" to="/">
                Home
              </Link>
              <Link className="text-2xl uppercase text-white font-regular" to="/">
                Work
              </Link>
              <Link className="text-2xl uppercase text-white font-regular" to="/">
                Skills
              </Link>
              <Button label="Resume" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*

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

             className={
              isOpen
                ? "h-screen fixed left-20 w-[100%] bg-tertiary-color ease-in-out duration-500"
                : " fixed left-[100%] ease-out duration-500"
            }
          >

*/
