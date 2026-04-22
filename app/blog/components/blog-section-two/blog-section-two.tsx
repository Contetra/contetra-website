
import React from 'react'
import { BlogFilters } from './helpers/blog-filters'
import { BlogList } from './helpers/blog-list'

export const BlogSectionTwo = () => {
  return (
    <div className=' mx-[5px] md:mx-[20px] xl:mx-[40px] 2xl:mx-[80px] flex flex-col gap-10 '>
         <BlogFilters />
         <BlogList />
    </div>
  )
}
