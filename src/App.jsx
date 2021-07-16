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


// Actual React Events

// import React, { useState } from "react";
// let App=()=>{
//     let text='life';
//     let[curText,upText]=useState(text);
//     let bgcolor='#87a0f9';
//     let[curColor,upColor]=useState(bgcolor)
//     console.log(curColor);
//     let onclick=()=>{
//         upColor('violet');
//         upText('Be Aware 🤲')
//     }
//     let ondblclick=()=>{
//         upColor('orange');
//         upText('Enjoy 😄')
//     }
// return(
//     <>
//     <div className='events' style={{backgroundColor:curColor}}>
//     <button onClick={onclick} onDoubleClick={ondblclick}>{curText}</button>
//     </div>
//     </>
// )
// }
//  export default App;

// #34 Form Validation 

// import React, { useState } from "react";

// let App=()=>{
//     let[curValue,upValue]=useState();
//     let[curText,upText]=useState("");
//     let inputEvent=(props)=>(
//         upValue(props.target.value)
//         )
//     let onSubmit=(event)=>
//     {
//        event.preventDefault();
//         upText(curValue)
//     }
//     console.log("click");
//     console.log(curValue)
// return(
// <>
// <div className='input-form'>
// <form onSubmit={onSubmit}>
// <div>
// <h1>{curText}</h1>
// <input type='text' value={curValue} placeholder='Enter your name..' onChange={inputEvent}/>
// <button  type="submit"> Send 🖐️</button>
// </div>
// </form>
// </div>
// </>
// )
// }
// export default App;

// #35 login Form

// import React, { useState } from "react";
// let App=()=>{
//     let [curValue,upValue]=useState();
//     let [curText,upText]=useState();
//     let[curVal,upVal]=useState();
//     let[curTex,upTex]=useState();
//     let inputName=(event)=>{
//         upValue(event.target.value)
//     }
//     let inputPassword=(event)=>{
//         upVal(event.target.value)
//     }
//     let show=(event)=>{
//         event.preventDefault();
//         upText(curValue);
//         upTex(curVal);
//     }
//     return(
//         <>
//         <div className="input-form">
//         <form onSubmit={show} >
//             <div>
//                 <h1>{curText}{curTex}</h1>
//                 <input type="text" placeholder="Enter the name..." onChange={inputName} />
//                 <input type="password" placeholder="Enter the password" onChange={inputPassword}/>
//                 <button type="submit" >Send 🙋 </button>
//             </div>
//         </form>
//         </div>
//         </>
//     )
// }

// export default App;


// original method withour spread operator


// import React, { useState } from "react";
// let App=()=>{
//     let [fullForm,upValue]=useState(
//         {
//             fname:"",
//             lname:"",
//             email:"",
//             number:""
//         }
//     );
//    let inputEvent=(event)=>{
//    var value=event.target.value;
//    var name=event.target.name;
//    upValue(
//        (preValue)=>{
//            if(name==="fname"){
//                return{
//                    fname: value,
//                    lname : preValue.lname,
//                    email : preValue.email,
//                    number : preValue.number
//                }
//            }
//            else if(name==="lname"){
//             return{
//                 fname: preValue.fname,
//                 lname : value,
//                 email : preValue.email,
//                 number : preValue.number
//             }
//         }
//         else if(name==="email"){
//             return{
//                 fname: preValue.fname,
//                 lname : preValue.lname,
//                 email : value,
//                 number : preValue.number
//             }
//         }
//         else if(name==="number"){
//             return{
//                 fname: preValue.fname,
//                 lname : preValue.lname,
//                 email : preValue.email,
//                 number : value
//             }
//         }
//        }
//    )
//    }
//     let onSubmit=(event)=>{
//         event.preventDefault();
//     }
//     return(
//     <>
//     <div className="input-form">
//           <form onSubmit={onSubmit} >  
//            <div>
//                 <h1>{fullForm.fname}{fullForm.lname}  </h1>
//                 <h4>{fullForm.email}</h4>
//                 <h4>{fullForm.number}</h4>
//                     <input type="text"
//                     value={fullForm.fname} 
//                     name="fname"
//                     placeholder="Enter the FirstName" 
//                     onChange={inputEvent}
//                     />
//                     <input type="text"
//                     value={fullForm.lname} 
//                     name="lname"
//                      placeholder="Enter the LastName" 
//                      onChange={inputEvent}
//                       />
//                        <input type="email"
//                     value={fullForm.email} 
//                     name="email"
//                      placeholder="Enter the email" 
//                      onChange={inputEvent}
//                       />
//                        <input type="number"
//                     value={fullForm.number} 
//                     name="number"
//                      placeholder="Enter the LastName" 
//                      onChange={inputEvent}
//                       />
//                     <button type="submit" >Send 😄</button>
//             </div>
//             </form>
//     </div>
//     </>
//     )
// }
// export default App;


