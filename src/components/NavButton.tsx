import React from 'react'
import { NavLink } from 'react-router-dom'

interface LocalProps {
     to:string
     icon:string
     size:string
     hideOnMobile?:boolean
}

const NavButton: React.FC<LocalProps> = ({to, icon, size, hideOnMobile}) => {
  return (
     <div className='nav-button-context'>
          <NavLink to={to} className={`${hideOnMobile ? "d-none d-md-flex" : ""}`} end>
               <button className={`nav-button ${size}`}>
                    <i className={icon}></i>
                    {/* <div className="nav-button-badge">{quantity}</div> */}
               </button>
          </NavLink>
     </div>
  )
}

export default NavButton