
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext, IShoppingCartContextType } from '../contexts/ShoppingCartContext'

import NavButton from '../components/NavButton'


const MainNavigation:React.FC = () => {

     let [colorWhite, setColorWhite] = useState(false)
     let changeColorWhite = () => {
          if (window.scrollY >= 1) {
               setColorWhite(true) 
          } else {
               setColorWhite(false)
          }
     }
     window.addEventListener('scroll', changeColorWhite)
     // console.log(window.scrollY);


     const { cartQuantity } = useShoppingCartContext() as IShoppingCartContextType

     const [showMenu, setShowMenu] = useState<boolean>(false)
     const toggleMenu = () => {
          setShowMenu(!showMenu)
     }


  return (
     <nav className={colorWhite ? 'top-navbar bg-white' : 'top-navbar'}>          
          <div className='container-wide'>
               <div className="left">
                    <NavLink className='._NavLink' to='/' end>
                         <h1 className="logo">Fixxo.</h1>
                    </NavLink>                    
               </div>
               <div  className='center'>
                         <NavLink className='_NavLink' to='/' end>
                              <h4>Home</h4>                              
                         </NavLink>
                         <NavLink className='_NavLink' to='/categories' end>
                              <h4>Categories</h4>                              
                         </NavLink>
                         <NavLink className='_NavLink' to='/products'>
                              <h4>Products</h4>                              
                         </NavLink>
                         <NavLink className='_NavLink' to='/contact' end>
                              <h4>Contact</h4>                              
                         </NavLink>
               </div>
               <ul className={!showMenu ? "mobile-menu invisible" : "mobile-menu"}>
                    <li>
                         <NavLink className='_NavLink' to='/' end>
                              <h4>Home</h4>
                         </NavLink>
                    </li>
                    <li>
                         <NavLink className='_NavLink' to='/categories' end>
                              <h4>Categories</h4>
                         </NavLink>
                    </li>
                    <li>
                         <NavLink className='_NavLink' to='/products' end>
                              <h4>Products</h4>
                         </NavLink>
                    </li>
                    <li>
                         <NavLink className='_NavLink' to='/contact'>
                              <h4>Contact</h4>
                         </NavLink>
                    </li>
               </ul>

               <div className="right">
                    <NavButton to='/search' icon='fa-regular fa-magnifying-glass' size='nav-button-small'/>
                    <NavButton to='/compare' icon='fa-solid fa-retweet' hideOnMobile={true} size='nav-button-small'/>
                    <NavButton to='/wishlist' icon='fa-regular fa-heart' hideOnMobile={true} size='nav-button-small'/>

                    <button className="nav-button nav-button-small" type='button' data-bs-toggle='offcanvas' data-bs-target='#shoppingCart' aria-controls='shoppingCart'>
                         <i className='fa-regular fa-shopping-cart'></i>

                         <div className="nav-button-badge">{cartQuantity}</div>
                    </button>

                    <button onClick={toggleMenu} className="nav-button triple-bar-button nav-button-small"><i className='fa-regular fa-bars'></i>
                    </button>
               </div>
          </div>
     </nav>
  )
}

export default MainNavigation