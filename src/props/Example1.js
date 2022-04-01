function Tool(props) {
    
    const tool = props.tool;
      return (
        <div>
          <h1>My name is {props.name}.</h1>
          <p>My favorite design tool is {tool}.</p>
        </div>
      );
  }
  
  export default Tool
  // without destructuring//