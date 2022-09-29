import React from 'react'

import Nezuko from "../assets/nezuko.png"
import Apocalypse from "../assets/apocalypse.png"
import Utopia from "../assets/utopia.png"
import Man from "../assets/man.png"
import Env from"../assets/env.png"
import Plastic from "../assets/plastic.png"
import Tanjiro from "../assets/tanjiro.png"
import Pi from "../assets/pi.png"

const Portfolio = () => {

  const datas = [
    {
      id:1,
      image:Nezuko,
      text:"3d Model Nezuko i created with Blender"
    },
    {
      id:2,
      image:Utopia,
      text:"My Ai generated art 'Utopia city'"
    },
    {
      id:3,
      image:Apocalypse,
      text:"My Ai generated art 'After Apocalypse'"
    },
    {
      id:4,
      image:Env,
      text:"Save environment art which I created with blender"
    },
    {
      id:5,
      image:Man,
      text:"My Ai generated art 'Man inside painting'"
    },
    {
    id:6,
    image:Plastic,
    text:"Plastic awareness art i created."
  },
  {
    id:7,
    image:Tanjiro,
    text:"Tanjiro 3d model i created with Blender"
  },
  {
  id:8,
  image:Pi,
  text:"Pi Network Metaverse City i created with Blender"
},

  ]


  return (
    <div id="Art" className='text-white w-full lg:mt-[100px] mt-[60px] '>
        <div className=" max-w-screen-lg mx-auto h-full flex flex-1 justify-center items-start flex-col xl:px-0 sm:px-16 px-6 ">
          <div className="pb-8 w-full   ">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold  mb-4 border-b-4 py-2 border-gray-500 leading-9 w-full">My Art</p>
            <p className="md:text-[20px] text-gray-300 text-[18px] leading-[30.8px]  font-normal md:max-w-[80%] ">Check out some of my art which i created <span className='text-gradient'>by myself and with AI</span> </p>
          </div>

  
         
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9 sm:px-0 mx-auto md:w-full w-[80%]">
            {
            datas.map(({id,image,text})=> {
              return(
               
                <div key={id} className='bg-black-gradient  hover:scale-110 transition rounded-lg h-full '>  
                  <img className='rounded-sm pointer-events-none ' src={image} alt=""/>
                    <div className='border p-2 h-[60px] '>         
                    <h1 className='text-white font-medium text-center text-[15px] w-full '>{text}</h1>
                    </div>

                  </div>
                            
                      )
                    })
                  }
            </div>
          </div>       
        
          </div>
        
    
  )
}

export default Portfolio