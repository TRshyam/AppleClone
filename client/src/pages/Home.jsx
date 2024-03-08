import React from 'react'
import Navbar from '../components/Navbar'
import TopProducts from '../components/ProductComponents/TopProducts'
import Products from '../components/ProductComponents/Products'
import Tvcard from '../components/Tvcard'

export default function Home() {
  return (
<>
    <div style={{backgroundColor:'#f5f5f7'}} >


      <Navbar/>
      <TopProducts/>
      <Products/>
      <Tvcard/>
      
    </div>
    </>
  )
}
