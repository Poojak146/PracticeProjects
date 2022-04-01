import React,{useState} from 'react'

function Example1(){

var [title, setTitle]= useState("beginning of practice")
var handleclick = () => {
    setTitle("welcome")
}
//var val = "Lets start"
// var val = "welcome to is practice session "
//   console.log (useState(val))
//myName==="start"? setMyName('123'):setMyName("start")

console.log(title)

    return(
<React.Fragment>
    <h3>practice session</h3>
    <p> {title} </p> 
    <button  onClick={handleclick}>click me </button>

</React.Fragment>
    )
}
export default Example1 