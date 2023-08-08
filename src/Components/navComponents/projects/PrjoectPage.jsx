import React from 'react'

function PrjoectPage( { id, img ,title}) {
  return (
    <div>
        <li class="project" key={id}>
                    <a href="#">
                        <img src={img} alt="Project img" className="project__img"/>
                        <h3 className="project__title">{ title }</h3>
                    </a>
                </li>
    </div>
  )
}

export default PrjoectPage