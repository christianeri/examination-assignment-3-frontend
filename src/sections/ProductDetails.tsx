
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { ProductItem } from '../models/ProductModels'
import { IShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'

import Breadcrumb from "../components/Breadcrumb"
import ItemRating from "../components/ItemRating"


interface LocalProps {
     item: ProductItem
}


const ProductDetails: React.FC<LocalProps> = ({item}) => {

     const { incrementQuantityCount } = useShoppingCartContext() as IShoppingCartContextType
     const [count, setCount] = useState(0)

     const Add = () => {
          Number(setCount(count + 1))
          
     }

     const Subtract = () => {
          if (count > 0) {
          Number(setCount(count - 1))
          } else {
               Number(setCount(0))
          }
     }
     console.log('value of count at ProductDetails: ' + count)

  return (
    <>
          {/* <Breadcrumb currentPage={`Product Details / ${item.name}`}/> */}
          <section className='product-details'>
               <div className="container d-flex justify-content-center">
                    <NavLink to='/sale' className='_NavLink'>
                         <button className="button-promo mx-3">Get 25% OFF at the Fixxo Selection - Shop Now!</button>
                    </NavLink>
               </div>
               <Breadcrumb currentPage={item.name}/>
                    <div className='container'>
                         <div className='row'>
                              <div className='col-sm'>
                                   <div className='row g-0'>
                                        <div className='col-12 p-3'>
                                        <img src={item.imageName} alt={item.name} className='img-lg'/>

                                        </div>
                                        <div className='row g-0'>
                                             <div className='col-4 p-3'>
                                             <img src={item.imageName} alt={item.name} className='img-sm'/>

                                             </div>
                                             <div className='col-4 p-3'>
                                             <img src={item.imageName} alt={item.name} className='img-sm'/>

                                             </div>
                                             <div className='col-4 p-3'>
                                             <img src={item.imageName} alt={item.name} className='img-sm'/>

                                             </div>
                                        </div>
                                        <div className='row p-3 g-0'>
                                             <div className='col tab tab-1'>
                                                  Description
                                             </div>
                                             <div className='col tab tab-2'>
                                                  Additional
                                             </div>
                                             <div className='col tab tab-3'>
                                                  Shopping & returns
                                             </div>
                                             <div className='col tab tab-4'>
                                                  Reviews
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-sm pt-3 right'>
                                   <div>
                                        <h3>{item.name}</h3>

                                             <span>Product category: {item.category}</span><span className="px-3">Article number: {item.articleNumber} </span>

                                        <div className="py-3">
                                             <ItemRating itemRating={item.rating}/>
                                        </div>
                                        <h3 className="card-price">€{item.price}</h3>
                                   
                                        <p className='py-3'>
                                             Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. 
                                             Unwilling departure education is be dashwoods or an. 
                                             Use off agreeable law unwilling sir deficient curiosity instantly. (read more)
                                        </p>
                                   </div>
                                   <div>
                                        <div className='row my-4'>
                                             <div className='left'>Size:</div>                                   
                                             <div className='right d-flex gap-2 g-0'>
                                                  <div className='size-value'>S</div>
                                                  <div className='size-value'>M</div>
                                                  <div className='size-value'>L</div>
                                                  <div className='size-value'>XL</div>
                                             </div>
                                        </div>
                                        <div className='row my-4'>
                                             <div className='left'>Color:</div>                                   
                                             <div className='right d-flex gap-2 g-0'>
                                                  <div className='color-value'>Choose an Option</div>
                                             </div>
                                        </div>

                                        <div className='row mt-4'>
                                             <div className='left'>Qty:</div>                                   
                                             <div className='item-quantity px-0'>
                                                  <button onClick={Subtract}>-</button>
                                                  <div className='center flex-center'>{count}</div>
                                                  <button onClick={Add}>+</button>
                                             </div>
                                             <button 
                                                  onClick={() => incrementQuantityCount({articleNumber: item.articleNumber, product: item, quantity: 1, count: count})} 
                                                  className='fixxo-button button-theme d-none d-lg-block'>Add to Cart</button>
                                        </div>

                                        <div className='row mt-3'>
                                             <div className='left'></div>                                   
                                             <button className='right fixxo-button button-theme d-lg-none'>Add to Cart</button>                                             
                                        </div>
                                        <div className='row my-4'>
                                             <div className='left'>Share:</div>                                   
                                             <div className="right d-flex justify-content-between g-0">
                                                  <a href="https://facebook.com" target="_blank">
                                                       <button className='round-button'><i className="fa-brands fa-facebook-f"></i></button>                                                  
                                                  </a>
                                                  <a href="https://instagram.com" target="_blank">
                                                       <button className='round-button'><i className="fa-brands fa-instagram"></i></button>
                                                  </a>
                                                  <a href="https://twitter.com" target="_blank">
                                                       <button className='round-button'><i className="fa-brands fa-twitter"></i></button>
                                                  </a>
                                                  <a href="https://google.com" target="_blank">
                                                       <button className='round-button'><i className="fa-brands fa-google"></i></button>
                                                  </a>
                                                  <a href="https://linkedin.com" target="_blank">
                                                       <button className='round-button'><i className="fa-brands fa-linkedin"></i></button>
                                                  </a>                                  
                                             </div> 
                                        </div>
                                   </div>
                              </div>
                              <div className='tab-body'>
                                   <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.</p>                                                           

                                   <ul className="mt-3">
                                        <li>* Village did removed enjoyed explain nor ham saw calling talking.</li>
                                   </ul>
                                   <ul>
                                        <li>* Securing as informed declared or margaret.</li>
                                   </ul>
                                   <ul>
                                        <li>* Joy horrible moreover man feelings own shy.</li>
                                   </ul>

                                   <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. 
                                   </p>
                              </div>
                         </div>
                    </div>
          </section>
    </>
  )
}

export default ProductDetails


