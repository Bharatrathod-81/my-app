import React, { useEffect } from 'react'
import './content.css'
import img1 from '../../asset/My project 1.png'
import Card1 from '../card/card1'
import { Data } from '../../data'


const Content = () => {

    

  return (
    <div>
      <div className='card-img'>

        <div className='content-child1'>
            <div className='top-heading'>Grab Upto 50% Off On
            Selected Headphone</div>

            <button className='btn'>Buy Now</button>
        </div>

        <div className='content-child2'>
            <img src={img1} className='img1'/>
        </div>

      </div>


    <div className='main-content'>


        <div className='filter-container'>
            <div className='filter-header'>
                <div className='filter-header1'>Filters</div>
                <div className='filter-header2'>Clear All</div>
            </div>
            <div className='filter-content'>
                <div className='filter-content1'>
                    <div className='cate'>Category</div>
                    <div>+</div>
                </div>


                <div className='filter-content2'>
                    <div className='checkbox-cate'>
                        <div>
                          <input type='checkbox' /> Kid
                        </div>
                        (18)
                    </div>
                    <div className='checkbox-cate'>
                        <div>
                          <input type='checkbox' /> Kid
                        </div>
                        (18)
                    </div>
                    <div className='checkbox-cate'>
                        <div>
                          <input type='checkbox' /> Kid
                        </div>
                        (18)
                    </div>
                    <div className='checkbox-cate'>
                        <div>
                          <input type='checkbox' /> Kid
                        </div>
                        (18)
                    </div>
                    <div className='checkbox-cate'>
                        <div>
                          <input type='checkbox' /> Kid
                        </div>
                        (18)
                    </div>
                </div>
            </div>
        </div>


        <div className='card1-listing-container'>

            <div className='card1-listing'>
                {Data?.map((e,i) => <div key={e.id}><Card1 data={e}/></div> )}
            </div>


            <div className='pagination-container'>
                <div className='pagination-inner-container'>
                    <div className='previous'>Previews</div>
                    <div className='num num-active'>1</div>
                    <div className='num'>2</div>
                    <div className='num'>3</div>
                    <div className='num'>4</div>
                    <div className='num'>5</div>
                    <div className='num'>6</div>
                    <div className='num'>7</div>
                    <div className='next'>Next</div>
                </div>
            </div>



        </div>

      </div>
            
    </div>
  )
}

export default Content
