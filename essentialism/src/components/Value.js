import React from 'react'



const Value = props => {
    return (
      <div className="value">
        <h3>{props.title}</h3>
      
 
      
      </div>
    );
  };
  
  Value.defaultProps = {
    title: ''
  
  };
  
  export default Value;