// import Hero_2 from '../img/img-2.svg'
// import Hero_1 from '../img/img-1.svg'
import FixxoButton from '../components/FixxoButton'

const HeroShowcase: React.FC = () => {
     
  return (
     <div>
          <section className='hero-showcase'>
               <div className='container-wide'>
                    {/* <img src={Hero_2} alt="silouette" className='left'/> */}
                    <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' alt="female model" className='left'/>
                    <div className='center'>
                         <h1>sale up</h1>
                         <h1>to 50% off</h1>
                         <p>Online shopping free home delivery over $100</p>
                         {/* <button className='__fixxo-button __button-theme'>shop now</button> */}
                         <FixxoButton label='shop now' color='theme' to='/sale'/>
                    </div>
                    {/* <img src={Hero_1} alt="" className='right'/> */}
                    <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png' alt="female model" className='right'/>
               </div>
          </section>
     </div>
  )
}

export default HeroShowcase