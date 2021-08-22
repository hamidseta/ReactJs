import { useState } from "react";

const Home =() =>{
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'This is new website created in react JS',author:'hamid',id:1},
        {title:'Myntra Site',body:'Myntra is shopping site',author:'bansal',id:2},
        {title:'Amazon site',body:'Amazon is a also a leading shopping site',author:'Jac',id:3},
        {title:'Filpcart site',body:'This is new website created in react JS',author:'Bandal bhai',id:4}        
    ])
    
    
    return (
        <div className="home">
            <h2>Home</h2>
            {blogs.map((blog)=>(
                <div className="blog-previw" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    )
}

export default Home;