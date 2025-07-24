import React from 'react'

const Products = (props) => {
  return (
    <button className="px-8 py-2 bg-sky-400 text-white rounded-full" >
      {props.name}
      </button>
  )
}

export default Products