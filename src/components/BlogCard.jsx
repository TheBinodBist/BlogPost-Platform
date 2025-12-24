const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      {blog.image && <img src={blog.image} alt="header" />}
      <h2>{blog.title}</h2>
      <p>{blog.subtitle}</p>
      <span>{blog.category} • {blog.readTime}</span>
    </div>
  );
};

export default BlogCard;
