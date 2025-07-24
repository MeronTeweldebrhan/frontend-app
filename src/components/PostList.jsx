import { useEffect, useState } from "react";
import { backendClient } from '../clients/backendClients';

const PostList = () => {
const [postList, setPostList] = useState([]);

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem('fullapp-token'); 

console.log("TOKEN", token);
      const response= await backendClient.get('/getposts/post', {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      setPostList(response.data);
        
    } catch (error) {
      console.error('Error fetching Posts:', error);
    }
  }
    fetchBooks();
}, []);

  return (
    <div>
      <h2>Post List</h2>
      {postList.length > 0 ? (
        <ul>
          {postList.map((post) => (
            <li key={post._id}>
              <strong>{post.title}</strong> by {post.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default PostList;