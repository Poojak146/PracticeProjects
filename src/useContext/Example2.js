
import React, { useState , useContext } from "react";
 

var userDetailContext = React.createContext(null);

 function UserDetailsComponent() {
  var [userDetails] = useState({
    name: "xyz",
    age: 62
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent userDetails={userDetails} />
    </userDetailContext.Provider>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent(props) {
  var contextData = useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <p>User Name: {contextData.name}</p>
      <p>User Age: {contextData.age}</p>
    </div>
  );
}


export default UserDetailsComponent
