import React from 'react'
import img from '../assets/Presskit/Bestia-Logo/Bestia.png'

export const Inicio2 = () => {

    return (

        <div className='container'>

            <div className='upcoming-matches'>

                <h2>Upcoming matches</h2>

                <div className='match'>

                    <div className='team-1'>
                        <img src={img} alt="" />
                        <p>Bestia</p>
                    </div>

                    <div className='dateMatch'>
                        <p>19:00HS</p>
                        <span>2 de julio</span>
                    </div>

                    <div className='team-2'>
                        <img src="https://img-cdn.hltv.org/teamlogo/cRCqqg_3nBVCfizJGJZR7Y.png?ixlib=java-2.1.0&w=100&s=f4eca57fedc3a9673529b27a92d771ab" alt="" />
                        <p>Windingo</p>
                    </div>

                </div>

                <div className='match'>

                    <div className='team-1'>
                        <img src={img} alt="" />
                        <p>Bestia</p>
                    </div>

                    <div className='dateMatch'>
                        <p>19:00HS</p>
                        <span>2 de julio</span>
                    </div>

                    <div className='team-2'>
                        <img src="https://img-cdn.hltv.org/teamlogo/cRCqqg_3nBVCfizJGJZR7Y.png?ixlib=java-2.1.0&w=100&s=f4eca57fedc3a9673529b27a92d771ab" alt="" />
                        <p>Windingo</p>
                    </div>

                </div>


                <div className='match'>

                    <div className='team-1'>
                        <img src={img} alt="" />
                        <p>Bestia</p>
                    </div>

                    <div className='dateMatch'>
                        <p>19:00HS</p>
                        <span>2 de julio</span>
                    </div>

                    <div className='team-2'>
                        <img src="https://img-cdn.hltv.org/teamlogo/cRCqqg_3nBVCfizJGJZR7Y.png?ixlib=java-2.1.0&w=100&s=f4eca57fedc3a9673529b27a92d771ab" alt="" />
                        <p>Windingo</p>
                    </div>

                </div>

            </div>

            <div className='videos-youtube'>

                <h2>Visit in youtube</h2>

                <div className='videos-container'>
                    <div className='video-item'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/W7ufSam0vFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className='video-item'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zaT0R_Jd6CE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className='video-item'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ecJJ6OtVxXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                </div>

            </div>
        </div>

    )
}
