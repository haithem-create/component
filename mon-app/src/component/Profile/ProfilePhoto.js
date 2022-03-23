import React from "react";

function Photo({pict}) {
    return (
        // <img src={process.env.PUBLIC_URL +  sans {}pict} height={200} width ={200}/> 
        <img src={pict} height={300} width ={200}/> 


    );
  }

export default Photo;