import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FcBusinessman} from "react-icons/fc";
import Headsection from "./HeadTitle";
export default function About(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="w-full  bg-[#0a132f] text-gray-300 flex justify-center align-center sm: py-14">
            <div className="flex justify-center items-center  h-full py-9 rounded-md bg-gradient-to-r from-emerald-800 to-emerald-00 w-4/6 sm:py-16 ">
             <div className="">
                   <Headsection icon={<FcBusinessman size={30} />} name = "ABOUT" />
                 <div className="flex flex-wrap flex-col py-3  md:flex-row align-center justify-center px-10 py-12">
                    <div className="flex  justify-center w-full md:w-5/12" data-aos="fade-right" data-aos-duration={1000}>
                        <p className="pl-4 text-xl font-sans sm:text-2xl">HI ! I am Tahsin.<br></br>work as a frontend web developer . I am expert in javascript and node js</p>
                    </div>
                    <div className=" py-4  md:w-1/12"></div>
                    <div className=" flex  w-full md:w-5/12 ">
                        <div className="  shadow-2xl shadow-emerald-900 rounded-2xl px-3 py-5 mr-4 "data-aos="fade-left" data-aos-duration={1000}>
                            <h2 className="text-4xl  sm:text-5xl font-sans font-bold">2+</h2>
                            <p className="font-sans">YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="shadow-2xl shadow-emerald-900 rounded-2xl px-3 py-5"data-aos="fade-left" data-aos-duration={1500}>
                            <h2 className="text-4xl sm:text-5xl font-sans font-bold">10+</h2>
                            <p className="font-sans">PROJECTS COMPLETED </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}