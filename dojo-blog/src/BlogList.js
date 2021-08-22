const BlogList =({blogs, title}) =>{

    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-previw" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <h5>{blog.body}</h5>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;