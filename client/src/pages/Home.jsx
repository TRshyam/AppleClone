import React from 'react'
import Navbar from '../components/Navbar'
import TopProducts from '../components/ProductComponents/TopProducts'
import Products from '../components/ProductComponents/Products'

export default function Home() {
  return (
    <>
      <Navbar/>
      <TopProducts/>
      <Products/>
    </>
  )
}