// using Spread Operator


// import React, { useState } from "react";
// let App=()=>{
//     let [fullForm,upValue]=useState(
//         {
//             fname:"",
//             lname:"",
//             email:"",
//             number:""
//         }
//     );
//    let inputEvent=(event)=>{
// //    var value=event.target.value;
// //    var name=event.target.name;
// const{value,name}=event.target
//    upValue(
//        (preValue)=>{
//            console.log(preValue)
//            return{
//                ...preValue,
//                [name]:value
//            }
//        }
//    )
//    }
//     let onSubmit=(event)=>{
//         event.preventDefault();
//     }
//     return(
//     <>
//     <div className="input-form">
//           <form onSubmit={onSubmit} >  
//            <div>
//                 <h1>{fullForm.fname}{fullForm.lname}  </h1>
//                 <h4>{fullForm.email}</h4>
//                 <h4>{fullForm.number}</h4>
//                     <input type="text"
//                     value={fullForm.fname} 
//                     name="fname"
//                     placeholder="Enter the FirstName" 
//                     onChange={inputEvent}
//                     />
//                     <input type="text"
//                     value={fullForm.lname} 
//                     name="lname"
//                      placeholder="Enter the LastName" 
//                      onChange={inputEvent}
//                       />
//                        <input type="email"
//                     value={fullForm.email} 
//                     name="email"
//                      placeholder="Enter the email" 
//                      onChange={inputEvent}
//                       />
//                        <input type="number"
//                     value={fullForm.number} 
//                     name="number"
//                      placeholder="Enter the LastName" 
//                      onChange={inputEvent}
//                       />
//                     <button type="submit" >Send 😄</button>
//             </div>
//             </form>
//     </div>
//     </>
//     )
// }
// export default App;

// Todo list


// import React, { useState } from "react";
// import TodoList from "./TodoList";
// let App=()=>{
//     let[setItem,upItem]=useState("");
//     let[setItem1,upItem1]=useState([]);
//     let todoList=(event)=>{
//       upItem(event.target.value)
//     }
//     let addItem =(event)=>{
//        upItem1((oldItems)=>{
//            return[...oldItems,setItem]
//        }
//        )
//        upItem('')
//     }
//     let deleteItem=(id)=>{
//         console.log("Show")
//         upItem1((oldItems)=>{
//             return oldItems.filter((arrElement,index)=>{
//                 return index != id
//             });
//         } )
//     }
//     return(
//         <div className="main">
//             <div className="center">
//             <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <div className="type">
//                 <input type="text" 
//                 value={setItem} 
//                 placeholder="Add a item" 
//                 onChange={todoList}
//                 autoComplete='off'
//                 />
//                 <button onClick={addItem} className="plus-btn">
//                     +
//                 </button>
//                 </div>
//                 <ol>
//                     {
//                         setItem1.map(
//                             function(val,index){
//                             return (<TodoList
//                             key={index}
//                             id={index}
//                             onSelect={deleteItem}
//                             text={val}/>)
//                             }
//                         )
//                     }
//                 </ol>
//             </div>
//         </div>
//     )
// }
// export default App;

