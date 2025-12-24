import { useParams, useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/storage";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id === Number(id));

  const deleteBlog = () => {
    saveBlogs(blogs.filter((b) => b.id !== blog.id));
    navigate("/");
  };

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="container">
      {blog.image && <img className="detail-img" src={blog.image} />}
      <h1>{blog.title}</h1>
      <h3>{blog.subtitle}</h3>
      <p><b>{blog.author}</b> • {blog.date} • {blog.readTime}</p>
      <p>{blog.content}</p>
      <button className="delete" onClick={deleteBlog}>Delete Blog</button>
    </div>
  );
};

export default BlogDetails;
