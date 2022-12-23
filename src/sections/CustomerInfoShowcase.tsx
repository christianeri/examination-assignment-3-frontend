import React from 'react'
import InfoCard from '../components/InfoCard'

const CustomerInfoShowcase = () => {
  return (
      <section className='customer-info-showcase'>
            <div className='container-wide'>
                  <h3 className='section-title'>Our Speciality</h3>
            </div>
            <div className='container-wide customer-info-container'>
                  <InfoCard title='Make a Return'/>
                  <InfoCard title='Track Your Order'/>                            
                  <InfoCard title='Request a Price Adjustment'/> 
            </div>
            <div className='carousel-container'>
                  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                              <div className="carousel-item active">
                                    <InfoCard title='Track Your Order'/>
                              </div>
                              <div className="carousel-item">
                                    <InfoCard title='Make a Return'/>
                              </div>
                              <div className="carousel-item">
                                    <InfoCard title='Request a Price Adjustment'/> 
                              </div>
                        </div>
                  </div>
            </div>

      </section>
  )
}

export default CustomerInfoShowcase