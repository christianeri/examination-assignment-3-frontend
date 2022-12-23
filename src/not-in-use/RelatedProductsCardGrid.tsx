
import ProductCard from '../components/ProductCard';

import { useEffect } from 'react'
import { IProductContextType, useProductContext } from '../contexts/ProductContext';


interface LocalProps {
     category:string
     articleNumber:string
     maxAmount?:number
     orientation:string
}


const RelatedProductsCardGrid: React.FC<LocalProps> = ({category, articleNumber, maxAmount = 0, orientation}) => {

     console.log("at RelatedProductsCardGrid " + "category " + category + " article number " + articleNumber + " max amount " + maxAmount)
     


     const {relatedProducts, getRelatedProducts} = useProductContext() as IProductContextType
     useEffect (() => {
          getRelatedProducts("Bags", "49743", maxAmount)
     }, [])

  return (
     <>
          {
               relatedProducts.map(product => (<ProductCard key={product.articleNumber} orientation={orientation} item={product}/>))
          }
     </>
  )
}

export default RelatedProductsCardGrid