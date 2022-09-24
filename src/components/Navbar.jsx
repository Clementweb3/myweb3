import React from 'react'
import {FaHome} from "react-icons/fa"
import {HiIdentification} from "react-icons/hi"
import {AiFillFolderOpen} from "react-icons/ai"
import {IoMdContacts} from "react-icons/io"
import {Link} from "react-scroll"


const Navbar = () => {

  const links = [
    {
      id:1,
      link:<FaHome size={30}/>,
      attr:"Hero"
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


  // <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
  // <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
  // <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
  // <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
  // <li><Link  to="service" spy={true} smooth={true}>Service</Link></li>
  //   </ul>
  return (


    <nav className='text-white w-max transform translate-x-[-50%] left-[50%]  items-center bg-black-gradient border  z-[2] fixed  bottom-[32px]  gap-2 rounded-[38px]  flex'>

        
      <ul className='list-none flex justify-end items-center p-1  md:px-9 md:py-2'>
        {
          links.map(({id,link,attr}) => {
            return(
              <li   key={id} className={`font-normal cursor-pointer text-xl text-gray-200  mx-1  ${link.length === id - 1 ? "mr-0" : "mr-8"} hover:bg-black-gradient  p-[13px] rounded-[50%]`}>
                <Link activeClass="active" to={attr} spy={true} smooth={true} duration={500}>{link}</Link>
         
              </li>
            )
          })
        }
      </ul>
     

    </nav>
  )
}

export default Navbar