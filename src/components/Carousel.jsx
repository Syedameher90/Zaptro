import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Carousel = () => {

  const {data, fetchAllProducts} = useContext(DataContext)
  console.log(data)
  useEffect(()=>{
    fetchAllProducts()
  },[])

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <Slider {...settings}>
      {
        data?.slice(0,7)?.map((item, index) => {
          return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
            <div className="flex gap-10 justify-center h-[600px] items-center px-4">
              <div className="space-y-6">
                <h3 className=""></h3>
              </div>
            </div>
          </div>

        })
      }
        <div>
        <h3>1</h3>
      </div>
    </Slider>
  )
}

export default Carousel