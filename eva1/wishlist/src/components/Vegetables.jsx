import React, { useState } from 'react'

export const Vegetables = () => {

    let [tomatoes, setTomatoes] = useState(10);
    let [potatoes, setPotatoes] = useState(8);
    let [carrots, setCarrots] = useState(5);
    let [onions, setOnions] = useState(7);



  return (
    <div>
        <h1>2. Vegetables</h1>

        <h2>tomatoes: {tomatoes}kg</h2>
        
        <button onClick={()=> setTomatoes(tomatoes +1)}>+</button>
        <button onClick={()=> setTomatoes(tomatoes -1)}>-</button>
        <br/><br/>


        <h2>potatoes: {potatoes}kg</h2>
        
        <button onClick={()=> setPotatoes(potatoes + 1)}>+</button>
        <button onClick={()=> setPotatoes(potatoes -1)}>-</button>
        <br/><br/>

        <h2>carrots: {carrots}kg</h2>
        
        <button onClick={()=> setCarrots(carrots +1)}>+</button>
        <button onClick={()=> setCarrots(carrots -1)}>-</button>
        <br/><br/>

        <h2>onions: {onions}kg</h2>
        
        <button onClick={()=> setOnions(onions +1)}>+</button>
        <button onClick={()=> setOnions(onions -1)}>-</button>
        <br/><br/>
        

    </div>
  )
}
