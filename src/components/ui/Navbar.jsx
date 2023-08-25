/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import {
  BiDotsHorizontalRounded,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoMedium,
  BiLogoPinterestAlt,
  BiLogoTwitter,
  BiLogoVimeo,
} from 'react-icons/bi';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setDown] = useState(false);

  const handleDropDown = () => {
    setDown(!isDown);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-main py-1  md:w-full h-[56px] flex items-center">
      <div className="flex items-center w-full justify-between">
        <div className=" cursor-pointer ">
          {' '}
          <img src={logo} alt="" className="h-[14px]" />
        </div>
        <div>
          {' '}
          <div className="md:hidden ">
            <button
              className="text-white focus:outline-none cursor-pointer"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4 ">
            <div className="hidden md:flex space-x-4 border-r border-menuColor">
              <ul className="flex  items-center text-menuColor">
                <li className=" mx-[10px] cursor-pointer ">
                  <a className=" text-[15px]  hover:text-dropDownHover">
                    Explore
                  </a>
                </li>
                <li className="mx-[10px] cursor-pointer">
                  <a className=" text-[15px]  hover:text-dropDownHover">
                    Discover
                  </a>
                </li>
                <li className="mx-[10px] cursor-pointer">
                  <a className=" text-[15px]  hover:text-dropDownHover">
                    For Professionals
                  </a>
                </li>
                <li className="mx-[10px] cursor-pointer">
                  <BiDotsHorizontalRounded
                    className=" text-[15px]  hover:text-dropDownHover"
                    onClick={handleDropDown}
                  ></BiDotsHorizontalRounded>
                  {isDown && (
                    <div className="absolute w-[218px] top-[45px] right-[15%] text-black bg-dropDown my-2  z-10">
                      <ul class=" text-[15px]  hover:text-dropDownHover  text-dropDownText">
                        <li className="hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover "
                          >
                            About Click Motto
                          </a>
                        </li>

                        <li className="hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover "
                          >
                            Pricing
                          </a>
                        </li>
                        <li className="hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover "
                          >
                            License
                          </a>
                        </li>
                        <li className="hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover "
                          >
                            Partnerships
                          </a>
                        </li>
                        <li className="hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover "
                          >
                            Help
                          </a>
                        </li>
                        <li className="border-b border-dropDownText hover:bg-dropDownHover p-2">
                          <a
                            href="#"
                            className=" text-[15px]  hover:text-dropDownHover "
                          >
                            Join The Team
                          </a>
                        </li>
                      </ul>
                      <ul className="flex justify-around items-center my-2">
                        <li className="bg-buttonColor  rounded-full">
                          <a href="#">
                            <BiLogoFacebook></BiLogoFacebook>
                          </a>
                        </li>
                        <li className="bg-buttonColor rounded-full">
                          <a href="#">
                            <BiLogoTwitter></BiLogoTwitter>
                          </a>
                        </li>
                        <li className="bg-buttonColor rounded-full">
                          <a href="#">
                            <BiLogoInstagram></BiLogoInstagram>
                          </a>
                        </li>
                        <li className="bg-buttonColor rounded-full">
                          <a href="#">
                            <BiLogoPinterestAlt></BiLogoPinterestAlt>
                          </a>
                        </li>
                        <li className="bg-buttonColor rounded-full">
                          <a href="#">
                            <BiLogoMedium></BiLogoMedium>
                          </a>
                        </li>
                        <li className="bg-buttonColor rounded-full">
                          <a href="#">
                            <BiLogoVimeo></BiLogoVimeo>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="mx-[10px] cursor-pointer">
                  <button className="px-5 py-1 text-center border rounded-md border-menuColor   text-[15px]  hover:text-dropDownHover">
                    Submit Photos
                  </button>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex space-x-4 ">
              <ul className="flex  items-center text-[15px]  hover:text-dropDownHover text-menuColor">
                <li className="mx-[10px] cursor-pointer">
                  <a className=" text-[15px]  hover:text-dropDownHover">
                    Login
                  </a>
                </li>
                <li className="mx-[10px]">
                  <button className="px-5 py-1 text-center bg-buttonColor border border-blue-600 text-white rounded-md">
                    Join Free
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-[56px] left-0 right-0 bg-white">
            <ul className="flex flex-col items-center space-y-2">
              <li className="py-2">
                <a className="text-menuColor">Explore</a>
              </li>
              <li className="py-2">
                <a className="text-menuColor">Discover</a>
              </li>
              <li className="py-2">
                <a className="text-menuColor">For Professionals</a>
              </li>
              <li className="mx-[10px] cursor-pointer relative">
                <BiDotsHorizontalRounded
                  className="text-[15px]"
                  onClick={handleDropDown}
                />
                {isDown && (
                  <div className="absolute w-[108px] top-[10px] left-[60%] md:w-[218px] md:top-[45px] md:right-[15%] text-black bg-dropDown my-2 z-10">
                    <ul className=" text-dropDownText">
                      <li className="hover:bg-dropDownHover p-2">
                        <a href="#" className="text-[15px]">
                          About Click Motto
                        </a>
                      </li>
                      <li className="hover:bg-dropDownHover p-2">
                        <a
                          href="#"
                          className=" text-[15px]  hover:text-dropDownHover "
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="hover:bg-dropDownHover p-2">
                        <a
                          href="#"
                          className=" text-[15px]  hover:text-dropDownHover "
                        >
                          License
                        </a>
                      </li>
                      <li className="hover:bg-dropDownHover p-2">
                        <a
                          href="#"
                          className=" text-[15px]  hover:text-dropDownHover "
                        >
                          Partnerships
                        </a>
                      </li>
                      <li className="hover:bg-dropDownHover p-2">
                        <a
                          href="#"
                          className=" text-[15px]  hover:text-dropDownHover"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="hover:bg-dropDownHover p-2">
                        <a
                          href="#"
                          className=" text-[15px]  hover:text-dropDownHover "
                        >
                          Help
                        </a>
                      </li>
                      <li className="border-b border-dropDownText hover:bg-dropDownHover p-2">
                        <a
                          href="#"
                          className=" text-[15px]  hover:text-dropDownHover "
                        >
                          Join The Team
                        </a>
                      </li>
                    </ul>
                    <ul className="flex-column items-center my-2">
                      <ul className="flex flex-wrap justify-center items-center my-2">
                        <li className="">
                          <a href="#">
                            <BiLogoFacebook className="text-white" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <BiLogoTwitter className="text-white" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <BiLogoInstagram className="text-white" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <BiLogoPinterestAlt className="text-white" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <BiLogoMedium className="text-white" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <BiLogoVimeo className="text-white" />
                          </a>
                        </li>
                      </ul>
                      {/* Add the rest of the social icons */}
                    </ul>
                  </div>
                )}
              </li>

              <li className="py-2 border-b border-menuColor">
                <a className="text-menuColor">Join The Team</a>
              </li>
            </ul>

            <ul className="flex justify-center items-center space-x-4 my-4">
              <li>
                <a className="px-5 py-1 border rounded-md border-menuColor text-menuColor text-[15px]  hover:text-dropDownHover">
                  Submit Photos
                </a>
              </li>
              <li>
                <button className="px-5 py-1 bg-buttonColor border border-blue-600 text-white rounded-md">
                  Join Free
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
