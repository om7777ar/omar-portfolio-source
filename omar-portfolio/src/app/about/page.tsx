export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 mb-6 md:mb-0 md:mr-8">
            Profile Image
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">Omar Abden</h2>
            <p className="text-xl text-gray-600 mb-4">AI/ML Engineer | Data Analyst | Operations Manager</p>
            <p className="text-lg">
              I am a highly motivated and results-oriented professional with a strong background in AI/ML, data analysis, 
              and operations management. My passion lies in leveraging technology and data-driven insights to solve complex 
              challenges and optimize business processes.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Throughout my career, I have gained extensive experience in developing and implementing machine learning models, 
            performing in-depth data analysis, and managing operational workflows. I thrive in dynamic environments 
            where I can apply my analytical skills and technical expertise to drive innovation and efficiency.
          </p>
          <p>
            My journey began with a strong foundation in computer science and mathematics, which naturally led me to the 
            fascinating world of artificial intelligence and data science. I have honed my skills in various programming 
            languages and tools, including Python, SQL, TensorFlow, PyTorch, and various data visualization libraries.
          </p>
          <p>
            In addition to my technical skills, I possess strong leadership and project management capabilities. I have 
            successfully led teams and managed projects from conception to completion, ensuring timely delivery and 
            alignment with strategic objectives. I am adept at communicating complex technical concepts to both technical 
            and non-technical audiences.
          </p>
          <p>
            I am constantly seeking new learning opportunities and stay updated with the latest advancements in AI, 
            machine learning, and data analysis. I believe in the transformative power of data and am excited to 
            contribute my skills to organizations looking to harness its potential.
          </p>
        </div>
      </div>
    </div>
  );
}
