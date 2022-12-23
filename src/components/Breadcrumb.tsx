import React from 'react'
import { NavLink } from 'react-router-dom'

interface LocalProps {
     currentPage: string
}

const Breadcrumb: React.FC<LocalProps> = ({currentPage}) => {
  return (
     <div className='container'>
          <div className='breadcrumb'>
               <ul>
                    <li className='page previous-page'>
                         <NavLink to="/" end>
                              <h4>Home</h4>
                         </NavLink> 
                    </li>
                    <li className='separator'>
                         <h4>&nbsp;/&nbsp;</h4>
                    </li>
                    <li className='page current-page'>
                         <NavLink  to="/{currentPage}">
                              <h4>{currentPage}</h4>
                         </NavLink>
                    </li>
               </ul>
          </div>
     </div>
  )
}

export default Breadcrumb