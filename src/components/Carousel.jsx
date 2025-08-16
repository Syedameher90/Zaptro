import React, { useContext, useEffect } from 'react'
import { DataProvider } from '../Context/DataContext'

const Carousel = () => {

  const {fetchAllProducts} = useContext(DataProvider)
  useEffect(()=>{
    fetchAllProducts()
  },[])
  return (
    <div>Carousel</div>
  )
}

export default Carousel