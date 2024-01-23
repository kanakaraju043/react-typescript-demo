import React from 'react'
import { Product } from './Product.model.type'

type ProductProps = {
  product: Product
}

const CustomProduct = ({product}: ProductProps) => {
  return (
    <div className= 'bg-slate-800 font-bold text-2xl mx-3'>
      <h2 className='text-white p-3'>{product.name}  {product.makeYear} {product.make}</h2>
     

    </div>
  )
}

export default CustomProduct