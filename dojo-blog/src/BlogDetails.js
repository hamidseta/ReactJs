import { useParams } from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails =() => {
    const{ id } = useParams()
    const {data:blog,isPending,error} = useFetch('http://localhost:8000/Blogs/' + id)
    return(
        <div className="blog-details">
            { isPending && <div> Loading... </div> }
            { error && <div> { error } </div> }
            { blog  &&  (
                <h2> { blog.title }</h2>
            )}
        </div> 
    )
}
export default BlogDetails