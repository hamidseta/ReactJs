import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('dimple')

    const handleSubmit = (e) =>{
        e.preventDefault();

        const blog = {title,body,author};
        console.log(blog)

        fetch('http://localhost:8000/Blogs/',{
            method :'POST',
            headers :{ "Contetent-Type" : "application/json" },
            body :JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog is added')
        })

    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog Title :</label>
                <input  type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Blog Body :</label>
                <textarea  type="text" required value={body} onChange={(e) => setBody(e.target.value)}  />

                <label>Blog Author :</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}  >
                    <option value="mario" >mario</option>
                    <option value="dimple" >dimple</option>
                    <option value="shahrukh" >shahrukh</option>
                </select>
                <button> Add Blog </button>
                {title} <br></br>
                {body} <br></br>
                {author} 
            </form>
        </div>
    )
}

export default Create;