import rishamPhoto from '../assets/MYphoto.png';

export default function EngineeringTelemetry() {
  return (
    <div className="telemetry-command-deck font-mono">
      {/* Top Header Bar */}
      <div className="telemetry-header">
        <div className="telemetry-header-left">
          <span className="telemetry-live-dot" />
          <span className="telemetry-hud-tag">Current Activity & Profiles</span>
        </div>
        <span className="telemetry-hud-status">Active in 2026 • Open for Opportunities</span>
      </div>

      {/* 3-Column Profile & Activity Grid */}
      <div className="telemetry-grid">
        {/* Card 1: What I'm Working On */}
        <div className="telemetry-card">
          <div className="telemetry-card-top">
            <span className="card-badge">CURRENT FOCUS</span>
            <span className="card-indicator">Active</span>
          </div>
          <h3 className="telemetry-card-title">Currently Building & Learning</h3>
          <p className="telemetry-card-text text-gray">
            Currently building a Food Recognition & Nutrition Estimator using AI and exploring Salesforce technology to expand my development skills. Always learning, building, and experimenting with new ideas.
          </p>
          <div className="telemetry-meta-row text-gray">
            <span>CORE STACK:</span>
            <span className="meta-highlight">React.js, Node.js, Express.js, FastAPI, PostgreSQL, Prisma, Redis, Cloud Storage, Python, YOLO.

              & Learning Salesforce technology
            </span>
          </div>
        </div>

        {/* Card 2: GitHub Projects */}
        <div className="telemetry-card">
          <div className="telemetry-card-top">
            <span className="card-badge">GITHUB CODE</span>
            <span className="card-indicator">40+ Repositories</span>
          </div>
          <h3 className="telemetry-card-title">Explore My GitHub</h3>
          <p className="telemetry-card-text text-gray">
            My GitHub showcases my work across full-stack development, AI/ML, data science, APIs, and problem solving. I use it not only to build projects, but also to experiment with new technologies, document my learning, and turn ideas into working solutions.
          </p>
          <div className="telemetry-actions-list">
            <a
              href="https://github.com/risham-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn"
            >
              <span>View GitHub Repositories</span>
              <span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Card 3: LinkedIn Profile & Quick Contact */}
        <div className="telemetry-card telemetry-card-comms">
          <div className="telemetry-card-top">
            <span className="card-badge">PROFESSIONAL PROFILE</span>
            <span className="card-indicator">Open to Roles</span>
          </div>

          {/* Clean LinkedIn Identity Preview */}
          <div className="linkedin-profile-preview">
            <img
              src={rishamPhoto}
              alt="Risham S"
              className="linkedin-preview-avatar"
            />
            <div className="linkedin-preview-info">
              <div className="linkedin-preview-name">
                <span>Risham Soni</span>
                <span className="linkedin-check" title="Verified Profile">✓</span>
              </div>
              <div className="linkedin-preview-role text-gray">
                Full Stack & AI Developer • 4th-Year AIML
              </div>
            </div>
          </div>

          <p className="telemetry-card-text text-gray" style={{ marginBottom: '1rem' }}>
            Open for full-stack developer roles, AI integration projects, and modern cloud deployment opportunities.
          </p>

          <div className="telemetry-actions-list">
            <a
              href="https://www.linkedin.com/in/risham-soni-2ab5b8277/"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn"
            >
              <span>Connect on LinkedIn</span>
              <span className="telemetry-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/917322939616?text=Hi%20Risham,%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn telemetry-btn-ping"
            >
              <span>Chat on WhatsApp</span>
              <span className="telemetry-arrow">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
