import React from 'react'
import { CategoryListProps } from './Category.model'
import Category from './Category'

const CategoryList = ({categorylist}: CategoryListProps) => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        
        {/* Category */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'> 
        {
            categorylist.map((category) => <Category category={category}/>)
        }

        </div>
    </div>
  )
}

export default CategoryList