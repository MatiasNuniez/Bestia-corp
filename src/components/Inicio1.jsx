import React from 'react'
import noti1 from '../assets/BookBestia/BootcampBarcelona/02NoktseBootcamp.jpg'

export const Inicio1 = () => {

    return (

        <section className='container notis-index'>

            <h2>News</h2>
            
            <div className="card">
                <div className='img-card'>
                    <img src={noti1} className="card-img-top" alt="noti"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card">
                <div className='img-card'>
                    <img src={noti1} className="card-img-top" alt="noti"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>


            <div className="card">
                <div className='img-card'>
                    <img src={noti1} className="card-img-top" alt="noti"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </section>

    )
}
