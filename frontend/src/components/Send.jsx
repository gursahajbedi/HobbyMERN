import { useContext, useState } from "react"
import { DataContext } from "../context/datacontext"
import axios from "axios"

export const Send=(prop)=>{
    const {data}=useContext(DataContext)
    const [reciever,setreciever]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://hobbymern.onrender.com/api/responses/send",{id:data,reciever:reciever})
        prop.setshow(false);
    }
    return(
        <>
            <div className="container bg-light">
                <button onClick={()=>{prop.setshow(false)}} className="btn btn-primary mt-5">Close</button>
                <div className="display-4 my-5">Send Record Details To Someone</div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group pt-3">
                            <label className="h2">From :</label>
                            <input type='email' value={"bedigursahaj@gmail.com"} className="form-control" disabled/>
                        </div>
                        <div className="form-group py-3">
                            <label className="h2">Send To :</label>
                            <input type='email' className="form-control" onChange={(e)=>{setreciever(e.target.value)}}/>
                        </div>
                        <button type='submit' className="mb-5 btn btn-success"> Send Selected Items to {reciever?(reciever):"Reciever"} ?</button>
                    </form>
                </div>
            </div>
        </>
    )
}