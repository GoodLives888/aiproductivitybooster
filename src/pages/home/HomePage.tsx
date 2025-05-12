import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-12 bg-blue-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Boost Your Productivity with AI Tools</h1>
        <p className="text-xl mb-8">Discover the best AI-powered tools and services to streamline your workflow and achieve more.</p>
        <a href="#tools" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">Explore Top AI Tools</a>
      </section>

      <section id="tools" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured AI Tools (Placeholders)</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Placeholder for Tool 1 */}
          <div className="border p-6 rounded-lg shadow-lg">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">Placeholder Image</div>
            <h3 className="text-xl font-semibold mb-2">AI Tool A</h3>
            <p className="text-gray-700 mb-4">Brief description of AI Tool A and its benefits. This is placeholder text.</p>
            <a href="#product1-link" className="text-blue-600 hover:underline">Learn More & Get Tool</a>
          </div>
          {/* Placeholder for Tool 2 */}
          <div className="border p-6 rounded-lg shadow-lg">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">Placeholder Image</div>
            <h3 className="text-xl font-semibold mb-2">AI Tool B</h3>
            <p className="text-gray-700 mb-4">Brief description of AI Tool B and its benefits. This is placeholder text.</p>
            <a href="#product2-link" className="text-blue-600 hover:underline">Learn More & Get Tool</a>
          </div>
          {/* Placeholder for Tool 3 */}
          <div className="border p-6 rounded-lg shadow-lg">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">Placeholder Image</div>
            <h3 className="text-xl font-semibold mb-2">AI Tool C</h3>
            <p className="text-gray-700 mb-4">Brief description of AI Tool C and its benefits. This is placeholder text.</p>
            <a href="#product3-link" className="text-blue-600 hover:underline">Learn More & Get Tool</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 rounded-lg mt-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for the latest AI productivity tips and tool reviews.</p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 border rounded-l-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition duration-300">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
