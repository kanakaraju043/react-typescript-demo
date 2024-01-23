import React from 'react'
import { CategoryProps } from './Category.model'

const Category = ({category}: CategoryProps) => {
  return (
    <div className='bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center'>

        <h2 className='font-bold sm:text-xl'>{category.name}</h2>
        <img src={category.image} alt={category.name} className='w-20'/>
    </div>
  )
}

export default Category