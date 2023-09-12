import { useState } from "react"
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
export default function Nav(){
  const [nav,setnav] = useState(false);
  const [isactive,setisactive] = useState(false);
  function handleLiClick(){
    setisactive(!nav);
  }
  function handleClick(){
      setnav(!nav);
  }
    return(
        <div className=" z-10  w-full h-[70px] flex justify-between items-center px-4 bg-[#0a132f]  ">
            <div>
                <h2 className="font-semibold text-2xl  font-sans text-emerald-600 italic ">TAHSIN</h2>
            </div>
            <ul className='hidden font-sans md:flex gap-x-8 text-stone-100 text-md py-5'>
                <li className=" border duration-150 border-blue-900 rounded-full bg-emerald-800 duration-300 hover:border-[#0a192f] ">
                   
                    <Link to="home" smooth = {true} duration={500}>Home</Link>
                </li>
                <li className="border  border-blue-900 rounded-full hover:bg-emerald-800 duration-300 hover:border-[#0a192f] ">
                    <Link to="about" smooth = {true} duration={500}><a >About</a></Link>
                </li>
                <li className="border  border-blue-900 rounded-full hover:bg-emerald-800 duration-300 hover:border-[#0a192f]"> 
                    <Link to="skills" smooth = {true} duration={500}>Skills</Link>
                </li>
                <li className="border  border-blue-900 rounded-full hover:bg-emerald-800 duration-300 hover:border-[#0a192f]">
                    <Link to="works" smooth = {true} duration={500}>Work</Link>
                </li>
                <li className="border  border-blue-900 rounded-full hover:bg-emerald-800 duration-300 hover:border-[#0a192f]">
                    <Link to="contact" smooth = {true} duration={500}>Contact</Link>
                </li>
            </ul>
            {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 text-stone-100'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-stone-100 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="md:flex hidden fixed flex-col left-0 top-[40%]">
         <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-800  rounded-lg ">
                <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/mohotasir-al-mamun-243736255/'>
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border border-md border-blue-900 rounded-lg">
                <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/talukder.tasin.3'>
                    Facebook <FaFacebook size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-800  rounded-lg">
                <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Mohotasir'>
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border border-blue-900 rounded-lg">
                <a className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/#inbox'>
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
         </ul>
      </div>
        </div>
    );
}