import { Table } from "./Table"
import { Navbar } from "./Navbar"
import {useState,useContext} from 'react'
import { DataContext } from "../context/datacontext"
import './Home.css'
import { Delete } from "./Delete"
import { Create } from "./create"
import { Edit } from "./Edit"
import { Send } from "./Send"


export const Home=()=>{
    const [err,seterr]=useState()
    const {data}=useContext(DataContext)
    const [delshow,setdel]=useState(false)
    const [sendshow,setsend]=useState(false)
    const [addshow,setadd]=useState(false)
    const [editshow,setedit]=useState(false)
    const [activeid,setactiveid]=useState()

    const handle=(set)=>{
        if(data.length!=0){
            seterr()
            set(true)
        }
        else{
            set(false)
            seterr("No items were selected.")
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="container mt-5">
                <div className="display-4 border-bottom mb-5">Responses</div>
                <div className="container d-flex justify-content-between mb-5">
                    <button className="btn btn-outline-danger" onClick={()=>{handle(setdel)}}>Delete Selected Items</button>
                    <button className="btn btn-outline-primary" onClick={()=>{handle(setsend)}}>Send Selected Items</button>
                    <button className="btn btn-outline-success" onClick={()=>{setadd(true);seterr()}}>Add New</button>
                </div>  
                <div className="text-center mb-5 text-danger">
                    {err && (<div className="h5">Error: {err}</div>)}
                </div>
                <div className="">
                    <Table setedit={setedit} setactiveid={setactiveid}/>
                </div>
                {delshow && (
                    <div className="overlap d-flex justify-content-center align-items-center">
                        <Delete setshow={setdel} className="overlap"/>
                    </div>
                )}
                {addshow && (
                    <div className="overlap d-flex justify-content-center align-items-center" >
                        <Create setshow={setadd}/>
                    </div>
                )

                }
                {sendshow && (
                    <div className="overlap d-flex justify-content-center align-items-center">
                        <Send setshow={setsend}/>
                    </div>
                )}
                {editshow && (
                    <div className="overlap d-flex justify-content-center align-items-center">
                        <Edit setshow={setedit} id={activeid} />
                    </div>
                )}

            </div>
        </div>
    )
}