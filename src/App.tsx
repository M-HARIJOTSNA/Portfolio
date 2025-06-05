import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  Download,
  Award,
  GraduationCap,
  Languages,
  Heart
 
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Harijotsna Madala</h1>
            <h2 className="text-2xl mb-8">AI & ML Engineering Student</h2>
            <p className="text-xl mb-8 text-blue-100">
              Passionate about problem-solving and applying technology to real-world projects.
              Experienced in Java, Python, and web development technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <Mail size={20} /> Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1dULTrZyfzQILd5N5J5xXXIQzUI1QP4yd/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://raw.githubusercontent.com/M-HARIJOTSNA/Portfolio/main/Harijotsna_portfolio_pic.jpg" alt="Harijotsna Portfolio Photo" />
                
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <User className="text-blue-600" size={24} />
                <h2 className="text-3xl font-bold">About Me</h2>
              </div>
              <p className="text-gray-600 mb-6">
                I'm an IT student specializing in AI & ML at Andhra Engineering College.
                With experience in developing projects like a Personal Voice Assistant and
                completing an internship at Unify Technologies, I'm passionate about creating
                efficient, user-friendly applications and solving real-world problems through technology.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://leetcode.com/u/harijotsna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.L2Jfuatqty2XAIUqYnr_pgHaHa&pid=Api&P=0&h=180"
                    alt="LeetCode Icon"
                    width="24"
                    height="24"
                  />
                </a>

                <a
                  href="https://github.com/M-HARIJOTSNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/harijotsna-madala-854343298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="mailto:harijotsnamadala@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Java',
              'DSA',
              'Python',
              'SQL',
              'JavaScript',
              'HTML/CSS',
              'Bootstrap',
              'Problem Solving',
              'AWS',
              'Git'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Experience & Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80"
                alt="Voice Assistant"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Personal Voice Assistant</h3>
                <p className="text-gray-600 mb-4">
                  Python-based voice assistant with speech recognition, TTS, and integration
                  with Google & OpenAI APIs
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Frontend Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Frontend Development Internship</h3>
                <p className="text-gray-600 mb-4">
                  Implemented responsive designs and developed user interfaces at Unify Technologies
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
                >
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mt-20 py-20 bg-gray-100">

        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <GraduationCap className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">B.Tech in AI & ML</h3>
              <p className="text-gray-600">Andhra Engineering College, Atmakur</p>
              <p className="text-gray-600">Graduation: 2025</p>
              <p className="text-gray-600">Grade: 85%</p>
            </div>
          </div>
          <div className="mt-6"></div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Intermediate</h3>
              <p className="text-gray-600">Dr.BSR Junior College, Atmakur</p>
              <p className="text-gray-600">Graduation: 2021</p>
              <p className="text-gray-600">Grade: 89.4%</p>
            </div>
          </div>
          <div className="mt-6"></div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">SSC</h3>
              <p className="text-gray-600">Z.P.P High School, Atmakur</p>
              <p className="text-gray-600">Graduation: 2019</p>
              <p className="text-gray-600">Grade: 95%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section id="additional" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-blue-600" size={24} />
                <h2 className="text-3xl font-bold">Awards & Certifications</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>AWS Cloud Practitioner Essentials</li>
                <li>ChatGPT Digital Marketing Certificate</li>
                <li>Web Development Certification</li>
                <li>NPTEL Certification</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Languages className="text-blue-600" size={24} />
                <h2 className="text-3xl font-bold">Languages</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>English (Fluent)</li>
                <li>Hindi (Conversational)</li>
                <li>Telugu (Native)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}{/* Footer Section */}
<footer className="bg-gray-100 pt-12">
  <div className="container mx-auto px-6 text-center pb-12"> {/* <-- added pb-12 */}
    <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
    <p className="text-lg mb-6">
      I'm currently looking for internship opportunities and exciting projects to work on. <br />
      If you're interested in collaborating, please get in touch!
    </p>
    <a
      href="mailto:harijotsnamadala@gmail.com"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
    >
      Send me an email
    </a>
  </div>
  {/* Bottom Black Bar */}
  <div className="bg-black text-white text-center py-4">
    © 2024 Harijotsna Madala. All rights reserved.
  </div>
</footer>



    </div>
  );
}

export default App;
