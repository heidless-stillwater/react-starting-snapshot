import { useState } from 'react';

import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal.jsx'

import classes from './PostsList.module.css'

function PostsList({ isPosting, onStopPosting }) {
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModalHandler}>
    //     <NewPost 
    //         onAuthorChange={authorChangeHandler} 
    //         onBodyChange={bodyChangeHandler}
    //     />
    // </Modal> 
    // }


    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onAuthorChange={authorChangeHandler} 
                        onBodyChange={bodyChangeHandler}
                        onCancel={onStopPosting}
                    />
                </Modal> 
            )}

            <ul className={classes.posts}>       
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author='Max' body='test body' />
            </ul>
        </>
    );
}

export default PostsList;
