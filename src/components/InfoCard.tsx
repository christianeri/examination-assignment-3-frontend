import React from 'react'
import { NavLink } from 'react-router-dom'

interface LocalProps {
     title:string
}

const InfoCard: React.FC<LocalProps> = ({title}) => {
  return (
      <div className='infocard'>
            <div className='left'>
                  <div className='infocard-textbox'>
                        <h3>{title}</h3>                              
                        <NavLink className='_NavLink' to="/info/*" end>
                              <h4>
                                    Get Started<i className="fa-solid fa-chevron-right"></i>
                              </h4>
                        </NavLink>
                  </div>
            </div>
            <div className='right'>
            </div>               
      </div>
  )
}

export default InfoCard