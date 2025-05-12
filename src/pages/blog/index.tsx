import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data - in a real app, this would come from a CMS or API
const posts = [
  { slug: 'top-5-ai-tools-for-writing', title: 'Top 5 AI Tools for Enhanced Writing Productivity', excerpt: 'Discover AI tools that can help you write faster, smarter, and more effectively. This is a placeholder.' },
  { slug: 'how-ai-streamlines-project-management', title: 'How AI Streamlines Project Management in 2025', excerpt: 'Learn about AI-powered project management solutions that can automate tasks and improve team collaboration. Placeholder content.' },
  { slug: 'ai-for-everyday-productivity-a-beginners-guide', title: 'AI for Everyday Productivity: A Beginner\'s Guide', excerpt: 'New to AI? This guide introduces simple AI tools you can use daily to boost your efficiency. Placeholder text.' },
];

const BlogListPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Productivity Insights</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3">
              <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-semibold">
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
