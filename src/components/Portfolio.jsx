import Headsection from "./HeadTitle";
import {CgWebsite} from "react-icons/cg";
import {FiExternalLink} from "react-icons/fi";
import Button from "./Button";
import avatar from '../assets/project.png';
import avatar2 from '../assets/project2.png';
import avatar3 from '../assets/project3.png';
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
    {
        
        select: "jsProject",
        img : avatar ,
        title : "ISP webstie design",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident atque consequatur est perspiciatis assumenda modi cum maiores culpa dolor voluptatem!"
    },
    {
        
        select: "jsProject",
        img : avatar2 ,
        title : "ISP webstie design",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident atque consequatur est perspiciatis assumenda modi cum maiores culpa dolor voluptatem!"
    },
    {
       
        select: "jsProject",
        img : avatar3 ,
        title : "ISP webstie design",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident atque consequatur est perspiciatis assumenda modi cum maiores culpa dolor voluptatem!"
    },
    {
        
        select: "jsProject",
        img : avatar ,
        title : "ISP webstie design",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident atque consequatur est perspiciatis assumenda modi cum maiores culpa dolor voluptatem!"
    }
];
function Project({img , title , content}){
    return(
        <div className="flex flex-col  p-5 border rounded-md border-sky-950 mx-8 my-4 "data-aos="fade-up" data-aos-duration={1500}>
            <div className="px-2 max-h-40 overflow-hidden duration-300 hover:scale-125"><img src={img}></img></div>
            <div className=" px-2">
            <div className="pt-5">
                <h3 className="font-sans text-2xl text-emerald-300 font-700">{title}</h3>
            </div>
            <div>
                <p className="font-sans text-lg font-thin text-gray-400">{content}</p>
            </div>
            <div>
                <Button name="View Live Demo"  icon={<FiExternalLink className="ml-2" color="RGB(52,211,153)" size={25}/>} />
            </div>
            </div>
            
        </div>
    )
}
export default function Portfolio(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    //const [sel ,setSel] = useState();
    return(
        <div className="bg-[#0a132f] py-20 text-gray-300 grid  ">
            <div className=" justify-self-center max-w-5xl">
                <div> 
                     <Headsection icon={<CgWebsite size={30} color="tomato" className="mr-3"/>} name=" LATEST PROJECTs"/>
                     <div className="bg-[#0a102f] rounded-md">
                         <div className=" grid  grid-flow-col grid-rows-4 place-content-around   py-8 md:grid-rows-1 place-content-between  ">
                              <Button name="All Projects" />
                              <Button name="React Projects" />
                              <Button name="Wordpress Projects" />
                              <Button name="Javascript Projects" />

                            </div>
                          <div className=" py-2 grid grid-flow-col grid-rows-4 md:grid-rows-2 place-content-around">
                            {projectData.map(({img , title ,content,})=>(
                              
                                <Project  img = {img} title = {title} content = {content} />
                                
                            ))}
                                
                         </div>
                         
                     </div>
                </div>
            </div>
        </div>
    );
}