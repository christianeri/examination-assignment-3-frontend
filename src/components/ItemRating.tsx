import React from 'react'

interface LocalProps {
     itemRating:number
}

const ItemRating: React.FC<LocalProps> = ({itemRating}) => {

    

  return (
     <div className="card-rating" id="product-rating">
          <i className={itemRating >= 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
          <i className={itemRating >= 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
          <i className={itemRating >= 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
          <i className={itemRating >= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
          <i className={itemRating == 5 ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
     </div>
  )
}

export default ItemRating