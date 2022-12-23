import React from 'react'
import Showcase_5 from '../img/img-5.svg'
import Showcase_6 from '../img/img-6.svg'
import FixxoButton from '../components/FixxoButton'

const SplitBanner = () => {
  return (

     <section className='split-banner d-none d-sm-flex'>
          <div className='container-wide'>
               <div className='left'>
                    <img src={Showcase_5} alt="silouette" className=''/>
                    <div className="banner-textbox">
                         <h2>Winter Clearance</h2>
                         <h2>Up to 70% Off!</h2>
                         <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.
                         </p>
                         <FixxoButton label='shop now' color='dark' to='/sale'/>
                    </div>
               </div>
               <div className='right'>
                    <img src={Showcase_6} alt="silouette"/>
                    <div className="banner-textbox">
                         <h2>New</h2>
                         <h2>Arrivals</h2>
                         <FixxoButton label='shop now' color='dark' to='/selected'/>
                    </div>
               </div>
          </div>
     </section>
  )
}

export default SplitBanner