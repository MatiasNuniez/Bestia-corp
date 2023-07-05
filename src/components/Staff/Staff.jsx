import React from 'react'
import luchov from '../../assets/BookBestia/JugadoresRemeras/Luchov.jpg'
import noktse from '../../assets/BookBestia/JugadoresRemeras/Noktse.jpg'
import meyern from '../../assets/BookBestia/JugadoresRemeras/Meyern.jpg'
import deco from '../../assets/BookBestia/JugadoresRemeras/Deco.jpg'



export const Staff = () => {

    return (

        <div className='container Staff'>

            <div className="card" style={{width: '18rem'}}>
                <img src={noktse} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Noktse</p>
                    </div>
                    <div className='hovver'>
                    <a href="https://www.instagram.com/noktsecs/?hl=es" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/noktseCS" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src={meyern} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Luchov</p>
                    </div>
                    <div className='hovver'>
                    <a href="https://www.instagram.com/noktsecs/?hl=es" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/noktseCS" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    </div>
            </div>


            <div className="card" style={{width: '18rem'}}>
                <img src={deco} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Deco</p>
                    </div>
                    <div className='hovver'>
                    <a href="https://www.instagram.com/noktsecs/?hl=es" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/noktseCS" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    </div>
            </div>


            <div className="card" style={{width: '18rem'}}>
                <img src={luchov} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Meyern</p>
                    </div>
                    <div className='hovver'>
                    <a href="https://www.instagram.com/noktsecs/?hl=es" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/noktseCS" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    </div>
            </div>

        </div>




    )
}
