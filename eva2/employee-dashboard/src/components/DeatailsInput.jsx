import React from 'react'
import { useState} from 'react';

export const DeatailsInput = () => {

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [salary, setSalary] = useState();
    

    const addEmployee =()=>{

        let payload = {

            name,
            gender,
            department,
            role,
            salary
        }

        fetch("  http://localhost:3001/employees",{

            method: "POST",
            body: JSON.stringify(payload),
            headers: {"content-type":"Application/json"}
        })
        .then((res)=>console.log(res))

        
    }

  return (
    <>
        <div>
            <div>
                 <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.currentTarget.value) }/>
            </div>

            <div>
                <input type="text" placeholder='Gender' value={gender} onChange={(e)=> setGender(e.currentTarget.value) }/>
            </div>

            <div>
                 <input type="text" placeholder='Department' value={department} onChange={(e)=> setDepartment(e.currentTarget.value) }/>
            </div>

            <div>
                 <input type="text" placeholder='Role' value={role} onChange={(e)=> setRole(e.currentTarget.value) }/>
            </div>

            <div>
            <input type="number" placeholder='Salary' value={salary} onChange={(e)=> setSalary(e.currentTarget.value) }/>
            </div>
        </div>

        <button onClick={()=> addEmployee()}>ADD EMPlOYEE</button>
    
    </>
  )
}
