import { useState } from 'react';

import PostsList from './components/PostsList.jsx';
import MainHeader from './components/MainHeader.jsx';

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler} 
        />
      </main>
    </>
  );
} 

export default App;
