import { DataContext } from "../context/datacontext"
import {useEffect,useContext, useState} from 'react'
import axios from 'axios'

export const Table =(prop)=>{
    const [Data,setData]=useState([])
    const {data,setdata}=useContext(DataContext)
    const handleCheck=(e)=>{
        if(e.target.checked==true){
            setdata((data)=>[...data,e.target.value])
        }
        else{
            const newdata = data.filter(item => item !== e.target.value)
            setdata(newdata);
        }
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/api/responses/read').then((res)=>{
            const responses=res.data
            setData(responses);
            console.log(data)
        })       
    },[Data,data])
    return(
        <div>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col"></th>  
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope='col'>Hobbies</th>
                </tr>
              </thead>
              <tbody>
                {
                    Data.map((element)=>(
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <div className="mt-2">
                                <input type="checkbox" style={{height:'35px'}} className="form-control" value={element['_id']} onChange={handleCheck}/>
                            </div>
                            <td>{element.name}</td>
                            <td>{element.phone}</td>
                            <td>{element.email}</td>
                            <td>{element.hobbies}</td>
                            <td><button className="btn-sm btn-outline-light" onClick={()=>{prop.setedit(true);prop.setactiveid(element)}}>Edit</button></td>
                        </tr>
                    ))
                }
              </tbody>
            </table>
        </div>
    )
}