
import ProductCard from './ProductCard';

import { useEffect } from 'react'
import { IProductContextType, useProductContext } from '../contexts/ProductContext';


interface LocalProps {
     amount?:number
     orientation:string
}


const ProductCardGrid: React.FC<LocalProps> = ({amount, orientation}) => {

     const {randomProducts, getRandomProducts} = useProductContext() as IProductContextType

     useEffect (() => {
          getRandomProducts(amount)
          }, [])

     // let item:ProductItem[]

  return (
     <>
          {
               randomProducts.map(product => (<ProductCard key={product.articleNumber} orientation={orientation} item={product}/>))
          }
          {/* {
               randomProducts.map((product:ProductItem) => <ProductCard key={product.articleNumber} orientation={orientation} item={product}/>)
          } */}
     </>
  )
}

export default ProductCardGrid
