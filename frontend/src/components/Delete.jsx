import { useContext} from "react"
import { DataContext } from "../context/datacontext"
import axios from "axios"

export const Delete=(prop)=>{
    const {data,setdata}=useContext(DataContext)

    const handleDelete=()=>{
        axios.post("https://hobbymern.onrender.com/api/responses/delete",{'id':data}).then((res)=>{
            console.log(res)
            prop.setshow(false)
            setdata([])
        })
    }

    return(
        <>
            <div className="bg-light container py-5">
                <div className="container h2 text-center">Are You Sure You Want To Delete These Items?</div>
                <div className="container mt-5 d-flex justify-content-around">
                    <button className="btn-lg btn-danger" onClick={()=>{handleDelete()}}>Yes</button>
                    <button className="btn-lg btn-primary" onClick={()=>{prop.setshow(false)}}>No</button>
                </div>
            </div>
        </>
    )
}