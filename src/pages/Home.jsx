import { Link } from "react-router-dom";
import { getBlogs } from "../utils/storage";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const blogs = getBlogs();

  return (
    <div className="container">
      {blogs.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <BlogCard blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
