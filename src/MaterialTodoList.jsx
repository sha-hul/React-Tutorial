import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
let MaterialTodoList=(props)=>{
    let [line,setline]=useState(false);
    let cutit=()=>{
        setline(true);
    }
    return(
    <>
    <div className="list">
    <DeleteIcon onClick={cutit}  className="btn-minus"/>
    <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
    </div>
    </>
    )
}
export default MaterialTodoList;