import React from 'react'
import { useState,useEffect } from 'react';
import style from "./Style.module.css"

export const DisplayCards = () => {

    const [employee, setEmloyee] = useState("");
    const [data, setData] = useState([])

    useEffect(() => {
    
      getEmployee();
    }, [data])

    const getEmployee =()=>{

        fetch("http://localhost:3001/employees")
        .then((res)=>res.json())
        .then((res)=>setData(res))


    }
    
  return (
    <>
    
        <div>
            <button>Show all department</button>
            <button>Show Marketing</button>
            <button>Show HR</button>
            <button>Show It</button>
            <button>Show Finance</button>
        </div><br/><br/>

        <div>
            <button>Sort by salary ascending</button>
            <button>Sort by Salary decending</button>
        </div>


        {
            data.map((item)=>(

                <div className={style.card} key={item.id}>

                    <div><b>Name:</b> {item.name}</div>
                    <div><b>Gender:</b> {item.gender}</div>
                    <div><b>Department:</b> {item.department}</div>
                    <div><b>Role:</b> {item.role}</div>
                    <div><b>Salary:</b> {item.salary}</div>
                </div>
            ))
        }
        
        
    </>
  )
}
