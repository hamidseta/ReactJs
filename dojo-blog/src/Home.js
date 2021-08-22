import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home =() =>{
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'This is new website created in react JS',author:'hamid',id:1},
        {title:'Myntra Site',body:'Myntra is shopping site',author:'bansal',id:2},
        {title:'Amazon site',body:'Amazon is a also a leading shopping site',author:'Jac',id:3},
        {title:'Filpcart site',body:'This is new website created in react JS',author:'Bandal bhai',id:4}        
    ])
    
    const handleDelete =(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran')
    })
    
    return (
        <div className="home">
            <h2>Home</h2>
            <BlogList blogs={blogs} title={'All the blogs!'} handleDelete={handleDelete}/>
        </div>
    )
}

export default Home;