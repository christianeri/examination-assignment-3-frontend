
import { useShoppingCartContext, IShoppingCartContextType } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'
import { CartItem } from '../models/ShoppingCartModels'


const ShoppingCart:React.FC = () => {

     const { cartItems } = useShoppingCartContext() as IShoppingCartContextType

  return (
     <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="shoppingCartLabel"><i className='fa-regular fa-shopping-cart'></i> Shopping Cart</h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            {
              cartItems.map(product => (<ShoppingCartItem key={product.articleNumber} item={product} />))
            }
        </div>
     </div>
  )
}

export default ShoppingCart