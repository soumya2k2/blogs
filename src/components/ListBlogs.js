import { useEffect, useState } from "react";

function ListBlogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://dblogr.herokuapp.com/api/blogs');
            let data = await response.json();
            setBlogs(data)
        }
        fetchData();
    }, [])
    const renderBlogs = blogs.map((blog) => {
        return <div class="card mb-3">
            <img class="card-img-top" src={blog.image} alt="..." />
            <div class="card-body">
                <div class="card-title d-flex">
                    <h5>{blog.title}</h5>
                    <span class="ms-auto text-muted">Submitted by {blog.author.username}</span>
                </div>
                <p class="card-text">{blog.content.substring(0, 100)}...</p>
                <a href="/blogs/<%= blog._id %>" class="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>


    })
    return (
        <div>

            <h2>All Blogs</h2>
            {renderBlogs}

        </div>
    )
}
export default ListBlogs;