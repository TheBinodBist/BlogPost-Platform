import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/storage";

const BlogForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    content: "",
    category: "",
    author: "",
    readTime: "",
    image: ""
  });

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = getBlogs();

    const newBlog = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };

    saveBlogs([newBlog, ...blogs]);
    navigate("/");
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <input placeholder="Title" required onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Subtitle" onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
      <input placeholder="Author Name" onChange={(e) => setForm({ ...form, author: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Read Time (e.g. 5 min)" onChange={(e) => setForm({ ...form, readTime: e.target.value })} />
      <input type="file" accept="image/*" onChange={handleImage} />
      <textarea rows="8" placeholder="Blog Content" onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button>Publish Blog</button>
    </form>
  );
};

export default BlogForm;
