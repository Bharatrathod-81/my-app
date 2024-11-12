import React from 'react'
import  './card1.css'

const Card1 = ({data}) => {
  return (
    <div className='card1-content'>
      <div className='img-container-card1'>
        <img alt='items-img' src={data?.image} className='items-img1'/>
      </div>

      <div className='card1-container2'>

        <div className='card1-container2-1'>
            <div className='card1-text1'>
                <div className='lable1'>{data?.title}</div>
                <div className='price1'>₹{data?.price}</div>
            </div>
            <div className='des1'>
                5 types of shoos available
            </div>
            <div className='star1'>
                ***** (21)
            </div>
        </div>

        <div className='card1-btn-container'>
            <button className='card-btn1'>Add To Cart</button>
            <button className='card-btn2'>Add Shortlist</button>
        </div>
      </div>

    </div>
  )
}

export default Card1
