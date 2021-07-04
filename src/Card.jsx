import React from "react";

let Card=(props)=>(
<>
<div className='card'>
    <img src={props.img}/>
    <div className='content'>
        <h3>{props.title}</h3>
        <h4>{props.site}</h4>
        <button><a href={props.link}>Watch</a></button>
    </div>
</div>
</>
)
export default Card;