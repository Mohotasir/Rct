import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "./Button";
import Headsection from "./HeadTitle";
import {
         FcMultipleInputs,
         FcCalendar,
         FcGraduationCap,
         FcAnswers
} from "react-icons/fc";
import {BsPersonGear} from "react-icons/bs";
export default function Resume(){
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const [active,setActive] = useState(false);
     function handleActiveClick(){
      
         setActive(!active);
       
     }
   return(
  
     <div  className="   bg-[#0a132f]  text-gray-300 grid  ">
        <div className="justify-self-center max-w-5xl">
            <div className="py-9 md:my-0">
                <Headsection icon={<BsPersonGear color="tomato" className="mr-3" size={30} />}  name="RESUME"/>
            </div>
          <div className="flex  justify-center align-center">
             <div className="px-2 sm:px-0 ">
              <ul className=" flex flex-col  sm:flex-row  md:space-x-24 mb-5 font-sans">
                 <li onClick= {active? !handleActiveClick : handleActiveClick } className={!active? "flex border  rounded-lg px-24 lg:px-32 py-3 border-blue-900 hover:bg-emerald-800 duration-500 hover:border-[#0a192f] ":"flex border rounded-lg px-24 lg:px-32 py-3  bg-emerald-800 duration-500 border-[#0a192f]"}> <FcGraduationCap className="mr-3" size={25} /> EDUCATION</li>
                 <li onClick={!active? !handleActiveClick : handleActiveClick} className={!active?" flex border rounded-lg px-24 lg:px-32 py-3  bg-emerald-800 duration-500 border-[#0a192f]":"flex border  rounded-lg px-24 lg:px-32 py-3 border-blue-900 hover:bg-emerald-800 duration-500 hover:border-[#0a192f] "}><FcMultipleInputs className="mr-3" size={25} /> EXPERICENE</li>
              </ul>
             </div>
          </div>
           <div className="">
           <div className="">
             <div className= {!active?'hidden': " education flex   flex-col  md:flex-row " } >
                  <div className="md:w-4/12 py-5 pl-9">
                      <p className=" font-sans  font-light text-md  sm:text-xl" data-aos="fade-right" data-aos-duration={1000}>
                         All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.
                      </p>
                        <div data-aos="fade-up" data-aos-duration={2000} className="mt-5">
                           <Button icon={<FcAnswers size={25} className=""/>} name="Download CV"  />
                        </div>
                      </div>
                      <div className="md:w-2/12"></div>
                      <div className="md:w-6/12 pl-9">
                         <div className="py-5  "data-aos="zoom-in" data-aos-duration={1000}>
                            <p className="flex pb-2 sm:pb-5 text-xl text-emerald-300"><FcCalendar size={25}/>January,2022 - Now</p>
                            <h2 className="font-sans pb-5 text-2xl">
                              B.Sc in Computer Science & Engineering
                            </h2>
                            <p className="text-gray-400 italic">UNIVERSITY OF ASIA PACIFIC</p>
                         </div>
                         <div className="py-5"data-aos="zoom-in" data-aos-duration={1500}>
                            <p className="flex pb-2 sm:pb-5 text-xl text-emerald-300"><FcCalendar size={25}/>January,2019 - 2021</p>
                            <h2 className=" pb-5 text-2xl font-sans">
                             Higher Secondary School Certificate
                            </h2>
                            <p className="text-gray-400 italic">CHATTOGRAM MODEL COLLEGE</p>
                         </div>
                      </div>

                  </div>
                  <div className={active?"hidden": "experience flex  flex-col md:flex-row  "}>
                    <div className="md:w-4/12 py-5 pl-9">
                      <p className="font-sans font-light text-md  sm:text-xl  " data-aos="fade-right" data-aos-duration={1000}>
                      I partner with startups, organizations and Fortune 500 companies to build digital products that help clients overcome challenges and create lasting connections with millions of people every day.                      </p>
                      <div data-aos="fade-up" data-aos-duration={2000} className="mt-5">
                           <Button icon={<FcAnswers size={25} className=""/>} name="Download CV"  />
                        </div>
                      </div>
                      
                      <div className="md:w-2/12"></div>
                      <div className="md:w-6/12 pl-9">
                         <div className="py-5  "data-aos="zoom-in" data-aos-duration={1000}>
                            <p className="flex pb-2  sm:pb-5 text-xl text-emerald-300"><FcCalendar size={25}/>January,2021 - Now</p>
                            <h2 className="font-sans pb-5 text-2xl">
                             Web Developer
                            </h2>
                            <p className="text-gray-400 italic text-xl">Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%.</p>
                         </div>
                         <div className="py-5"data-aos="zoom-in" data-aos-duration={1500}>
                            <p className="flex pb-2 sm:pb-5 text-xl text-emerald-300"><FcCalendar size={25}/>January,2019 - 2021</p>
                            <h2 className=" pb-5 text-2xl font-sans">
                            Junior Forntend Developer
                            </h2>
                            <p className="text-gray-400 italic text-xl">Leading a small team on a variety of development projects and delivering solutions to meet and exceed clients’ briefs.</p>
                         </div>
                      </div>

                  </div>
                  </div>
              </div>
           </div>
        </div>
    
   );
}