// # To make a counter and with no negatuve value

// import React, { useState } from "react";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// let App=()=>{
//     let[curValue,upValue]=useState(0);
//     let increValue=()=>{
//         upValue(curValue+1)
//     }
//     let decreValue=()=>{
//        if( curValue>0){
//             upValue(curValue-1)
//        }
//         else {
//             return(alert("The Negative Value Does not Accepted"))
//         }
//     }
//     return(
//         <>
//         <h1 className="header">Counter</h1>
//         <div className="count">
//             <div>
//             <h1>{curValue}</h1>
//             <Tooltip title="Delete">
//             <Button className="decre" onClick={decreValue}><DeleteTwoToneIcon/></Button>
//             </Tooltip>
//             <Tooltip title="Add">
//             <Button className="incre" onClick={increValue}><AddCircleIcon/></Button>
//             </Tooltip>
//             </div>
//         </div>
//         </>
//     )
// }
// export default App;


// TodoList using the Material UI

// import React, { useState } from "react";
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import AddIcon from '@material-ui/icons/Add';
// import ToDoList from "./TodoList"
// let App=()=>{
//     let[curValue,upValue]=useState("");
//     let[curItem,upItem]=useState([])
//     let inputEvent=(event)=>{
//         upValue(event.target.value)
//     }
//     let showItem=()=>{
//         upItem((oldItem)=>{
//             return([...oldItem,curValue])
//         })
//         upValue(" ")
//     }
//     let delItem=()=>{
//         console.log('delete')
//     }
// return(<>
//         <div className="main">
//             <Card className="center">
//             <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <div className="type">
//                     <input type="text"  value={curValue} placeholder="Add a item" onChange={inputEvent}/>
//                     <Button className="plus-btn" onClick={showItem}><AddIcon className="plus-btn"/></Button>
//                 </div>
//                 <ol>
//                     {curItem.map(
//                        function (val,index){
//                             return( 
//                                 <ToDoList
//                                     text={val}
//                                     key={index}
//                                     id={index}
//                                     onSubmit={delItem}
//                                 />
//                                  )
//                         }
//                     )}
//                 </ol>
//             </Card>
//         </div>
//       </>)
// }
// export default App;



// Image next before

// import React, { useState } from "react";
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import Button from '@material-ui/core/Button';
// let App=()=>{
//     var store=['apple','orange','mango','banana']
// let [curImage,upImage]=useState()
// let prevImg=()=>{
//     var store=['apple','orange','mango','banana']
//     return( upImage(store.curImage[-1]))
// }
// let nextImg=()=>{
//     var store=['apple','orange','mango','banana']
//     return(upImage(curImage[+1]))
// }
// return(
//     <>
//     <h1 className="header">Image Slider</h1>
//     <div className="img_slider">
//         <div className="center">
//         <h2>{curImage}</h2> 
//         <div className="btn">
//        <Button onClick={prevImg}><SkipPreviousIcon/></Button>
//        <Button onClick={nextImg}><SkipNextIcon/></Button>
//        </div>
//         </div>
//     </div>
//     </>
// )
// }
// export default App;


// sunday practice

// import React from "react";
// let time=new Date().getHours();
// console.log(time)
// let greeting;
// if(time>=0&&time<=12){
//   greeting="Goood MOrning"
// }
// else if(time>=13&&time<=17){
//   greeting="Goood Afternoon"
// }
// else{
//   greeting="Goood Night"
// }
// let App=()=>{
//     return(
//     <>
//     <h1>Hi dude,{greeting}</h1>
//     </>
//     )
// }
// export default App;

// netflix project

