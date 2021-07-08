// var React = require('react');
// var ReactDOM = require('react-dom');
// import React from 'react';
// import ReactDOM from 'react-dom';
// by using the jsx
// ReactDOM.render(<h1>Shahul Eeyee</h1>,document.getElementById('root'));
// by using the simple javascript
// var h1 = document.createElement('h1');
// var txt =document.createTextNode('Hello World');
// h1.appendChild(txt);
// var id=document.getElementById('root');
// id.appendChild(h1);

// Render multiple element inside ReactDOM.rnder();
//  old type

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
// <div>
//     <h1>Shahul</h1>
//     <p>logg kuch karna tericha heii</p>
// </div>
//     ,document.getElementById('root'));

// new type
// it is possible to return the array of the element

// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//     [
//         <h1>Suvan</h1>,
//         <h2>Shravan and Suman</h2>,
//         <p>Together called as Suvan</p>
//     ],
//     document.getElementById('root')
// )

// React.Fagment

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
// <React.Fragment>
//     <h1>Shahul</h1>
//     <p>logg kuch karna tericha heii</p>

// </React.Fragment>
//     ,document.getElementById('root'));

// challange 1

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <React.Fragment>
//         <h1>NetFlix Series</h1>
//         <p>List of 5 Netflix Series</p>
//         <ol>
//             <li>Series</li>
//             <li>Series</li>
//             <li>Series</li>
//             <li>Series</li>
//             <li>Series</li>
//         </ol>
//     </React.Fragment>,
//     document.getElementById('root')
// )

// insert Js in JSX
// challenge 2

// import React from 'react';
// import ReactDOM from 'react-dom';
// var fname='Shahul';
// var lname="Hameed";
// var date= new Date().toLocaleDateString();
// var time=new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
//     <h1>My name is {fname}</h1>
//     <h2>My full name is {`${fname} ${lname}`}</h2>
//     <p>Now the local time is {Date()}</p>
//     <p>Current Date ={date}</p>  
//     <p>Current Time ={time}</p>  
//     </>,
//     document.getElementById('root')
// )

// insert the img in react and attribute

// import React from 'react';
// import ReactDOM from 'react-dom';
// const img1='https://picsum.photos/200/300'
// const img2='https://picsum.photos/300/350'
// const img3='https://picsum.photos/400/400'
// ReactDOM.render(
//     <>
//     <h1>Today is Thrusday</h1>
//     <img src={img1} alt="black and white" />
//     <img src={img2} alt="black and white" />
//     <a href="https://picsum.photos/200
// " target='_blank'>
//     <img src="https://picsum.photos/200
// " alt="black and white" />
//     </a>
//     </>
// ,
//     document.getElementById('root'))

//  implement the external css in the react

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// var fname='Shahul';
// const img1='https://picsum.photos/200/300'
// const img2='https://picsum.photos/300/350'
// const img3='https://picsum.photos/400/400'
// const heading={
//     color:'blue',
//     textDecaration:'underline',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textShadow: '3px 2px 5px pink',
//     fontFamily: "'Big Shoulders Stencil Display', cursive",
//     margin: '60px',
// }
// ReactDOM.render(
//     <>
//     <h1 className='heading' style={heading}>My Name Is <em style={{
//         color:'tomato'
//     }}>{fname}</em></h1>
//     <div className='img_div'>
//     <img src={img1} alt="black and white" />
//     <img src={img2} alt="black and white" />
//     <a href="https://picsum.photos/400/400" target='_blank'>
//     <img src={img3} alt="black and white" />
//     </a>
//     </div>
//     </>
// ,
//     document.getElementById('root'))


// Component in react

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// Component challenge in react

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// var curhrs=new Date();
// curhrs=curhrs.getHours();
// let greeting;
// let cssColor={};
// if(curhrs>=1 && curhrs<=8){
//     greeting='Good Morning';
//     cssColor.color='tomato'
// }
// else if(curhrs>=9 && curhrs<=11){
//     greeting='Sunny Morning';
//     cssColor.color='yellow'
// }
// else if(curhrs>=12 && curhrs<=19){
//     greeting='Good Afternoon';
//     cssColor.color='pink'
// }
// else{
//     greeting='Good Night';
//     cssColor.color='black'
// }
// ReactDOM.render(
//     <>
//     <h1 className='heading'>Hi Monkey ,<span style={cssColor}>{greeting}</span></h1>
//     </>,
//     document.getElementById('root')
// )

// Import and Export in react 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import fname, {ross,peru} from './App'
// ReactDOM.render(
//     <>
//     <ol>
//         <li>{fname}</li>
//         <li>{ross}</li>
//         <li>{peru()}</li>
//     </ol>
//     </>,document.getElementById('root')
// )

// Calculate the number in react

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {add,sub,mul,div} from './App';
// ReactDOM.render(
//      <>
//       <ol>
//           <li>Sum of 4+5 : {add(4,5)}</li>
//           <li>Product of 5and4 : {mul(4,5)}</li>
//           <li>Sub of 5,4 : {sub(5,4)}</li>
//           <li>Div of 50,4 : {div(50,4)}</li>
//       </ol>
//     </>
//     ,document.getElementById('root')
// )

// Netflix Series Card

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css"
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// slot m/c game

// import React from "react";
// import  ReactDOM  from "react-dom";
// import App from "./App";
// import "./index.css"
// ReactDOM.render(
//     <>
//     <App/>
//     </>,
//     document.getElementById('root')
// )


// React Hooks


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )


// React Event

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

//Reaact from

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// Todo list

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// counter with condition

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )


// Todolist using Material UI

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// React Google Keep App

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import "./index.css"
ReactDOM.render(
    <>
    <App/>
    </>,document.getElementById("root")
)