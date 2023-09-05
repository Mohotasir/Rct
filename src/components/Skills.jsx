import Headsection from "./HeadTitle";
import IconSec from "./SkillIcon";
import {GiSkills} from "react-icons/gi";
import {SiHtml5,
        SiCss3,
        SiWordpress,
        SiReact,
        SiMongodb
     } from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import {TbBrandNextjs} from "react-icons/tb";


 export default function Skill(){
    
    return(
        <section className="bg-[#0a192f] py-24 text-gray-300 grid ">
            <div className="max-w-5xl  justify-self-center">
                <div className="">
                    <div className="pb-10 sm:pb-0">
                        <Headsection icon= {<GiSkills size={30} color="tomato" className="mr-3" />} name="SKILLS"/>
                    </div>
                    <div className="text-center">
                        <p className="px-4  font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non nisi perspiciatis unde eius veniam ea enim inventore autem ipsa, aspernatur blanditiis, numquam cumque eaque mollitia aperiam nostrum, quas commodi.</p>  
                    </div>
                    <div   className="grid grid-rows-4 grid-flow-col gap-4 pl-5 pt-12 sm:grid-rows-3 sm:gap-3 lg:grid-rows-2  sm:place-content-between ">
                      <IconSec icon={<SiHtml5 size={50}  color="RGB(254,87,34)" />} name="HTML" level="Expert" />
                      <IconSec icon={<SiCss3 size={50} color="RGB(33,150,243)" />} name="CSS" level="Expert" />
                      <IconSec icon={<DiJavascript1 size={50} color="RGB(239,216,29)" />} name="JAVA SCRIPT" level="Expert" />
                      <IconSec icon={<SiReact size={50} color="RGB(83,191,220)" />} name="REACT" level="Intermidiate" />
                      <IconSec icon={<FaNodeJs size={50} color="RGB(61,131,60)" />} name="NODE JS" level="Beginner" />
                      <IconSec icon={<SiMongodb size={50} color="RGB(63,146,48)" />} name="MONGODB" level="Beginner" />
                      <IconSec icon={<SiWordpress size={50} color="RGB(83,191,220)" />} name="WORDPRESS" level="Intermidiate" />
                      <IconSec icon={<TbBrandNextjs size={50} color="RGB(0,0,0)" />} name="NEXT JS" level="Beginner" />


                    </div>
                    
                </div>
            </div>
        </section>
    )
}