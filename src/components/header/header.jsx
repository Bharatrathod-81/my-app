import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='child1'>
            <div className='logo1'>FashionHub</div>
            <div className='child1-1'>
                <div className='items'>Category</div>
                <div className='items'>Brand</div>
                <div className='items'>Contact</div>
                <div className='items'>FAQ's</div>
            </div>
        </div>

        <div className='child2'>
            <div className='icon1'>*
                <div className='notify1'>3</div>
            </div>
            <div className='icon2'>*
            <div className='notify2'></div>
            </div>
            <div className='icon3'>B</div>
            <div className='child2-1'>
                <div className='child2-1-text1'>Good morning</div>
                <div className='child2-1-text2'>scarlet johnson</div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Header
