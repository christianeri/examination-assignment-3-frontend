
import { ProductItem } from "./ProductModels"

export interface CartItem {

     articleNumber:string|null
     product:ProductItem
     quantity:number
     count?:number
}