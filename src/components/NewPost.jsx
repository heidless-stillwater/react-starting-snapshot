import classes from './NewPost.module.css';

function NewPost(props) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
            </p>
        </form>
    );
}

export default NewPost;