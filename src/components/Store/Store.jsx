import React from 'react'
import remera from '../../assets/Store/remera.jpg'
import pantalones from '../../assets/Store/babuchas.jpg'
import buzos from '../../assets/Store/buzo.jpg'

export const Store = () => {

    return (

        <div className='container'>

            <div className='store-index'>
                
            <a href="/Jerseys">
                <div className="card card-store" style={{width: '18rem', backgroundColor:'#2C2C2C', border:'none'}}>
                    <img src={remera} className="card-img-top" alt="..." style={{height:'450px', objectFit:'cover', borderRadius:'10px'}}/>
                    <div className="card-body">
                        <p className="card-text" style={{color:'whitesmoke' }}>Jerseys</p>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="card card-store" style={{width: '18rem', backgroundColor:'#2C2C2C', border:'none'}}>
                    <img src={pantalones} className="card-img-top" alt="..." style={{height:'450px', objectFit:'cover', borderRadius:'10px'}}/>
                    <div className="card-body">
                        <p className="card-text" style={{color:'whitesmoke' }}>Pantalones</p>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="card card-store" style={{width: '18rem', backgroundColor:'#2C2C2C', border:'none'}}>
                    <img src={buzos} className="card-img-top" alt="..." style={{height:'450px', objectFit:'cover', borderRadius:'10px'}}/>
                    <div className="card-body">
                        <p className="card-text" style={{color:'whitesmoke'}}>Buzos</p>
                    </div>
                </div>
            </a>
        </div>
        </div>

    )
}
