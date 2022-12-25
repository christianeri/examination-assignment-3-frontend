import React from 'react'
import { IProductContextType, ProductContext } from '../contexts/ProductContext'

const CreateForm = () => {

     const {productItemRequest, setProductItemRequest, addProduct } = React.useContext(ProductContext) as IProductContextType

  return (
     <form onSubmit={addProduct} className='d-grid m-5'>

          <h3 className="display-6 mb-4">Create user</h3>

          <input value={productItemRequest.articleNumber} onChange={(e) => setProductItemRequest({...productItemRequest, articleNumber: e.target.value})} 
               type="text" className="form-control py-2 mb-3" placeholder='Enter 5 digits article number (ex 55555)' />
          
          <input value={productItemRequest.name} onChange={(e) => setProductItemRequest({...productItemRequest, name: e.target.value})} 
               type="text" className="form-control py-2 mb-3" placeholder='Enter name (ex White jacket)' />
          
          <input value={productItemRequest.description} onChange={(e) => setProductItemRequest({...productItemRequest, description: e.target.value})} 
               type="text" className="form-control py-2 mb-3" placeholder='Enter description (ex White cotton jacket with hood' />

          <input value={productItemRequest.category} onChange={(e) => setProductItemRequest({...productItemRequest, category: e.target.value})} 
               type="text" className="form-control py-2 mb-3" placeholder='Enter category (ex Jackets)' />

          <input value={productItemRequest.rating} onChange={(e) => setProductItemRequest({...productItemRequest, rating: Number(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder='Enter rating between 1 and 5 ' />
          
          <input value={productItemRequest.price} onChange={(e) => setProductItemRequest({...productItemRequest, price: Number(e.target.value)})} 
               type="text" className="form-control py-2 mb-3" placeholder='Enter price in € (ex 50)' />
          
          <input value={productItemRequest.imageName} onChange={(e) => setProductItemRequest({...productItemRequest, imageName: e.target.value})} 
               type="text" className="form-control py-2 mb-3" placeholder='Enter image path/url (http://images.com/white-jacket.jpg)' />

          <input value={productItemRequest.tag} onChange={(e) => setProductItemRequest({...productItemRequest, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter tag...' />
          
          <button type='submit' className='btn btn-success'>CREATE USER</button>

   </form>
  )
}

export default CreateForm
