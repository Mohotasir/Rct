import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function IconSec({icon,name,level}){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div data-aos="zoom-in" data-aos-duration={1000} className="px-8 py-5 mb-2 md:mb-12 shadow-2xl sm:w-52 font-sans rounded-lg ">
             <div className=" grid place-items-center">{icon}</div>
             <h4 className="text-center">{name}</h4>
             <p className="text-center italic text-emerald-300">{level}</p>
        </div>
        
    );
}