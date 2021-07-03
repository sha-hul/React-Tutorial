import React from 'react';
import ReactDOM from 'react-dom';
var n='Shahul';
var date=new Date().toLocaleDateString();
var time=new Date().toLocaleTimeString();
ReactDOM.render(<>
<h1>My name is {n}</h1>
<p>The Current Time ={date}</p>
<p>The Current Date ={time}</p>
</>,document.getElementById('chg2'))