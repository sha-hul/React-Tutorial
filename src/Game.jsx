import React from 'react';

let Game=(props)=>(
    <div className='game'>
    <div className='value'>
       {props.x} {props.y} {props.z}
    </div>
    <hr/>
        {
            ((props.x==props.y)&&(props.y==props.z))?'This is Matched':'This is not Matched'
        }
    </div>
)

export default Game;