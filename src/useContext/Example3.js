import ReactDOM from "react-dom";
import React, { useState, useContext } from "react";

const employeeContext=React.createContext();

 export default function App1(){

  const [employee,setEmployee]=useState({Id:101,Name:'Pragim',
                                Location:'Bangalore',Salary:12345});
  return(
    <div>
      <h2>Welcome to App Component...</h2>
      <employeeContext.Provider value={employee}>
          <Employee></Employee>
      </employeeContext.Provider>      
    </div>
  );
}

function Employee(){
  let context=useContext(employeeContext);

  return(
    <div>
      <h2> Employee Details...</h2>
      <p>
        <label>Employee ID : <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{context.Name}</b></label>
      </p>
      <Place></Place>
      <Salary></Salary>
      
    </div>
  );
}

function Salary(){
  let context=useContext(employeeContext);

  return(
    <div>
      <h2>Employee Salary Status...</h2>
      <p>
        <label>Employee ID : <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.Salary}</b></label>
      </p>
    </div>
  );
}

function Place (){
    let context =useContext(employeeContext)
    return(
        <div>
            <div>
                <p>Employee place: {context.Location}</p>
            </div>
        </div>
    )
}