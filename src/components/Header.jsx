import React from 'react'
import logoImg from '../assets/Presskit/Bestia-Logo/Bestia-inv.png'

export const Header = () => {

  return (


    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src={logoImg} alt="Logo" className='img-logo-header'/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/News">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Csgoteam">CSGO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Staff">Staff</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Matches">Matches</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Store">Store</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AboutUs">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
