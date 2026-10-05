import rishamPhoto from '../assets/MYphoto.png';
import EngineeringTelemetry from './EngineeringTelemetry';
import Education from './Education';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Core Background & Engineering Philosophy */}
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div>
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <p className="text-gray about-text">
Hi, I’m Risham Soni, a Computer Science Engineering undergraduate specializing in Artificial Intelligence. I’m passionate about building practical, scalable, and intelligent software solutions that combine modern web technologies with AI and machine learning.

I have hands-on experience in full-stack development using React.js, Node.js, Express.js, MongoDB, and SQL, along with experience developing AI/ML solutions using Python, Scikit-learn, TensorFlow.js, and YOLO. I enjoy working across the entire development lifecycle—from designing responsive user interfaces and building RESTful APIs to integrating databases and deploying intelligent models.

Beyond development, I have a strong foundation in Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Computer Networks, and I’ve solved 300+ problems on LeetCode and GeeksForGeeks.

I’m always eager to learn new technologies, tackle challenging problems, and turn ideas into meaningful products.

            </p>
            <div className="font-mono text-gray skill-list text-sm">
              <p><span style={{ color: '#fff' }}>•</span> MERN Full Stack (MongoDB, Express, React, Node)</p>
              <p><span style={{ color: '#fff' }}>•</span> AIML (TensorFlow.js, Scikit-learn, YOLO, Model Training & Evaluation)</p>
              <p><span style={{ color: '#fff' }}>•</span> Databases ( MongoDB, SQL
              , Postgresql)</p>
              <p><span style={{ color: '#fff' }}>•</span> Tools & Platforms (Git, GitHub, Postman, PowerShell)</p>
            </div>
          </div>

          <div className="abstract-box">
            <div className="about-photo-wrapper">
              <img
                src={rishamPhoto}
                alt="MERN Full Stack Developer & AI Engineer"
                className="about-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Real-Time Engineering Telemetry & Verified Command Channels */}
        <EngineeringTelemetry />
      </section>

      {/* 2. Education & Academic Background */}
      <Education />
    </div>
  );
}
