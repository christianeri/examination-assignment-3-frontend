
import FixxoButton from '../components/FixxoButton'
import ProductCard from '../components/ProductCard'
import ProductCardGrid from '../components/ProductCardGrid'

import { ProductItem } from '../models/ProductModels'


interface LocalProps {
     items: ProductItem[]
}


const ProductPromoShowcase:React.FC<LocalProps> = ({items}) => {

  return (
 
     <section className='showcase-grid'>
          <div className='container-wide'>
               <div>
                    <div className='showcase-container-1x1'>                   
                         <div className='showcase-textbox'>
                              <h2>2 FOR USD $29</h2>
                              <FixxoButton label='flash sale' color='light' to='/sale'/>
                         </div>
                    </div>
               </div>
               <div className='d-flex justify-content-start'>
                    <div className='showcase-container-4x4'>
                         <div className='row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 g-0'>
                              {
                              items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                              }
                              {/* <ProductCardGrid orientation='vertical' amount={4}/>  */}
                         </div>
                    </div>
               </div>
          </div>
          <div className='container-wide d-none d-lg-flex'>
               <div className='d-flex justify-content-end'>
                    <div className='showcase-container-4x4'>                                       
                         <div className='row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 g-0'>
                              {/* {
                                   items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                              } */}
                              <ProductCardGrid orientation='vertical' amount={4}/>         
                         </div>            
                    </div>
               </div>
               <div className='d-flex justify-content-end'>
                    <div className='showcase-container-1x1'>
                         <div className='showcase-textbox'>
                              <h2>2 FOR USD $29</h2>
                              <FixxoButton label='flash sale' color='light' to='/sale'/>
                         </div>
                    </div>
               </div>
          </div>
     </section>

  )
}

export default ProductPromoShowcase
