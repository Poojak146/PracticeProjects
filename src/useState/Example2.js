import React, { useState } from 'react';

function Example2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
     <div style={{height:"30px", width:"40px" ,backgroundColor:"grey",textAlign:"center"}}>
         <p> {count} </p>
     </div> 
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );  
}
export default Example2;