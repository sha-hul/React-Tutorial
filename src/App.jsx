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

// import React from 'react';
// import Game from "./Game";

// let arr=[
//     {x: '😄',y: '😄',z: '😄'},
//     {x: '😄',y: '😃' ,z: '😄'},
//     {x: '😄',y: '😄',z: '😄'},
//     {x: '😄',y: '😄',z: '😃'}
// ]
// let value=(val)=>(
//     <Game
//     x={val.x}
//     y={val.y}
//     z={val.z}
// />
// )

// let App=()=>(
//     <>
//     <boby>
//     <h1 className='heading'>Slot <span>Machine</span> Game</h1>
//     <div className='games'>
//      {arr.map(value)}
//     </div>
//     </boby>
//     </>
// )
// export default App;


// Destructing array


// const name=['sha','hul','21'];
// const[fname,lname,age]=name;
// console.log(name);
// console.log(age);


// #30 React Hooks 

// import React, { useState } from "react";

  
// let App=()=>
//         {
// const [count,setCount]=useState(0);
// let decNum=()=>(
//     setCount(count-1)
// )
// let intialNum=()=>
// (
//     setCount(0)
// )
// let incNum=()=>{
//     setCount(count+1);
//     };
//     return(
//     <>
//     <h1 className='header'>React Hooks</h1>
//     <div className='count'>
//     <div>
//         <h1 id='incre'>{count}</h1>
//         <button onClick={decNum}> - </button>
//         <button onClick={intialNum}>Reset</button>
//         <button onClick={incNum}> + </button>
//         </div>
//     </div>
//     </>
// )
//         }
// export default App;


// #31 Challenge #6 To show the Current Time


// import React,{useState} from "react";
// let App = () =>{
//     var timeNow=new Date().toLocaleTimeString();
//     let[curtime,updatetime]=useState(timeNow);
//     let displayTime=()=>(
//         updatetime(new Date().toLocaleTimeString())
//     )
// return(
//     <>
//     <h1 className='header'>Current Time</h1>
//     <div className='count'>
//      <div>
//     <h1>{curtime}</h1>
//     <button onClick={displayTime}><a href="#">Get Time</a></button>
//     </div>
//     </div>
//     </>
// )
// }
// export default App;


// #32 Digital clock in the new folder

// #33 React Events

// my try

// import React,{useState} from 'react';
// let App=()=>
// {
//     let word='Shahul';
//      let[cur,up]=useState(word);
//      let onclick=()=>(
//          up('Let Go!!',document.getElementById('btn-head').style.background='violet')
//      )
//      let ondbl=()=>(
//         up('Enimies Ahead!!',document.getElementById('btn-head').style.background='tomato')
//     )
//    return (
//     <div id='btn-head' className='button'>
//         <button id='btn' onDoubleClick={ondbl} onClick={onclick}>{cur}</button>
//     </div>
// )
//     }
// export default App;


// Actual 


import React,{useState} from 'react';
let App=()=>
{
    let color='red';
    let word='Shahul';
     let[curText,upText]=useState(word);
     let[curColor,updColor]=useState(color);
     let onclick=()=>{
         let bg2='yellow';
         upText('Enimies Ahead');
         updColor(bg2);
     }
     let ondbl=()=>{
         let bg='violet';
        upText('Happy Now');
        updColor(bg);
    }
   return (
    <div id='btn-head' style={{backgroundColor:{curColor}}} className='button'>
        <button id='btn' onDoubleClick={ondbl} onClick={onclick}>{curText}</button>
    </div>
)
    }
export default App;





