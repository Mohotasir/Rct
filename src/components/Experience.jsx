import { useState } from "react";
const accordionData = [
    {
      title: 'HTML',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'CSS',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'JAVASCRIPT',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },{
        title: 'REACT',
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`
      }
  ];
 function Accordion({title,content}){
    const [active, setActive] = useState(false);
      return(
        <div onClick={()=> setActive(!active)} className=" border border-green-800 rounded px-7 py-3">
            <div className="flex justify-between text-white text-lg font-bold  " >
              <div>
                 <h3 className="text-green-400">{title}</h3>
              </div>
              <div> 
                 <p className="font-bold text-3xl text-green-300 border border-green-800 px-2 rounded shadow-lg shadow-green-500/50">{active? '-' : '+'}</p>
              </div>
            </div>
            <div>
                {active && <p className="text-white">{content}</p>}
            </div>

        </div>
      )
 }
export default function Experience(){
      
    return(
       <div className="bg-[#0a192f] py-16 px-16">
          <div className="flex align-center justify-center text-white font-bold text-3xl">
               <p className="py-5">MY EXPERIENCES</p>
          </div>
          <div>
             {accordionData.map(({title,content})=>(
                <Accordion title={title} content={content}  />
             ))} 
             
          </div>
       </div>
    );
}

