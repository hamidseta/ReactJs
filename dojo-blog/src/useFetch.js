import { useState,useEffect } from "react"



const useFetch =(url) =>{

    const [data,setdata] = useState(null);
    const [isPending,setPending] =useState(true);
    const [error,setError] =useState(null);


    useEffect(()=>{
        console.log('use effect ran')
        const abortConst = new AbortController();
        setTimeout(()=>{
            fetch(url,{ signal : abortConst.signal })
            .then(res=>{
                if(!res.ok){
                    throw Error("Error is occured!")
                }
                return res.json();
            }).then((data)=>{
                setdata(data)
                setPending(false);
            }).catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted')
                }else{
                    setError(err.message)
                    setPending(false);
                }
            })
        },2000);

        return ()=> abortConst.abort();
    },[url]);

    return {data,isPending,error}
}


export default useFetch;