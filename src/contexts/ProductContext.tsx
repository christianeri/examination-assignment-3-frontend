import { createContext, useContext, useState } from 'react'
import { ProductItem, ProductItemRequest } from '../models/ProductModels'


export interface LocalProps {
     children:any
}

export interface IProductContextType {
     
     product: ProductItem 
     getProduct: (articleNumber?:string) => void
     
     products: ProductItem[] 
     getAllProducts:() => void
     
     productItem: ProductItem
     setProductItem: React.Dispatch<React.SetStateAction<ProductItem>>
     productItemRequest: ProductItemRequest
     setProductItemRequest:React.Dispatch<React.SetStateAction<ProductItemRequest>>
     
     addProduct: (e:React.FormEvent) => void
     // edit: (id:number, e: React.FormEvent) => void
     // remove: (id:number) => void
          
     randomProducts: ProductItem[]
     getRandomProducts: (take?:number) => void
     
     productsByCategory: ProductItem[]
     getProductsByCategory:(category:string, take:number) => void
     
     productsByTag: ProductItem[]
     getProductsByTag: (tag:string, take:number) => void
     
     showcaseProducts: ProductItem[]
     getShowcaseProducts: (take:number) => void

     latestProducts: ProductItem[]
     getLatestProducts: (take:number) => void

     bestSellingProducts: ProductItem[]
     getBestSellingProducts: (take:number) => void

     topRatedProducts: ProductItem[]
     getTopRatedProducts: (take:number) => void

     relatedProducts: ProductItem[]
     getRelatedProducts: (category:string, articleNumber:string, take:number) => void
}

export const ProductContext = createContext<IProductContextType|null>(null)
export const useProductContext = () => {
     return useContext(ProductContext)
}


const ProductProvider: React.FC<LocalProps> = ({children}) => {
     
     // const apiURL:string = 'https://win22-webapi.azurewebsites.net/api/products'
     const apiURL:string = 'http://localhost:5000/api/inventoryitems'

     const productDefault:ProductItem = {
          articleNumber: '',
          name: '',
          description: '',
          category: '',
          price: 0,
          rating: 0,
          imageName: '',
          tag: ''
     }    
     const [productItem, setProductItem] = useState<ProductItem>(productDefault)
     // const [product, setProduct] = useState<ProductItem[]>([])

     const productItemRequestDefault = {     

          articleNumber: '',
          name: '',
          description: '',
          category: '',
          price: 0,
          rating: 0,
          imageName: '',
          tag: ''
     }
     const [productItemRequest, setProductItemRequest] = useState<ProductItemRequest>(productItemRequestDefault)

     const [product, setProduct] = useState<ProductItem>(productDefault)
     const [products, setAllProducts] = useState<ProductItem[]>([])
     const [randomProducts, setRandomProducts] = useState<ProductItem[]>([])
     const [productsByCategory, setProductsByCategory] = useState([])
     const [productsByTag, setProductsByTag] = useState([])
     const [showcaseProducts, setShowcaseProducts] = useState([])
     const [latestProducts, setLatestProducts] = useState([])
     const [bestSellingProducts, setBestSellingProducts] = useState([])
     const [topRatedProducts, setTopRatedProducts] = useState([])
     const [relatedProducts, setRelatedProducts] = useState([])
     


     const getRelatedProducts = async (category:string, articleNumber:string, take = 0) => {
          let url = `${apiURL}/related/${category}/${articleNumber}`

          if(take !== 0)
               url += `/${take}`

          const result = await fetch(url)
          setRelatedProducts(await result.json())          
     }



     const addProduct = async (e:React.FormEvent) => {
          e.preventDefault()

          const result = await fetch(`${apiURL}`, {
               method: 'post',
               headers: {
                    'Content-Type': 'application/json'
               }, body: JSON.stringify(productItemRequest)
          })
          if (result.status === 201) {
               setProductItemRequest(productItemRequestDefault)
               const newProduct = await result.json()
               setAllProducts(oldProducts => [...oldProducts, newProduct])
          }
     }







     const getAllProducts = async () => {
          const result = await fetch(apiURL)
          setAllProducts(await result.json())
     }
  
     



     const getRandomProducts = async (take = 0) => {
          const result = await fetch(`${apiURL}/items/${take}`)
          setRandomProducts(await result.json())          
     }





     const getProductsByCategory = async (category:string, take = 0) => {
          // const result = await fetch(`${url}/featured`)
          let url = `${apiURL}/category/${category}`

          if(take !== 0)
               url += `/${take}`

          const result = await fetch(url)
          setProductsByCategory(await result.json())          
     }





     const getProductsByTag = async (tag = '', take = 0) => {
          // const result = await fetch(`${url}/featured`)
          let url = `${apiURL}/tag/${tag}`

          if(take !== 0)
               url += `/${take}`

          const result = await fetch(url)
          setProductsByTag(await result.json())          
     }
    
     



     const getShowcaseProducts = async (take = 0) => {
          const result = await fetch(`${apiURL}/items/${take}`)
          setShowcaseProducts(await result.json())          
     }





     const getLatestProducts = async (take = 0) => {
          let url = `${apiURL}/tag/latest`

          if(take !== 0)
               url += `/${take}`

          const result = await fetch(url)
          setLatestProducts(await result.json())          
     }

     const getBestSellingProducts = async (take = 0) => {
          let url = `${apiURL}/tag/bestselling`

          if(take !== 0)
               url += `/${take}`

          const result = await fetch(url)
          setBestSellingProducts(await result.json())          
     }

     const getTopRatedProducts = async (take = 0) => {
          let url = `${apiURL}/rated/5`

          if(take !== 0)
               url += `/${take}`

          const result = await fetch(url)
          setTopRatedProducts(await result.json())          
     }
     




    
     


     const getProduct = async (articleNumber?:string) => {
          if (articleNumber !== undefined) {
          const result = await fetch(`${apiURL}/item/${articleNumber}`)
          setProduct(await result.json())
          }       
     }




     return <ProductContext.Provider value={{
                    product, getProduct, 
                    products, getAllProducts,
                    productItem, setProductItem,
                    productItemRequest, setProductItemRequest,
                    addProduct,
                    randomProducts, getRandomProducts, 
                    productsByCategory, getProductsByCategory,
                    productsByTag, getProductsByTag, 
                    showcaseProducts, getShowcaseProducts,
                    latestProducts, getLatestProducts,
                    bestSellingProducts, getBestSellingProducts,
                    topRatedProducts, getTopRatedProducts,
                    relatedProducts, getRelatedProducts
                    }}> 

          {children}
     </ProductContext.Provider>
}

export default ProductProvider