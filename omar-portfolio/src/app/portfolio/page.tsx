export default function Portfolio() {
  const projects = [
    {
      title: "AI-Powered Customer Segmentation",
      description: "Developed a machine learning model using unsupervised learning techniques (K-Means clustering) to segment customers based on purchasing behavior, demographics, and engagement metrics. This resulted in a 25% increase in targeted marketing campaign effectiveness and a 15% uplift in customer retention.",
      technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "SQL"],
      link: "#", // Replace with actual link if available
    },
    {
      title: "Predictive Maintenance System for Industrial Equipment",
      description: "Created a predictive maintenance system using time-series analysis (ARIMA) and machine learning (Random Forest) on IoT sensor data. The system predicts equipment failures with 85% accuracy, reducing unplanned downtime by 30% and maintenance costs by 25%.",
      technologies: ["Python", "TensorFlow", "Keras", "MQTT", "InfluxDB", "Grafana"],
      link: "#", // Replace with actual link if available
    },
    {
      title: "Natural Language Processing for Customer Feedback Analysis",
      description: "Implemented an NLP pipeline using BERT models to analyze customer feedback from surveys and social media. The system automatically categorizes feedback sentiment and identifies key topics, providing actionable insights for product improvement and reducing manual analysis time by 60%.",
      technologies: ["Python", "Hugging Face Transformers", "NLTK", "spaCy", "BERT"],
      link: "#", // Replace with actual link if available
    },
    {
      title: "Sales Forecasting Model",
      description: "Built a sales forecasting model using machine learning regression techniques (XGBoost) to predict future sales based on historical data, seasonality, and marketing spend. The model achieved a Mean Absolute Percentage Error (MAPE) of less than 10%, improving inventory management and resource allocation.",
      technologies: ["Python", "XGBoost", "scikit-learn", "Pandas", "SQL"],
      link: "#", // Replace with actual link if available
    },
    {
      title: "Operations Workflow Optimization Dashboard",
      description: "Designed and developed an interactive dashboard using Tableau to visualize key operational metrics and identify bottlenecks in the workflow. This led to process improvements that increased overall team productivity by 15% and reduced lead times.",
      technologies: ["Tableau", "SQL", "Excel", "Data Visualization"],
      link: "#", // Replace with actual link if available
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link !== "#" && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-auto"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
