// This file exports all markdown files as modules
// When you add a new markdown file, import it here and add it to the exports

// Import all markdown files
import anotherBlog from './another-blog.md';
import fifthBlog from './fifth-blog.md';
import thirdBlogPost from './third-blog-post.md';
import fourthBlogPost from './fourth-blog-post.md';
import kubernetesCluster from './kubernetes-cluster.md';

// Export all markdown files
export default {
  'another-blog.md': anotherBlog,
  'fifth-blog.md': fifthBlog,
  'third-blog-post.md': thirdBlogPost,
  'fourth-blog-post.md': fourthBlogPost,
  'kubernetes-cluster.md': kubernetesCluster,
};