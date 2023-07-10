import React from 'react'
import imgIndex1 from '../../assets/WallpaperBestia/WP03_Desktop.png'
import imgIndex2 from '../../assets/WallpaperBestia/WP04_Desktop.png'
import imgIndex3 from '../../assets/WallpaperBestia/WP06_Desktop.png'
import imgIndex4 from '../../assets/WallpaperBestia/WP07_Desktop.png'
import imgIndex5 from '../../assets/WallpaperBestia/WP08_Desktop.png'

export const Carousel = () => {

    return (


        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={imgIndex1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={imgIndex2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={imgIndex3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={imgIndex4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={imgIndex5} class="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )

}
