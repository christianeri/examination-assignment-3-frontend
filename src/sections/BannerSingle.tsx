import React from 'react'
import FixxoButton from '../components/FixxoButton'

const SingleBanner = () => {
  return (

     <section className='single-banner'>
          <div className='container'>
               <div className='banner-textbox'>
                    <h2>Up to 70% off*</h2>
                    <p>Women's, Men's & Kids' Winter Fashion</p>
                    <FixxoButton label='flash sale' color='light' to='/sale'/>
               </div>
          </div>
     </section> 

  )
}

export default SingleBanner