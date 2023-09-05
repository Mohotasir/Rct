import { Link } from "react-scroll";
export default function Button({name,icon,}){

    return(
        <Link
                   
                   smooth
                   duration={500}
                   className="text-md font-light text-white  w-fit px-2 py-2 sm:px-6 text-xl font-sans  sm:py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-900 to-emerald-00  duration-300  shadow-sm shadow-black hover:shadow-gray-900 "
                    >
                    {name}
                   <span className="group-hover:scale-75 duration-300">
                       {icon}
                   </span>
                 </Link>
    )
}