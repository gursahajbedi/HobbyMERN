import axios from "axios"
import { useState } from "react"

export const Create=(prop)=>{
    const [email,setemail]=useState()
    const [mobile,setmobile]=useState()
    const [name,setname]=useState()
    const [hobbies,sethobbies]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://hobbymern.onrender.com/api/responses/create',{
            email:email,
            phone:mobile,
            name:name,
            hobbies:hobbies
        })
        prop.setshow(false)
    }

    return(
        <div className="bg-light container">
            <button onClick={()=>{prop.setshow(false)}} className="btn btn-primary mt-5">Close</button>
            <div className="display-4 my-5">Add New Record Into DB</div>
            <form onSubmit={handleSubmit}>
              <div className="form-group pt-3">
                <label className="h2">Email address</label>
                <input type="email" className="form-control" onChange={(e)=>(setemail(e.target.value))}/>
              </div>
              <div className="form-group pt-3">
                <label className="h2">Mobile</label>
                <input type="text" className="form-control" onChange={(e)=>{setmobile(e.target.value)}}/>
              </div>
              <div className="form-group pt-3">
                <label className="h2">Name</label>
                <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}/>
              </div>
              <div className="form-group py-3">
                <label className="h2">Hobbies</label>
                <input type="text" className="form-control" onChange={(e)=>sethobbies(e.target.value)}/>
              </div>
              <button type="submit" className="mb-5 btn btn-success">Submit</button>
            </form>
        </div>
    )
}