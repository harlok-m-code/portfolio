import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Contacts() {
  return (
    <div>
        <Navbar/>
            <div class="section">
                <div class="container">
                    <h1 class="title-1">Contacts</h1>
                    <ul class="content-list">
                        <li class="content-list__item">
                            <h2 class="title-2">Location</h2>
                            <p>New York, USA</p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79051234567">+ 1 323 453 6270</a></p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">workmairbek@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Contacts