// import React from "react";
// let TodoList=(props)=>{
  
//         return(
//         <>
//         <div className="list">
//         <button onClick={()=>{
//             props.onSelect(props.id)
//         }} className="btn-minus"> - </button>
//         <li className="list-items">{props.text}</li>
//         </div>
//         </>
//         )
// }

// export default TodoList;

import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
let ToDoList=(props)=>{
    return(
    <>
      <div className="list" >
         <button onClick={()=>{
             props.onSelect(props.id)
         }} > <DeleteIcon/></button>
    <li>{props.text}</li>
    </div>
    </>)
}
export default ToDoList;

