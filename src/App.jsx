// var add=(a,b)=>`${a+b}`;
// var sub=(a,b)=>`${a-b}`;
// var mul=(a,b)=>`${a*b}`;
// var div=(a,b)=>`${a/b}`;
// export {add,sub,mul,div};

//  Netflix Series Practice

// import React from "react";
// import Card from "./Card";
// import series from "./series"; 
// let value = (val) => 
// (
//       <Card
//     site={val.site}
//     link={val.link}
//     title={val.title}
//     img={val.img}
// />
// )
// let App=()=>(
// <>
// <h1 className='heading'>NetFlix Series</h1>
// <div className='container'>
//    {series.map(value)}
// </div>
// </>
// )
// export default App;

// Slot m/c Game

import React from 'react';
import Game from "./Game";

let arr=[
    {x: '😄',y: '😄',z: '😄'},
    {x: '😄',y: '😃' ,z: '😄'},
    {x: '😄',y: '😄',z: '😄'},
    {x: '😄',y: '😄',z: '😃'}
]
let value=(val)=>(
    <Game
    x={val.x}
    y={val.y}
    z={val.z}
/>
)
// let heading={
//     color:'red',
//     padding: '15px 10px',
//     textAlign: 'center',
//     background: '#eee',
//     boxShadow: '0px 0px 10px #aaa',
   
// }

let App=()=>(
    <>
    <boby>
    <h1 className='heading'>Slot <span>Machine</span> Game</h1>
    <div className='games'>
     {arr.map(value)}
    </div>
    </boby>
    </>
)
export default App;