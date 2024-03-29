import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0);
  const handleBookmark =blog =>{
    const alreadyBookmarked = bookmarks.some(bookmark => bookmark.id === blog.id);
    if(!alreadyBookmarked){
      setBookmarks([...bookmarks, blog]);
    }
  }
  const handleReadingTime = (time, id) =>{
    setReadingtime(readingTime + time);
    // remove the read blog from bookmark
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
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
