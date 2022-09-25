import React  from 'react'
import {FaHome} from "react-icons/fa"
import {HiIdentification} from "react-icons/hi"
import {AiFillFolderOpen,AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import {IoMdContacts} from "react-icons/io"
import {Link} from "react-scroll"
import { useState } from "react"


const Navbar = () => {

  const links = [
    {
      id:1,
      link:<FaHome size={30}/>,
      attr:"Hero",
      
    },
    {
      id:2,
      link:<HiIdentification size={30}/>,
      attr:"About"
    },
    {
      id:3,
      link:<AiFillFolderOpen size={30}/>,
      attr:"Art"
    },
    {
      id:4,
      link:<IoMdContacts size={30}/>,
      attr:"Contact"
    },

  ]
  
  const [nav,setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav)
  }

  return (


    <nav className='text-white md:w-max md:transform md:translate-x-[-50%] md:left-[50%]  items-center  bg-black-gradient border  z-[2]  m-2 md:m-0 right-0 fixed  md:bottom-[32px]  gap-2 md:rounded-[38px]  md:flex  '>

        
      <ul className='list-none md:flex hidden  md:justify-end md:items-center md:p-1  md:px-9 md:py-2 '>
        {
          links.map(({id,link,attr}) => {
            return(
              <li   key={id} className={`font-normal cursor-pointer text-xl text-gray-200  mx-1  ${link.length === id - 1 ? "mr-0" : "md:mr-8 mr-5"} navstyle  p-[13px] md:rounded-[50%]`}>
                <Link activeClass="active" to={attr} spy={true} smooth={true} duration={500}>{link}</Link>
         
              </li>
            )
          })
        }
      </ul>
        
      <div onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
    
      </div>


      <div className={nav ? 'fixed left-0 top-0 w-[50%] border-r border-r-gray-900 bg-black-gradient ease-in-out duration-500' : "fixed left-[-100%] "}>

        <ul className='p-4 uppercase md:hidden  '>
          <li className='p-4 border-b'><Link activeClass="active" to="Hero" spy={true} smooth={true} duration={500}>Home</Link></li>
          <li className='p-4 border-b'><Link activeClass="active" to="About" spy={true} smooth={true} duration={500}>About</Link></li>
          <li className='p-4 border-b'><Link activeClass="active" to="Art" spy={true} smooth={true} duration={500}>Art</Link></li>
          <li className='p-4 border-b'><Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    

    </nav>
  )
}

export default Navbar