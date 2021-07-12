import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
let Kudulist=(props)=>{
  
    return(
        <li><DeleteIcon onClick={()=>{
            props.onSubmit(props.id)
        }} className="btn-minus"/>{props.text}</li>
    )
}
export default Kudulist;