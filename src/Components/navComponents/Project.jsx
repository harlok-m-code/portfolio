import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { projes } from './projects/helper'
import PrjoectPage from './projects/PrjoectPage'


const Project = () => {
    console.log(projes)
  return (
    <div>
    <Navbar/>
 <main class="section">
        <div class="container">
            <h2 class="title-1">Projects</h2>
            <ul class="projects">
                {
                    projes.map((data) => (
                        <PrjoectPage id={data.id} img={data.img} title={data.title} />
                    ))
                }
            </ul>
        </div>
    </main>

    <Footer/>
    </div>
  )
}

export default Project