import { useState } from "react"
import { backendClient } from '../clients/backendClients';



const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('fullapp-token'); 

      console.log("TOKEN", token);
      
      const response = await backendClient.post("/posts", formData,{
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      alert("Post created successfully!");
      
       setFormData({ title: "", body: "" });
      console.log(response.data);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          required
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="body"
          placeholder="Write your post here..."
          value={formData.body}
          required
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;