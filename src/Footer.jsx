import React from "react";
let Footer=()=>{
    let date=  new Date();
    let curYear=date.getFullYear();
    return(
    <>
    <footer className="footer">copyrights Ⓒ {curYear}</footer>
    </>
    )
}
export default Footer;