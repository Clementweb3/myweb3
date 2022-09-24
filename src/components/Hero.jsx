import React from 'react'
import style from"../styles"
import Me from "../Me"
import { Canvas } from '@react-three/fiber'
import Box from "../components/Box"
import Box2 from './Box2'
import Typed from "react-typed"


const Hero = () => {
  return (
    <div id='Hero' name="Hero" className="text-slate-200  mt-[80px] lg:h-screen w-full ">
      <div className={`${style.container} relative `}>
        <div className="flex flex-col justify-center h-full w-full md:pl-5">
          <h2 className="sm:text-[45px] lg:text-6xl text-3xl text-white md:leading-[75px] font-semibold py-3 ">Hello<span className='text-gradient'> Web3 </span> Citizens</h2>
          <Typed
          className='sm:text-4xl lg:text-5xl  text-[28px] font-semibold '
           strings={["I am Clement Fanai"]} typeSpeed={120}
          backSpeed={140}
          loop
          />
          <p className="text-gray-300 lg:text-3xl  text-2xl mt-5 ">Nice to meet you all. <br className='sm:block hidden' /></p>

          <div className='md:flex sm:flex-col mt-10'>


            <div className=" bg-blue-gradient
             rounded-md md:w-[300px]  w-[200px] md:m-0 mx-auto h-[10px] transform:rotate-[90deg] "/>
          
              {/* <button className="bg-gradient-to-tr from-dark-blue to-secondary-color rounded-md w-fit md:py-3 md:px-6 my-2 md:ml-3  py-2 px-4  md:text-2xl text-xl font-medium  hover:border hover:secondary-color hover:bg-none ">
                Download CV
              </button> */}
          </div>
        </div>


              <div className='hidden md:block sm:block '>

                <div className=' absolute right-7 top-20 md:h-[50px] md:w-[50px] bg-slate-100 rounded-full z-[-1]  blur-[1px] sm:w-[30px] sm:h-[30px]'/>

                <div className=' absolute left-0 top-[5px] md:h-[110px] md:w-[110px] bg-slate-100 rounded-full z-[-1] lg:block blur-[1px] md:hidden '/>
                <div className=' absolute lg:right-6 lg:top-[100px] sm:right-12 sm:top-[50px] lg:h-[400px]  z-[-1] lg:w-[400px] rounded-full bg-circle-gradient blur-[1px] sm:h-[280px] sm:w-[280px] animate move '/>
                                    
         
              </div>
    
              <div className='md:absolute lg:h-[450px] lg:w-[420px] md:w-[280px] h-[300px] lg:right-3 lg:top-20  sm:right-12 sm:w-[300px] w-[280px] sm:top-12 mx-auto '>
                <Canvas>        
                  <spotLight intensity={2}/>
                  <ambientLight intensity={0.8}/>
                  <pointLight intensity={2} position={[-1,1,3]} color="#01ffd5" />
                  <pointLight intensity={2} position={[1,1,3]} color="blue" />
                  <Me scale={1}/>
                  <Box position={[0, -0.7, -0.6]} scale={[0.7,0.4,1.8]} />
                  <Box2 position={[0.7, 1.8, 0]} scale={0.09} />
                </Canvas>
              </div>
      
      </div>
    </div>
  )
}

export default Hero