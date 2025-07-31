// Utility function to create new blog posts
export const createBlogPost = (blogData) => {
  const {
    title,
    image,
    excerpt,
    content,
    author = "Exim Pinnacle Team",
    date = new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
  } = blogData;

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();

  // Validate required fields
  if (!title || !image || !excerpt || !content) {
    throw new Error('Title, image, excerpt, and content are required fields');
  }

  // Generate unique ID (you might want to use a proper ID generation method in production)
  const id = Date.now();

  return {
    id,
    slug,
    title,
    image,
    excerpt,
    content,
    author,
    date
  };
};

// Example usage:
/*
const newBlog = createBlogPost({
  title: "Your Blog Title",
  image: "/path-to-image.jpg",
  excerpt: "A brief description of your blog post",
  content: `
    <h2>Your Blog Title</h2>
    <p>Your blog content here...</p>
    <h3>Subheading</h3>
    <p>More content...</p>
  `,
  author: "Your Name", // Optional, defaults to "Exim Pinnacle Team"
  date: "2024-01-20" // Optional, defaults to current date
});
*/

// Function to add a new blog to the blogData array
export const addBlogToData = (blogData, newBlog) => {
  // In a real application, you would typically save this to a database
  // For now, this is just a helper function to show how to add blogs
  const updatedBlogData = [...blogData, newBlog];
  return updatedBlogData;
}; 