import React, { useState } from "react";
import "./navbar.scss";

function Car(){
    const [name,setName]=useState("")
    const [allData,setAllData]=useState([])
    const [show,setShow]=useState(false)
    const [editIndex,setEditIndex]=useState()

    const handleAdd=()=>{
        if(name.length!==0){
        setAllData(newData=>[...newData,name])
        setName("")
        }
    }

    const handleDelete=(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }

    const handleEdit=(i)=>{
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate=()=>{
        allData.splice(editIndex,1,name)
        setAllData([...allData])
        setShow(false)
        setName("")
    }
    
    return(
        <div class="Main">
            <h1>Your Cars</h1>
            <img src="https://assets.stickpng.com/images/59db69be3752880e93e16efa.png"/>
            <br></br>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            {!show?<button onClick={handleAdd}>Add</button>:
            <button onClick={handleUpdate}>Update</button>}

            {
                allData.map((val,i)=>
                <div>
                    <h1>{val}</h1>
                    <button className="edit" onClick={()=>handleEdit(i)} >Edit</button>
                    <button className="delete" onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
        </div>
    );
}

export default Car;