import { useState } from 'react';

import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal.jsx'

import classes from './PostsList.module.css'

function PostsList(props) {
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost 
                    onAuthorChange={authorChangeHandler} 
                    onBodyChange={bodyChangeHandler}
                />
            </Modal>
            <ul className={classes.posts}>       
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author='Max' body='test body' />
            </ul>
        </>
    );
}

export default PostsList;
