export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <a 
            href="/Omar_Abden_Improved_Resume.pdf" 
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block"
          >
            Download PDF Resume
          </a>
        </div>
        
        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Master of Science in Artificial Intelligence</h3>
            <p className="text-gray-600">Reichman University | 2022 - 2024</p>
            <p className="mt-2">
              Specialized in machine learning algorithms, deep learning, and natural language processing.
              Thesis focused on developing novel approaches to sentiment analysis in multilingual contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">Tel Aviv University | 2018 - 2022</p>
            <p className="mt-2">
              Graduated with honors. Coursework included data structures, algorithms, database systems,
              and introduction to artificial intelligence.
            </p>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">Professional Experience</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">AI/ML Engineer</h3>
            <p className="text-gray-600">Tech Innovations Ltd | 2022 - Present</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Developed and deployed machine learning models for customer segmentation and predictive analytics</li>
              <li>Implemented natural language processing solutions for automated customer support systems</li>
              <li>Collaborated with cross-functional teams to integrate AI solutions into existing products</li>
              <li>Reduced processing time for data analysis by 40% through optimization of algorithms</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Data Analyst</h3>
            <p className="text-gray-600">DataSense Solutions | 2020 - 2022</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Performed statistical analysis on large datasets to identify trends and patterns</li>
              <li>Created interactive dashboards for visualizing key performance indicators</li>
              <li>Generated comprehensive reports for executive leadership to inform strategic decisions</li>
              <li>Implemented data quality control measures, improving data accuracy by 25%</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Operations Manager</h3>
            <p className="text-gray-600">Global Logistics Inc | 2018 - 2020</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Managed day-to-day operations of a 20-person team</li>
              <li>Optimized workflow processes, resulting in a 15% increase in productivity</li>
              <li>Implemented data-driven decision-making approaches across departments</li>
              <li>Reduced operational costs by 18% through process improvements and automation</li>
            </ul>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <ul className="list-disc list-inside">
                <li>Machine Learning & Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
                <li>Database Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Programming Languages & Tools</h3>
              <ul className="list-disc list-inside">
                <li>Python (TensorFlow, PyTorch, scikit-learn)</li>
                <li>SQL</li>
                <li>R</li>
                <li>Tableau</li>
                <li>Power BI</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Google Professional Machine Learning Engineer</li>
            <li>AWS Certified Machine Learning - Specialty</li>
            <li>Microsoft Certified: Azure Data Scientist Associate</li>
            <li>IBM Data Science Professional Certificate</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
