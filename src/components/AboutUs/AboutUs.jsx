import React from 'react'
import papo from '../../assets/staff/papo.jpg'

export const AboutUs = () => {

    return (

        <div className='container aboutus'>

            <div className='description-aboutus'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aliquid. Itaque repellat facere provident esse sapiente mollitia veritatis voluptate maiores, amet rem eius odit non! Recusandae rerum cum id deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus rem praesentium dolor amet necessitatibus, porro sequi, ut assumenda voluptatibus laboriosam aspernatur, doloremque esse autem? Nihil beatae dolore ratione facilis quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt fugiat quae voluptas beatae, iste consequatur quidem a deleniti vel accusantium perferendis? Nulla eos harum, debitis illo sequi consequuntur? Cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis distinctio ullam neque maiores quaerat dicta sapiente officia, ad culpa labore delectus harum in iste fuga voluptatum quibusdam a beatae vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui sapiente ullam quam dolore tempore reiciendis in? Quas harum veniam quasi reiciendis dolor eveniet consequuntur dicta neque praesentium! Saepe, obcaecati? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rerum nesciunt expedita facilis quo eveniet enim nemo saepe! Iste iusto et necessitatibus animi? Harum possimus tempore fugiat atque voluptatibus delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur voluptate vitae laborum impedit rerum? Quas quis quidem repellendus natus! Et temporibus quibusdam nobis rerum minima numquam est expedita consectetur.</p>
            </div>

            <div className='staff'>


                <div className='staff'>

                    <div className="card" style={{ width: '10rem' }}>
                        <h4>PAPO MC</h4>
                        <img src={papo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CEO</h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
