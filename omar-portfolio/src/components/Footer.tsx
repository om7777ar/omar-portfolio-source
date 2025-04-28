import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Omar Abden</h3>
            <p className="text-gray-400">AI/ML Engineer | Data Analyst | Operations Manager</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-400">Email: omarabdenxx@gmail.com</p>
              <p className="text-gray-400">Phone: +972-52-4030720</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/omar-abden2791" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://huggingface.co/oma7777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Hugging Face
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Omar Abden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
