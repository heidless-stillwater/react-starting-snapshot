import { useState } from 'react';

import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal.jsx'

import classes from './PostsList.module.css'

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal> 
            )}

            <ul className={classes.posts}>       
                {/* {posts.map((post) => <Post author={post.author} body={post.body} />)} */}
                {posts.map((post) => <Post />)}
            </ul>
        </>
    );
}

export default PostsList;
