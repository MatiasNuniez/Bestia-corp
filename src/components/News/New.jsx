import React from 'react'
import img1 from '../../assets/BookBestia/Competencias/Equipo2RMR.jpg'

export const New = () => {
    return (
        <div className='container'>
            <div className="card" style={{width:'100%',height:'350px', marginBottom:'100px'}}>
                <img src={img1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde a nulla pariatur aliquid exercitationem neque quo ipsam cumque non ab et esse magnam provident molestias hic quia, veritatis, sed natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas, libero itaque, inventore odio similique nemo doloribus aut a reiciendis ipsa impedit est at hic, obcaecati consequatur vitae voluptate deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque, a possimus deserunt dignissimos est neque dicta eligendi fugiat harum. Veniam doloremque provident aspernatur alias, dolores architecto placeat ducimus animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa hic, cum maxime aliquid numquam modi nemo animi voluptatem autem, iste quaerat excepturi laboriosam voluptas voluptatum in assumenda. Sunt, temporibus?</p>
                    </div>
            </div>
        </div>
    )
}
