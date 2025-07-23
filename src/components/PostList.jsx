import { useEffect, useState } from "react";
import axios from "axios";
const BookList = () => {
const [bookList, setBookList] = useState([]);

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/post');
      console.log( response.data);
      setBookList(response.data);
        
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
    fetchBooks();
}, []);

  return (
    <div>
      <h2>Post List</h2>
      {bookList.length > 0 ? (
        <ul>
          {bookList.map((book) => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default BookList;