import React, { useEffect, useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostList;
