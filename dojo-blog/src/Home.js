import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home =() =>{

    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/Blogs')
    
    return (
        <div className="home">
            <h2>Home</h2>
            
            { isPending && <div> Loading </div> }
            {blogs && <BlogList blogs={blogs} title={'All the blogs!'} />}
        </div>
    )
}

export default Home;