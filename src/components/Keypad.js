import React from "react";
// Code Keypad Component Here

function Keypad(){
    function handleChange(){
        console.log('Entering password...')
    }

    return(
        <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="enter password"
        />
    )
}

export default Keypad;
