import React, { useState, useEffect } from 'react'

import axios from 'axios'

function AxiosData() {

    const [post, setPost] = useState(null);
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            console.log(response.data);
            setPost(response.data);
        }
        );
    }, []);
    return (
        <div>
            <h1>{post.id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            
        </div>
    )
}

export default AxiosData