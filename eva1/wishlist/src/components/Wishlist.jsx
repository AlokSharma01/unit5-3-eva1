import React from 'react'
import { useState } from 'react';

export const Wishlist = () => {

    let [item, setItem] = useState("");
    let [list, setList] = useState([]);


    const additem =()=>{

        let payload ={

            todo: item,
        }

        let updatedList = [...list,payload];

        setList(updatedList);

        setItem("")

    }
    console.log(list)
  return (
    <div>
        <h1>1. Wishlist</h1>

        <input type="text"  value={item}
            onChange={(e)=>{

                setItem(e.currentTarget.value);
            }
        
                
            }
        />

        <button onClick={additem}> ADD</button>

        {
            (list.length>3)? 

             <h1>You cannot add more than 3 items to wishlist</h1>
            :
            
            list.map(({todo})=>(

                <div>{todo}</div>
            ))
        }
    </div>
  )
}
