export default function Headsection({icon ,name}){
    return(
     <div className="flex align-center justify-center sm:pb-10">
                        
        <p data-aos = "zoom-in" className=" flex tracking-tight  text-slate-400	font-sans  text-xl   inline border rounded-full py-1 px-5 sm:text-2xl ">
          {icon} {name}</p>
 
     </div>
    )
 }