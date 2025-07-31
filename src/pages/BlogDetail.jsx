import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from './blogs/blogData';
import Header from '../components/header';
import Footer from '../components/footer';
import './BlogDetailStyles.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (!blog) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="blog-not-found">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blogs" className="back-to-blogs">Back to Blogs</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <div className="blog-detail-header">
        <div className="container">
          <Link to="/blogs" className="back-link">
            ← Back to Blogs
          </Link>
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            <span className="blog-date">{formatDate(blog.date)}</span>
            <span className="blog-author">by {blog.author}</span>
          </div>
        </div>
      </div>

      <main className="container">
        <div className="blog-detail-content">
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          
          <div className="blog-body" 
               dangerouslySetInnerHTML={{ __html: blog.content }}>
          </div>
          
          <div className="blog-footer">
            <Link to="/blogs" className="back-to-blogs">
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail; 