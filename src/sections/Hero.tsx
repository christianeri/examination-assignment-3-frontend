import heroLeft from '../img/hero-left-shadow.svg'
import heroRight from '../img/hero-right-shadow.svg'
import FixxoButton from '../components/FixxoButton'

const HeroShowcase: React.FC = () => {
     
  return (
     <div>
          <section className='hero-showcase'>
               <div className='container-wide'>
                    <img src={heroLeft} alt="female model" className='left'/>
                    {/* <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' alt="female model" className='left'/> */}
                    <div className='center'>
                         <h1>sale up</h1>
                         <h1>to 50% off</h1>
                         <p>Online shopping free home delivery over $100</p>
                         {/* <button className='__fixxo-button __button-theme'>shop now</button> */}
                         <FixxoButton label='shop now' color='theme' to='/sale'/>
                    </div>
                    <img src={heroRight} alt="female model" className='right'/>
                    {/* <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png' alt="female model" className='right'/> */}
               </div>
          </section>
     </div>
  )
}

export default HeroShowcase