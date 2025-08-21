import React, { useContext, useEffect } from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {
        const {data} = getData()

    const getUniqueCategory = (data, property) =>{
      let newVal = data?.map((curElem) =>{
          return curElem[property]
      })
      newVal = [...new Set(newVal)]
      return newVal
    }


  
    const categoryOnlyData = getUniqueCategory(data, "category")
    console.log(categoryOnlyData)
  
  return (
    <div className='bg-[#101829]'>
        <div className="max-w-7xl mx-auto flex items-center justify-around gap-4 py-5 px-2 ">
            {
                categoryOnlyData.map((item,index)=>{
                    return <div key={index}>
                        <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Category