import Header from "../components/header";
import Footer from "../components/footer";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "./blogs/blogData";
import "./BlogsStyles.css";

function Blogs() {
  const blogs = getAllBlogs();

  return (
    <>
      <Header />
      
      <div className="blogs-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, trends, and stories from the world of international trade</p>
        </div>
      </div>

      <main className="container">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Blogs;