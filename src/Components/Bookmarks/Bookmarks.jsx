import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-9 pt-4 rounded-2xl">
        <div>
            <h3 className="text-4xl text-center">Reading Time: {readingTime}</h3>
        </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
