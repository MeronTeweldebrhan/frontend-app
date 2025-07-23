import { useState } from "react"
import axios from 'axios'



const PostForm =()=>{
const [formData,setFormData]=useState({
    title:"",
    author:""
})

const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value
    })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/post', formData);
    alert('Post created successfully!');
    setFormData({ title: '' ,author: '' }); // Reset form data
    console.log(response.data);
  } catch (error) {
    console.error('Error creating post:', error);
    alert('Failed to create book. Please try again.');
  }
};
return(
  <div>
    <form onSubmit={handleSubmit}>
   <input type ="text" name='title'placeholder="title" value={formData.title|| ""} required onChange={handleChange}></input>

    <input type ="text" name='author' placeholder="author" value={formData.author|| ""} onChange={handleChange}></input>
   <button type="submit" >Add Post</button>
    </form>

    </div>
)
}

export default PostForm