import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Product } from '@/types'
export default function ProductList() {
    const data = useLoaderData()
    const products = data as Product[]
    console.log("Products",products)
  return (
    <div>ProductList</div>
  )
}
