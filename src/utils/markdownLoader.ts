// Utility for loading and processing markdown files
import markdownFiles from '../content/blogs';

// Type for the imported markdown files
type MarkdownFiles = {
  [key: string]: string;
};

// Convert the dynamic import to a typed object
const blogs: MarkdownFiles = (markdownFiles as any);

/**
 * Get the markdown content for a blog by its markdown file name
 * @param markdownFileName - The name of the markdown file (e.g., "kubernetes-cluster.md")
 * @returns The markdown content as a string
 */
export const getBlogMarkdown = (markdownFileName: string): string => {
  const content = blogs[markdownFileName];
  if (!content) {
    throw new Error(`Markdown file "${markdownFileName}" not found`);
  }
  return content;
};

/**
 * Get all available markdown file names
 * @returns Array of markdown file names
 */
export const getAvailableMarkdownFiles = (): string[] => {
  return Object.keys(blogs);
};