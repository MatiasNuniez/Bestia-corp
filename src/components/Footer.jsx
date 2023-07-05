import React from 'react'

export const Footer = () => {

  return (

    <footer className='footer'>

      <div className='content'>

        <div className='lista-footer'>

          <div className='container container-icons'>

            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>

          </div>

        </div>

        <div className='container results'>
          <h2>Last Results</h2>

          <div className='match'>

            <div className='team-1'>
              <p>Bestia</p>
            </div>

            <div className='result-match'>
              <p>2:0</p>
            </div>

            <div className='team-2'>
              <p>Windingo</p>
            </div>

          </div>

          <div className='match'>

            <div className='team-1'>
              <p>Bestia</p>
            </div>

            <div className='result-match'>
              <p>2:0</p>
            </div>

            <div className='team-2'>
              <p>Windingo</p>
            </div>

          </div>

          <div className='match'>

            <div className='team-1'>
              <p>Bestia</p>
            </div>

            <div className='result-match'>
              <p>2:0</p>
            </div>

            <div className='team-2'>
              <p>Windingo</p>
            </div>

          </div>

        </div>

      </div>

      <div className='footer-mn'>
          <p>© Bestia Corp 2023 ©</p>
        </div>

    </footer>

  )
}
