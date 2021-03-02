import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    return (
        <main>
            <Post post={blogs}/>
        </main>
    )
}

export default Home
