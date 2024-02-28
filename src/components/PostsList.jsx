import Post from './Post.jsx'
import classes from './PostsList.module.css'

function PostsList(props) {
    return (
        <ul className={classes.posts}>       
            <Post author='test author' />
            <Post author='havana' />
            <Post author='author 1' />
        </ul>
    );
}

export default PostsList;
