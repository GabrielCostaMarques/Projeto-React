import { useState,useEffect } from "react";


//custom hook

export const useFetch = (url)=>{
    const [data,setData]=useState(null)

    //refatorando post 

    const [config, setConfig]=useState(null)
    const [method,setMethod]=useState(null)
    const [callFetch,setCallFetch]=useState(false)

    const [loading, setLoading]=useState(false)

    const httpConfig=(data,method)=>{
        if (method=="POST") {
            setConfig({
                method,
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(data)
            });
            setMethod(method)
        }
    }

    useEffect(()=>{

        const fetchData = async()=>{
             //loading
             setLoading(true)
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
            setLoading(false)
        };
        fetchData()
    },[url,callFetch])

    //refatorando post 

    useEffect(()=>{

        const HttpRequest=async()=>{
            if (method==="POST") {
                let fetchOptions=[url,config]
                const res= await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        HttpRequest()
    },[config,method,url])

    return{data,httpConfig,loading};
}