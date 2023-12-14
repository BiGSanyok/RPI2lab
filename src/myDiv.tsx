import React from 'react';

function royalDiv(image: string, name: string, text:string, reference:string){
    return(
        <div className={"royalDiv"} ref={reference}>
            <img src={image}/>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
}