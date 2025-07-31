import { Link } from 'react-router-dom';
import './BlogCardStyles.css';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-excerpt">{blog.excerpt}</p>
        <div className="blog-card-meta">
          <span className="blog-card-date">{formatDate(blog.date)}</span>
          <span className="blog-card-author">by {blog.author}</span>
        </div>
        <Link to={`/blogs/${blog.slug}`} className="blog-card-link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard; 