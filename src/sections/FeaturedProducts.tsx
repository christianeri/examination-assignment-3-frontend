
import ProductCard from "../components/ProductCard"
import { ProductItem } from "../models/ProductModels"

interface LocalProps {
     title:string
     align:string
     sectionName:string
     items: ProductItem[]
}

const FeaturedProducts:React.FC<LocalProps> = ({title, align, sectionName, items}) => {

  return (
     <>          
          <section className={sectionName}>     
               <div className={`container ${align}`}>
                    <h3>{title}</h3>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-0'>
                         {
                              items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                         }
                    </div>
               </div>
          </section>
     </>
  )
}

export default FeaturedProducts