// import React from "react";
// import Links from "./Links";


// function About(props) {
//   return (
//     <div id="about">
//       <h2>About Me <br/> I made this</h2> 
//       <p>I made this</p>
      
//       {props.bio && props.bio.trim() !==""&& <p>{props.bio}</p>}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
  
//      <Links github={props.github} linkedin={props.linkedin} />
     
//     </div>
//   );
// }

// export default About;

import React from "react";
import Links from "./Links";

function About(links,bio) {
  return (
    <div id="about">
      <h2>About Me </h2> 
      <p>I made this</p>
      
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* add your <Links /> component here */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;

