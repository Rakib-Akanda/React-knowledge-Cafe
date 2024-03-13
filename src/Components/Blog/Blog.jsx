import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-1'>
            <img className='w-full mb-8 rounded-2xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-6 mb-3'>
                    <img  src={author_img} alt="" className='w-14' />
                    <div >
                        <h3 className='text-2xl mb-1'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}  min read</span>
                    <button onClick={() => handleBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} </a></span> )}
            </p>
            <button onClick={() => handleReadingTime(reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
    
}
export default Blog;