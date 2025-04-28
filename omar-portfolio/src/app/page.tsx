import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Omar Abden</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">AI/ML Engineer | Data Analyst | Operations Manager</h2>
          <p className="text-lg mb-8">
            Passionate about leveraging AI and data analysis to solve complex problems and drive business growth.
            With expertise in machine learning, data visualization, and operational management.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/resume" 
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors"
            >
              View Resume
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
            Profile Image
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <ul className="space-y-2">
              <li>• Deep Learning & Neural Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Modeling</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
            <ul className="space-y-2">
              <li>• Statistical Analysis</li>
              <li>• Data Visualization</li>
              <li>• Business Intelligence</li>
              <li>• SQL & Database Management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Operations Management</h3>
            <ul className="space-y-2">
              <li>• Project Management</li>
              <li>• Process Optimization</li>
              <li>• Team Leadership</li>
              <li>• Strategic Planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">AI-Powered Customer Segmentation</h3>
            <p className="text-gray-600 mb-4">
              Developed a machine learning model to segment customers based on purchasing behavior, 
              resulting in a 25% increase in targeted marketing effectiveness.
            </p>
            <Link 
              href="/portfolio" 
              className="text-blue-600 hover:underline"
            >
              Learn more →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Predictive Maintenance System</h3>
            <p className="text-gray-600 mb-4">
              Created a predictive maintenance system using IoT data and machine learning, 
              reducing equipment downtime by 30% and maintenance costs by 25%.
            </p>
            <Link 
              href="/portfolio" 
              className="text-blue-600 hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/portfolio" 
            className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
