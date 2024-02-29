import { useState } from 'react';

import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal.jsx'

import classes from './PostsList.module.css'

function PostsList({ isPosting, onStopPosting }) {
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} />
                </Modal> 
            )}

            <ul className={classes.posts}>       
                <Post author='Max' body='test body' />
            </ul>
        </>
    );
}

export default PostsList;
