import { useState,useEffect } from "react"



const useFetch =(url) =>{

    const [data,setdata] = useState(null);
    const [isPending,setPending] =useState(true);
    const [error,setError] =useState(null);


    useEffect(()=>{
        console.log('use effect ran')
        fetch(url)
        .then(res=>{
            return res.json();
        }).then((data)=>{
            setdata(data)
            setPending(false);
        }).catch(err=>{
            setError(err.message)
            setPending(false);
        })
    },[url]);

    return {data,isPending,error}
}


export default useFetch;