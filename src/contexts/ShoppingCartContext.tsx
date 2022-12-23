import { createContext, useContext, useState } from 'react';

import ShoppingCart from "../components/ShoppingCart";
import { CartItem } from '../models/ShoppingCartModels'


export interface LocalProps {
     children:any
}

export interface IShoppingCartContextType {

     cartItems:CartItem[]
     cartQuantity:number
     incrementQuantity:(cartItem:CartItem) => void
     incrementQuantityCount:(cartItem:CartItem) => void
     decrementQuantity:(cartItem:CartItem) => void
     removeItem:(articleNumber:string|null) => void
}

export const ShoppingCartContext = createContext<IShoppingCartContextType|null>(null)
export const useShoppingCartContext = () => { 
     return useContext(ShoppingCartContext)
}


export const ShoppingCartProvider: React.FC<LocalProps> = ({children}) => {
     
     const [cartItems, setCartItems] = useState<CartItem[]>([])
     
     const cartQuantity = cartItems.reduce(
          (quantity, item) => item.quantity + quantity, 0
     )

     const incrementQuantity = (cartItem:CartItem) => {
          const {articleNumber, product} = cartItem

          setCartItems(items => {
               if (items.find(item => item.articleNumber === articleNumber) == null) {
                    return [ ...items, { articleNumber, product, quantity: 1 }]
                
               } else {
                    return items.map(item => {
                         if (item.articleNumber === articleNumber) {
                              return { ...item, quantity: item.quantity + 1 }
                         } else {
                              return item
                         }
                    })
               }
          })
     }

     const incrementQuantityCount = (cartItem:CartItem) => {
          const {articleNumber, product, count} = cartItem
          console.log(count);

          if (count !== undefined) {

               setCartItems(items => {
                    
                    if (items.find(item => item.articleNumber === articleNumber) == null) {
                         return [ ...items, { articleNumber, product, quantity: count }]
                    

                    } else {
                         return items.map(item => {
                              if (item.articleNumber === articleNumber) {
                                   
                                   return { ...item, quantity: item.quantity + count }
                              } 
                              else {
                                   return item
                              }
                         })
                    }
               })
          }     
     }



     


     // const getItemQuantity = (articleNumber:string) => {
     //      return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
     // }



     const decrementQuantity = (cartItem:CartItem) => {
          const {articleNumber} = cartItem

          setCartItems(items => {

               if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                    return items.filter(item => item.articleNumber !== articleNumber)

               } else {
                    
                    return items.map(item => {


                         if (item.articleNumber === articleNumber) {
                              return { ...item, quantity: item.quantity - 1 }
                         } else {
                              return item
                         }
                    })
               } 
          })
     }
 
     const removeItem = (articleNumber:string|null) => {
          setCartItems(items => {
               return items.filter(item => item.articleNumber !== articleNumber)
          })
     }

     return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, incrementQuantity, incrementQuantityCount, decrementQuantity, removeItem}}>
          {children}
          <ShoppingCart/>
     </ShoppingCartContext.Provider>

}