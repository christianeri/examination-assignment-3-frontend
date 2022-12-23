
import ItemRating from './ItemRating'

import { NavLink } from 'react-router-dom'
import { ProductItem } from '../models/ProductModels'
import { useShoppingCartContext, IShoppingCartContextType } from '../contexts/ShoppingCartContext'


interface LocalProps {
     orientation: string
     item: ProductItem
}


const ProductCard: React.FC<LocalProps> = ({orientation, item}) => {

     const { incrementQuantity } = useShoppingCartContext() as IShoppingCartContextType

  return (

     <div className='card'>
          <div className={`${orientation}-card`}>
               <div className='card-img'>
                    <img src={item.imageName} alt={item.name}/>
               </div>               
               <div className='card-overlay'></div>
               <ul className='card-overlay-menu'>
                    <li>
                         <button className="nav-button nav-button-small">
                              <i className="fa-regular fa-heart"></i>        
                         </button>
                    </li>
                    <li>
                         <button className="nav-button nav-button-small">
                              <i className="fa-regular fa-code-compare"></i>
                         </button>
                    </li>
                    <li>
                         <button className="nav-button nav-button-small" 
                         onClick={() => incrementQuantity(
                              {articleNumber: item.articleNumber, product: item, quantity: 1})}>
                              
                              <i className="fa-regular fa-bag-shopping"></i>  
                         </button>
                    </li>
               </ul>
               {/* <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`}> */}
               <NavLink to={`/product/${item.articleNumber}`}>
                    <button className='fixxo-button button-theme'>quick view</button>
               </NavLink>
               
               <div className="card-body">
                    <div>
                         <h5 className='card-category' id="product-category">{item.category}</h5>                         
                         <h4 className="card-title">{item.name}</h4>
                    </div>
                    <div>
                         <ItemRating itemRating={item.rating}/>
                         <span>
                              {/* <h3 className="card-previous-price br">
                              {item.previousPrice}
                              </h3> */}

                              <h3 className="card-price">
                              €{item.price}
                              </h3>
                         </span>
                    </div>
               </div>
          </div>
     </div>

  )
}

export default ProductCard