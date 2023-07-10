import React from 'react'
import noti1 from '../../assets/BookBestia/BootcampBarcelona/EquipoBootcamp.jpg'

export const News = () => {

    return (

        <div className='container'>
            <div className="card" style={{marginBottom:'10px'}}>
                <div className='img-card'>
                    <img src={noti1} className="card-img-top" alt="noti" />
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim. Fugit, iure itaque molestias nam quibusdam officia sequi? A impedit mollitia commodi vel sed ab recusandae sapiente amet quasi odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus corporis commodi! Cumque incidunt mollitia a accusantium, possimus repellendus accusamus hic, cum nam et unde voluptatem magni error fugiat quos!</p>
                    <a href="">Ver mas...</a>
                </div>
            </div>

            <div className="card" style={{marginBottom:'10px'}}>
                <div className='img-card'>
                    <img src={noti1} className="card-img-top" alt="noti" />
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellat dignissimos ipsum natus non officia et, ut inventore, aperiam nihil eveniet nostrum nulla unde possimus provident est ullam, tenetur fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita pariatur perspiciatis iure quam autem sint ab ipsum, ullam mollitia nemo delectus natus accusantium at laudantium quia et ratione consectetur?</p>
                    <a href="">Ver mas...</a>
                </div>
            </div>


            <div className="card" style={{marginBottom:'10px'}}>
                <div className='img-card'>
                    <img src={noti1} className="card-img-top" alt="noti" />
                </div>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, incidunt repellendus molestiae eveniet voluptas eaque excepturi asperiores atque, cupiditate necessitatibus eos officia nobis placeat quam dolorum voluptatum cumque non quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam quia et, nemo eius esse quisquam laudantium ut ipsa quidem adipisci itaque placeat neque vero aperiam deserunt ratione nostrum libero.</p>
                    <a href="">Ver mas...</a>
                </div>
            </div>
        </div>
    )
}
