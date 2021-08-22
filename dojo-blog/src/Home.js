import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home =() =>{
    const [blogs,setBlogs] = useState(null);
    const [isPending,setPending] =useState(true);


    useEffect(()=>{
        console.log('use effect ran')
        fetch('http://localhost:8000/Blogs')
        .then(res=>{
            return res.json();
        }).then((data)=>{
            setBlogs(data)
            setPending(false);
        }).catch(err=>{
            console.log(err.message)
        })
    },[]);
    
    return (
        <div className="home">
            <h2>Home</h2>
            { isPending && <div> Loading </div> }
            {blogs && <BlogList blogs={blogs} title={'All the blogs!'} />}
        </div>
    )
}

export default Home;