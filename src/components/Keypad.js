import React from 'react';


function Keypad (){

    function HandleChange(){
        console.log("Entering password...")
    return (
            <input type = "password" onChange={HandleChange}/>
        )
}
}

export default Keypad;