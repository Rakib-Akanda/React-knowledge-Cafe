import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0);
  const handleBookmark =blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  const handleReadingTime = time =>{
    setReadingtime(readingTime + time);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
