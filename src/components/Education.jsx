import MaskedTitle from './MaskedTitle';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Artificial Intelligence',
    'Machine Learning',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering'
  ];

  const highlights = [
    {
      tag: 'PROBLEM SOLVING',
      text: 'Solved over 300+ problems across LeetCode & GeeksForGeeks strengthening algorithmic logic & data structures.'
    },
    {
      tag: 'MERN FULL STACK',
      text: 'Certified by Coding Spoon demonstrating full-stack engineering proficiency across React, Node.js, and MongoDB.'
    },
    {
      tag: 'GDSC GENAI',
      text: 'Developed generative AI applications using Google Gemini API and Streamlit with GDSC.'
    }
  ];

  return (
    <section className="container education-section" id="education">
      <div className="education-header">
        <MaskedTitle text="Education" />
        <div className="divider" />
      </div>

      <div className="education-card">
        {/* Top Meta Bar */}
        <div className="education-topbar font-mono">
          <div className="education-badge-group">
            <span className="education-status-badge uppercase">
              <span className="education-status-dot" />
              August 2023 – 2027
            </span>
            <span className="education-timeline-date uppercase">B.Tech Undergraduate</span>
          </div>
          <span className="education-level-tag uppercase">CSVTU Affiliated</span>
        </div>

        {/* Degree & College Info */}
        <div className="education-main-info">
          <h3 className="education-degree-title uppercase">
            Bachelor of Technology in Computer Science Engineering (Artificial Intelligence)
          </h3>
          <div className="education-institution-name font-mono">
            <span>Rungta College of Engineering and Technology</span>
            <span className="education-affiliation-pill">CSVTU</span>
          </div>
        </div>

        {/* Academic Metrics Grid */}
        <div className="education-metrics-grid font-mono">
          <div className="education-metric-box">
            <span className="education-metric-val highlight-cgpa">7.98 CGPA</span>
            <span className="education-metric-lbl">Cumulative GPA</span>
          </div>
          <div className="education-metric-box">
            <span className="education-metric-val">Aug 2023 – Active</span>
            <span className="education-metric-lbl">Academic Duration</span>
          </div>
          <div className="education-metric-box">
            <span className="education-metric-val">CSE AI</span>
            <span className="education-metric-lbl">Specialization</span>
          </div>
          <div className="education-metric-box">
            <span className="education-metric-val">CSVTU</span>
            <span className="education-metric-lbl">Affiliated University</span>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="education-section-block">
          <div className="education-block-title font-mono uppercase">
            Relevant Coursework & Core Engineering
          </div>
          <div className="education-coursework-pills font-mono">
            {coursework.map((course, idx) => (
              <span key={idx} className="education-pill">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Academic Highlights & Certifications */}
        <div className="education-section-block">
          <div className="education-block-title font-mono uppercase">
            Academic Highlights & Certifications
          </div>
          <div className="education-highlights-grid font-mono">
            {highlights.map((item, idx) => (
              <div key={idx} className="education-highlight-item">
                <span className="education-highlight-tag">{item.tag}</span>
                <p className="education-highlight-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
