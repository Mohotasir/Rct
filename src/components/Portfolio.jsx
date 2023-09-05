import Headsection from "./HeadTitle";
import {CgWebsite} from "react-icons/cg";
import Button from "./Button";
export default function Portfolio(){
    return(
        <div className="bg-[#0a192f] py-20 text-gray-300 grid  ">
            <div className=" justify-self-center max-w-5xl">
                <div> 
                     <Headsection icon={<CgWebsite size={30} color="tomato" className="mr-3"/>} name="PROJECTs"/>
                     <div>
                         <div className=" grid  grid-flow-col grid-rows-2 gap-2 md:grid-rows-1 place-content-between  ">
                              <Button name="ALL" />
                              <Button name="React Projects" />
                              <Button name="Wordpress Projects" />
                              <Button name="Java script Projects" />

                            </div>
                         <div>
                                
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
}