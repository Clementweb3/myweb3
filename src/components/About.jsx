import React from 'react'


const About = () => {

  const datas = [
    {
      id:1,
      skills:"Tailwind",
      width:"w-[36%]",
      percent:"36%"
    },
    {
      id:2,
      skills:"Blender",
      width:"w-[40%]",
      percent:"40%"
    },
    {
      id:3,
      skills:"Javascript",
      width:"w-[40%]",
      percent:"40%"
    },
    {
      id:4,
      skills:"React",
      width:"w-[35%]",
      percent:"35%"
    },
    {
      id:5,
      skills:"Solidity",
      width:"w-[30%]",
      percent:"30%"
    }
  ]

  return (
    <section id='About' className="flex md:flex-row flex-col sm:py-16 py-6 text-white lg:h-screen w-full mt-[50px] ">
      <div className={`max-w-screen-lg  flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 mx-auto`}>
          <div className="w-full">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  mb-9 border-b-4 py-2 border-gray-500 leading-9">About Me</h1>    
          </div>
        <div className='grid  mx-auto gap-8 items-start  '>
          <div className='w-full '>  
            <p className="md:text-[20px] text-[16px] text-gray-300  font-normal md:max-w-[80%] ">I love anime particularly <span className='text-gradient'>Demon Slayer and Jujutsu Kaisen</span> .Love watching <span className='text-gradient'>Game of thrones and Vikings</span> too,such a good series.I also practice web devlopment and i aspire to be a <span className='text-gradient'>web3 developer </span> someday.Would love to learn together feel free to contact me.I currently learn and have knowledge on the following:
          </p>
          </div>

          <div className="">
            {
                datas.map(({id,skills,width,percent}) => {
                  return(
                    <div key={id} className="py-2 md:max-w-[80%]" >
                    <h5 className="flex justify-end line-height-[40px] font-bold md:text-xl text-[16px] text-white uppercase ">{skills}</h5>
                      <div className="bg-blue-gradient md:h-[16px] h-[13px] rounded-[20px] relative">
                        <div className={`absolute left-0 bottom-0 h-full rounded-[5px] bg-slate-100 ${width} `}>
                          <div className="absolute left-0 text-gradient top-[-26px] font-semibold line-height-[40px] md:text-xl text-[16px] ">
                          {percent}
                          </div>
                        </div>
                   </div>
                </div>
                  )

                })
              }

            </div>
          </div>

      </div>
    </section>
  )
}

export default About