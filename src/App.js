import './App.css';

function App() {
  return (
    <div className="App">
      <header className="portfolio-header">
        <div className="profile">
          <div className="profile-pic">
            <span className="profile-initials">ST</span>
          </div>
          <div>
            <h1>SAI TEJASWI D</h1>
            <h2>Frontend Web Developer</h2>
            <div className="contact-info">
              <span>📞 7093052627</span> | 
              <span>📧 darasailteja05@gmail.com</span> | 
              <span>🔗 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></span> | 
              <span>📍 Hyderabad</span>
            </div>
          </div>
        </div>
      </header>

      <main className="portfolio-main">
        <section className="summary">
          <h3>SUMMARY</h3>
          <p>
            As an enthusiastic Frontend Web Developer, I specialize in creating user-centric designs using HTML, CSS, JavaScript, and React. My backend proficiency in Django and experience in SQL database management empower me to deliver innovative solutions. I thrive on collaboration and am eager to contribute my skills to develop impactful web applications.
          </p>
        </section>

        <section className="key-achievements">
          <h3>KEY ACHIEVEMENTS</h3>
          <ul>
            <li>
              <strong>⚡ Online-survey-creator Project</strong><br />
              Successfully developed robust front-end functionalities for online survey creation and management helping the project team enhance user experience and productivity
            </li>
          </ul>
        </section>

        <section className="skills">
          <h3>SKILLS</h3>
          <div className="skills-list">
            <span>Agile</span>
            <span>AWS</span>
            <span>C/C++</span>
            <span>CSS</span>
            <span>Django</span>
            <span>ECommerce</span>
            <span>GCP</span>
            <span>HTML</span>
            <span>IEEE</span>
            <span>Java</span>
            <span>Java Spring</span>
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>Python</span>
            <span>React</span>
            <span>Scrum</span>
            <span>SDLC</span>
            <span>SpringBoot</span>
            <span>SQL</span>
            <span>Node.js</span>
            <span>Gmail</span>
            <span>Angular</span>
          </div>
        </section>

        <section className="experience">
          <h3>EXPERIENCE</h3>
          <div>
            <strong>Co-Coordinator</strong> <br />
            KL UNIVERSITY <br />
            <span>01/2022 - 12/2022 | Vijayawada</span>
            <ul>
              <li>Co-ordinator for Samyak (college fest)</li>
              <li>Organized events and led teams to achieve objectives</li>
              <li>Coordinated with teams to ensure smooth execution of activities</li>
              <li>Facilitated collaboration and communication across departments</li>
            </ul>
          </div>
          <div>
            <strong>Intern</strong> <br />
            EY GDS - AICTE <br />
            <span>01/2024 - 02/2024 | Virtual</span>
            <ul>
              <li>Interned with Edunet Foundation and EY GDS-AICTE, focusing on Full Stack Web Development</li>
              <li>Developed a project using Python and Django framework</li>
            </ul>
          </div>
        </section>

        <section className="education">
          <h3>EDUCATION</h3>
          <ul>
            <li>
              <strong>MTech</strong> <br />
              Anurag University <br />
              10/2024 - 01/1970 | Hyderabad, India
            </li>
            <li>
              <strong>BTech</strong> <br />
              K L University <br />
              10/2020 - 06/2024 | Vaddeswaram, India
            </li>
            <li>
              <strong>Intermediate</strong> <br />
              New Vision <br />
              06/2018 - 04/2020 | Khammam, India
            </li>
            <li>
              <strong>High School Diploma</strong> <br />
              New Vision <br />
              06/2017 - 04/2018 | Khammam, India
            </li>
          </ul>
        </section>

        <section className="certification">
          <h3>CERTIFICATION</h3>
          <ul>
            <li>
              <strong>Google Cloud Associate Cloud Engineer</strong><br />
              Issued by Google Cloud Certification
            </li>
            <li>
              <strong>AWS Certified Developer – Associate</strong><br />
              Issued by Amazon Web Services Training and Certification
            </li>
            <li>
              <strong>Meta Front-End Developer</strong><br />
              Issued by Meta Training and Certification
            </li>
          </ul>
        </section>

        <section className="languages">
          <h3>LANGUAGES</h3>
          <ul>
            <li><strong>English</strong> – Proficient</li>
            <li><strong>Hindi</strong> – Advanced</li>
            <li><strong>Telugu</strong> – Native</li>
          </ul>
        </section>

        <section className="projects">
          <h3>PROJECTS</h3>
          <div>
            <strong>Online-survey-creator</strong> <br />
            <span>11/2022 - 01/2023</span>
            <ul>
              <li>Web app designed for creating and conducting online surveys</li>
              <li>Developed robust Frontend functionalities for survey creation and management using Spring Boot and Java</li>
              <li>Collaborated with cross-functional teams to ensure seamless integration of backend components</li>
              <li>Implemented efficient data storage and retrieval mechanisms to support large-scale survey operations</li>
            </ul>
          </div>
          <div>
            <strong>E-commerce-store</strong> <br />
            <span>02/2023 - 05/2023</span>
            <ul>
              <li>Modern and scalable solution for online shopping and transactions</li>
              <li>Built user-friendly shopping interfaces using React</li>
              <li>Ensured smooth user experiences through frontend optimization</li>
              <li>Collaborated with backend teams to integrate APIs seamlessly</li>
            </ul>
          </div>
        </section>

        <section className="interests">
          <h3>INTERESTS</h3>
          <ul>
            <li>
              <strong>People Interaction and Cooking</strong><br />
              Enjoys interacting with new people and engaging in experimental cooking
            </li>
            <li>
              <strong>Planning and Organization</strong><br />
              Has a passion for efficient planning and systematic arrangement
            </li>
            <li>
              <strong>Diary Writing</strong><br />
              Keeps a diary to reflect on experiences and thoughts
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;