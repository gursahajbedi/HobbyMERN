import {createContext,useState} from 'react'

export const DataContext=createContext([])

// eslint-disable-next-line react/prop-types
export const DataProvider=({children})=>{
    const [data,setdata]=useState([])

    return(
        <DataContext.Provider value={{data,setdata}}>
            {children}
        </DataContext.Provider>
    )
}