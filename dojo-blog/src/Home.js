import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home =() =>{
    const [blogs,setBlogs] = useState(null)
    
    const handleDelete =(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran')
        fetch('http://localhost:8000/Blogs')
        .then(res=>{
            return res.json();
        }).then((data)=>{
            setBlogs(data)
        })
    },[]);
    
    return (
        <div className="home">
            <h2>Home</h2>
            {blogs && <BlogList blogs={blogs} title={'All the blogs!'} handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home;