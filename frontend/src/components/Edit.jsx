import axios from "axios"
import { useState } from "react"



export const Edit=(prop)=>{
    const [email,setemail]=useState()
    const [mobile,setmobile]=useState()
    const [name,setname]=useState()
    const [hobbies,sethobbies]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`https://hobbymern.onrender.com/api/responses/update/${prop.id['_id']}`,{
            email:email,
            phone:mobile,
            name:name,
            hobbies:hobbies
        }).then(()=>{
            prop.setshow(false)
        })
    }
    return(
        <div className="bg-light container">
            <button onClick={()=>{prop.setshow(false)}} className="btn btn-primary mt-5">Close</button>
            <div className="display-4 my-5">Edit Record</div>
            <form onSubmit={handleSubmit}>
              <div className="form-group pt-3">
                <label >Email address</label>
                <input type="email" className="form-control" onChange={(e)=>(setemail(e.target.value))} placeholder={prop.id.email}/>
              </div>
              <div className="form-group pt-3">
                <label >Mobile</label>
                <input type="text" className="form-control" onChange={(e)=>{setmobile(e.target.value)}} placeholder={prop.id.phone}/>
              </div>
              <div className="form-group pt-3">
                <label >Name</label>
                <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} placeholder={prop.id.name}/>
              </div>
              <div className="form-group py-3">
                <label >Hobbies</label>
                <input type="text" className="form-control" onChange={(e)=>sethobbies(e.target.value)} placeholder={prop.id.hobbies}/>
              </div>
              <button type="submit" className=" mb-5 btn btn-success">Submit</button>
            </form>
        </div>
    )
}