// import React from "react";
// import Card from '@material-ui/core/Card';
// import series from "./series";
// let Series=(props)=>{
//     return(
//     <>
//       <Card style={{width:"200px",padding:"10px"}}>
//       <img src={props.img}/>
//       <h4>{props.title}</h4>
//       <h5>{props.site}</h5>
//       <button><a href={props.link}>watch</a></button>
//       </Card>
//     </>
//     )
// }
// // let shrink=series.map()
// let short=(val)=>{
//   return    (<Series
//   key={val.id}
//   img={val.img}
//   title={val.title}
//   site={val.site}
//   link={val.link}
// />)
// }
// let App=()=>{
//     return(
//     <>
//   {series.map(short)}
//     </>
//     )
// }

// export default App;

//  digital clock

// import React, { useState } from "react";
// let App=()=>{
//   let[curValue,upValue]=useState(new Date().toLocaleTimeString());
//   let clock=()=>{
//     upValue(new Date().toLocaleTimeString())
//   }
//     setInterval(clock,1000)
//     return(
//     <>
//     <h1>{curValue}</h1>
//     </>
//     )
// }
// export default App;

// counter increment decrement

// import React, { useState } from "react";
// let App=()=>{
//   let[curValue,upValue]=useState(0);
//   let incre=()=>{
//     upValue(curValue+1)
//   }
//   let reset=()=>{
//     upValue(0)
//   }
//   let decre=()=>{
//   if 
//   (curValue>0){
//     upValue(curValue-1)
//   }
//   else{
//     return alert("This is not permitted")
//   }
//   }
//     return(
//     <>
//     <h1>{curValue}</h1>
//      <button onClick={incre}>+</button>
//     <button onClick={reset}>Reset</button>
//     <button onClick={decre}>-</button>
//     </>
//     )
// }
// export default App;

// import { send } from "q";
// import React, { useState } from "react";
// let App=()=>{
//   let[curValue,upValue]=useState({
//     fname:"",
//     lname:""
//   });
//   let[curText,upText]=useState();
//   let inputEvent=(event)=>{
//     upValue(event.target.value)
//     upText(curValue);
//   }
//   let send=(event)=>{
//     event.preventDefault();
//   }
//   return(
//   <>
//   <form onSubmit={send}>
//   <h1></h1>
//   <input type="text" name="fname" value={curValue.fname} placeholder="Enter the fname" onChange={inputEvent}/>
//   <input type="text" name="lname" value={curValue.lname} placeholder="Enter the lname" onChange={inputEvent}/>
//   <button type="submit">Send</button>
//   </form>
//   </>
//   )
// }
// export default App;

//  form Validation

// import React, { useState } from "react";
// let App=()=>{
//     let [curValue,upValue]=useState({
//         fname:"",
//         lname:"",
//         email:"",
//         number:""
//     });
//     let [curVal,upVal]=useState(
//         {       
//          fname:"",
//         lname:"",
//         email:"",
//         number:""
//     }
//     );
//     let inputName=(event)=>{
//         let{value,name}=event.target;
//         upValue((preValue)=>{
//             return{
//                 ...preValue,
//                 [name]:value
//             }
//         })
//     }
//     let show=(event)=>{
//         //for remains stable 
//         event.preventDefault();
//         upVal(curValue)
//     }
//     return(
//         <>
//         <div className="input-form">
//         <form onSubmit={show} >
//             <div>
//                 <h1>{curVal.fname} {curVal.lname}</h1>
//                 <p>{curVal.email}</p>
//                 <p>{curVal.number}</p>
//                 <input type="text"
//                  value={curValue.fname}
//                  name="fname"
//                  placeholder="Enter the name..."
//                  onChange={inputName} />
//                 <input type="text"
//                  name="lname" 
//                  value={curValue.lname}
//               placeholder="enter your last name..."
//                  onChange={inputName}/>
//                   <input type="text"
//                  autoComplete="off"
//                  value={curValue.email}
//                  name="email"
//                  placeholder="Enter the email..."
//                  onChange={inputName} />
//                   <input type="number"
//                  autoComplete="off"
//                  value={curValue.number}
//                  name="number"
//                  placeholder="Enter the mobile number..."
//                  onChange={inputName} />
//                 <button type="submit" >Send 🙋 </button>
//             </div>
//         </form>
//         </div>
//         </>
//     )
// }

