import Headsection from "./HeadTitle";
import {BiPhoneCall} from "react-icons/bi";
import {BiCopyright} from "react-icons/bi";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="bg-[#0a132f] pt-12 grid">
            <div className="justify-self-center max-w-5xl pb-12">
                 <div>
                     <Headsection icon={<BiPhoneCall className="mr-2" color="tomato" size={30}/>}  name="LETs TALK"/>
                 </div>
                 <div className="flex items-center justify-center">
                    <p className="w-10/12 pt-4 text-lg font-sans text-gray-400 font-thin  md:w-9/12 pt-0 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur impedit perspiciatis, explicabo omnis atque fugit ratione repudiandae animi excepturi illo! Sint, obcaecati maxime. Rerum veritatis eos quo exercitationem nesciunt esse.</p>
                 </div>
                <div className="flex flex-col py-8 sm:flex-row">
                    <div className="text-gray-200 sm:w-6/12 px-2">
                        <p className="text-lg font-sans text-gray-500 "data-aos="fade-right" data-aos-duration={1000}>Get In Touch !</p>
                        <div className="py-4 bg-[#0a192f] rounded-lg my-4" data-aos="fade-up" data-aos-duration={1500}>
                            <p className="font-sans text-xl  pb-2 px-4">Phone :</p>
                            <p className="font-sans text-2xl px-4 font-thin text-gray-400">0123456789</p>
                        </div>
                        <div className="py-4 bg-[#0a192f] rounded-lg my-4"data-aos="fade-up" data-aos-duration={1500}>
                            <p className="font-sans text-xl  pb-2 px-4">Email :</p>
                            <p className="font-sans text-2xl px-4 font-thin text-gray-400">mohotasir1036@gmail.com</p>
                        </div>
                        <div className="py-4 bg-[#0a192f] rounded-lg my-4"data-aos="fade-up" data-aos-duration={1500}>
                            <p className="font-sans text-xl  pb-2 px-4">Address :</p>
                            <p className="font-sans text-2xl px-4 font-thin text-gray-400">Dhanmondi , Dhaka , Bangladesh.</p>
                        </div>
                    </div>
                    <div className=" px-4 sm:w-6/12">
                    <p className="text-xl font-sans text-gray-500 pb-2"data-aos="fade-right" data-aos-duration={1000}>Feel free to contact !</p>
                        <form className="flex flex-col "data-aos="fade-up" data-aos-duration={1500}>
                            <input className="my-2 p-3 rounded-md bg-[#0a102f] border border-gray-800  outline-none text-white text-lg font-sans " type="text" placeholder="Name"/>
                            <input className="my-2 p-3 rounded-md bg-[#0a102f] border border-gray-800 outline-none text-white text-lg font-sans" type="email" placeholder="Email"/>
                            <input className="my-2 p-3 rounded-md bg-[#0a102f] border border-gray-800 outline-none text-white text-lg font-sans" type="text" placeholder="Phone"/>
                            <textarea className="my-2 pb-8 pt-3 px-4 rounded-md bg-[#0a102f] border border-gray-800 outline-none text-white text-lg font-sans" placeholder="Message"></textarea>
                            <button className=" rounded text-white font-sans text-lg font-light py-2 bg-gradient-to-r from-emerald-900 to-emerald-00 duration-300 hover:shadow-gray-900 hover:scale-x-105 " type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center  py-2  text-gray-400 font-light font-sans text-md   border-t border-gray-800 ">
              <BiCopyright className="" size={20} />
              <p className="items-center"> All right reserverd by Tahsin</p>
            </div>
        </div>
    );
}