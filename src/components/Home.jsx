import { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import "../App.css"
import Button from './Button';
import profile from '../assets/pp.png';  
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home(){
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return(
     <div name="home" className="home h-full w-full bg-[#0a132f] py-10  sm:py-20 " >
         <div  className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
         <div className='p-3 sm:p-none' data-aos="fade-right" data-aos-duration={1500}>
              <img src={profile} alt='tasin' className='rounded-full shadow-md shadow-emerald-900 max-w-xl mx-auto w-2/3  '></img>
           </div>
           <div className='flex flex-col  justify-center h-full'>
                <h2 className="text-3xl font-sans font-700 sm:text-5xl  font-700 text-white" data-aos="fade-left" data-aos-duration={2000}>
                Say Hi from <span className='font-sans '>TAHSIN,</span> <span className='tracking-widest md:animate-pulse text-green-400  border-b border-dotted border-green-500'>Frontend </span><br></br> Web Developer
                </h2>
                <div data-aos="fade-up"data-aos-duration={2000}>
                <p   className='text-gray-300 tracking-wide font-sans py-4 max-w-md'>
                      I have 3 years of experience in   web development.
                      Currently, I love to work on web application using technologies like
                      React, Tailwind, Next.js and Mongodb.
                </p>
                </div>

                <div data-aos="fade-up" data-aos-duration={2000}>
                <Button  name="Let's discuss" icon={<HiArrowNarrowRight className='ml-3' size={25}/>} />
            </div>
           </div>
           
        </div>
     </div>
 )
}