// export default App;


// todo list using materil ui

// import React, { useState } from "react";
// import AddIcon from '@material-ui/icons/Add';
// import Kudulist from "./Kudulist"
// let App=()=>{
//     let[item,upitem]=useState("");
//     let[item2,upitem2]=useState([]);
//     let inputItem=(event)=>{
//         upitem(event.target.value);
//     }
//     let showItem=()=>{
//         upitem2((preValue)=>{
//             return[...preValue,item]
//         })
//       upitem("")
//     }
//     let deleteItem=(id)=>{
//         upitem2((preValue)=>{
//             return preValue.filter((arrValue,index)=>{
//                 return index !== id;
//             })
//         })
//     }
//     return(
//     <>
//     <div className="main">
//         <div className="center">
//             <h1>TodoList</h1>
//             <div className="type">
//                 <input type="text" value={item} placeholder="Add a item" onChange={inputItem}/>
//                 <button className="plus-btn" onClick={showItem}><AddIcon/></button>
//             </div>
//             <ol>
//                 {/* <li>{item}</li> */}
//                 {item2.map((value,index)=>{
//                 return<Kudulist
//                 text={value} 
//                  key={index}  
//                  id={index} 
//                  onSubmit={deleteItem}
//                 />
//                 })}
             
//             </ol>
//         </div>
//     </div>
//     </>
//     )
// }
// export default App;

// TODO List using material UI

// import React, { useState } from "react";
// import Card from '@material-ui/core/Card';
// import { Button } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MaterialTodoList from "./MaterialTodoList"
// let App=()=>{
//     let[item,upitem]=useState();
//     let[item2,upitem2]=useState([]);
//     let inputValue=(event)=>{
//         upitem(event.target.value)
//     }
//     let addItem=()=>{
//         upitem2((oldItem)=>{
//             return([...oldItem,item])
//         })
//         upitem("")
//     }
//     return(
//     <>
//     <div className="main">
//     <Card className="center">
//         <h1>ToDo List</h1>
//         <div className="type">
//             <input type="text" value={item} placeholder="Add an item" onChange={inputValue}/>
//             <Button onClick={addItem}>
//                 <AddIcon/>
//             </Button>
//         </div>
//         <ol>
//             {/* <li>{item}</li> */}
//             {item2.map((val,index)=>{
//                 return <MaterialTodoList
//                     text={val}
//                     id={index}
//                     key={index}
//                 />
//             })}
//         </ol>
//     </Card>
//     </div>
//     </>
//     )
// }
// export default App;

// React Axios API pokemon

// using the fetch API MY Try

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const App = () => {
//     let[curValue,upValue]=useState("Select a Number");
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>response.json())
//         .then((data)=>console.log(data[curValue].name))
//         .catch((notFound)=>"Data Not Found (404)");
//     },[curValue])
//     return (
//      <>
//      <h1>{curValue}</h1>
//         <select onChange={(event)=>{
//             upValue(event.target.value);
//         }} value={curValue}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//         </select>
//      </>
//     )
// }
// export default App;

// Axios using Async and await


import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
    let[curValue,upValue]=useState();
    let[name,setName]=useState();
    let[moves,setMoves]=useState();
    let[moves1,setMoves1]=useState();
    useEffect(()=>{
        async function getData(){
            const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${curValue}`)
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length)
            setMoves1(res.data.moves[0].move.name)
        }
        getData();
    },[curValue])
    return (
     <>
          <h1>The Character Name : <span style={{color:"red"}} >{name}</span></h1>
          <h1>The Character Moves : <span style={{color:"red"}} >{moves}</span></h1>
          <h1>The Character Move 1 : <span style={{color:"red"}} >{moves1}</span></h1>
         <h1>The Character ID : <span style={{color:"red"}} >{curValue}</span></h1>
        <select onChange={(event)=>{
            upValue(event.target.value);
        }} value={curValue}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
        </select>
     </>
    )
}
export default App;