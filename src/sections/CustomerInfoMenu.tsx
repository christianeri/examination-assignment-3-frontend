import React from 'react'
import NavButton from '../components/NavButton'



const CustomerInfoMenu:React.FC = () => {
  return (
     <section className='customer-info-menu'>
          <div className='container'>
               <div className='infobox'>
                    <NavButton to='/customer-info/support' icon='fa-regular fa-headset' size='nav-button-big'/>
                    <div>
                         <h3>customer support</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </div>
               </div>
               <div className='infobox'>
                    <NavButton to='/customer-info/payment' icon='fa-regular fa-credit-card' size='nav-button-big'/>  
                    <div>
                         <h3>secure payment</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </div>                            
               </div>
               <div className='infobox'>
                    <NavButton to='/customer-info/delivery' icon='fa-solid fa-person-carry-box' size='nav-button-big'/>                                
                    <div>
                         <h3>free home delivery</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </div>
               </div>
               <div className='infobox'>
                    <NavButton to='/customer-info/returns' icon='fa-solid fa-rotate-left' size='nav-button-big'/>                               
                    <div>
                         <h3>30 day returns</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </div>
               </div>
          </div>
     </section> 
  )
}

export default CustomerInfoMenu