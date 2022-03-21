import React, { useEffect, useState } from 'react'
import "./card.css"

const Card = (props) => {

   

   

    return(
        <div className='card-box' onClick={() => props.handleClick(props.id)}>
            <img src={props.imgName} alt={props.name}/>
            <h1>{props.name}</h1>
        </div>
    )

}

export default Card