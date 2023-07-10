import React from 'react'
import img from '../../assets/BookBestia/JugadoresRemeras/Meyern.jpg'

export const Jersey = () => {
  return (
    <div className='container sell-jersey'>

        <div className='img-jersey'>
            <img src={img} alt="" />
        </div>

        <div className='info-jersey'>
          <div className='info-jersey-container'>
            <p>Remera titular 2023</p>
            <span>$10.000</span>
            <div className='talles'>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
        </div>
        </div>

    </div>
  )
}
