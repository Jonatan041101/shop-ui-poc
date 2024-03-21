import Image from "next/image"
import { IProduct } from "../interfaces/product.interface"

interface IProductCardProps{
    product:IProduct
}

export default function ProductCard({product}:IProductCardProps){
    return <article>
        <p>{product.name}</p> 
        
    </article>
}