import React from "react";

function Links (props){
    return(
        <div>
        <h3>Links</h3>
  {props.github && (
    <a href={props.github} target="_blank" rel="noopener noreferrer">
      {props.github}
    </a>
  )}
  < br/>
  {props.linkedin && (
    <a href ={props.linkedin} target="_blank" rel="noopener noreferrer">
        {props.linkedin}
    </a>
  )}
  </div>
    )
}
export default Links;



