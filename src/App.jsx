import "./App.css";

function App() {
  const skills = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "Spring Security",
    "JWT Authentication",
    "Hibernate",
    "Spring Data JPA",
    "MySQL",
    "SQL",
    "Maven",
    "Git / GitHub",
    "Postman",
    "Agile Methodology",
  ];

  const projects = [
    {
      title: "Microservice-Based Transport Management System",
      period: "02/2025 - 04/2025",
      description:
        "A microservice-based transport management application developed using Java and Spring Boot.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Eureka Server",
        "API Gateway",
        "MySQL",
        "Hibernate",
        "JWT",
        "REST APIs",
      ],
      points: [
        "Implemented modular services for vehicles, drivers, routes and bookings.",
        "Secured APIs using JWT-based authentication and role-based authorization.",
        "Used Eureka Server for service discovery and API Gateway for routing.",
      ],
    },
    {
      title: "Transport Management System",
      period: "03/2023 - 04/2023",
      description:
        "A Java-based transport management system designed to manage vehicles, drivers and route information.",
      technologies: ["Java", "OOP", "Booking", "Scheduling", "Trip Tracking"],
      points: [
        "Developed a Java-based system to manage vehicles, drivers and route information.",
        "Applied object-oriented programming principles to structure application modules.",
        "Implemented modules for booking, scheduling and trip tracking.",
      ],
    },
    {
      title: "Bank Management System",
      period: "02/2025 - 03/2025",
      description:
        "A Java-based bank management system developed as an internship task using object-oriented programming.",
      technologies: ["Java", "OOP", "Banking", "Transactions"],
      points: [
        "Built the application using Object-Oriented Programming principles in Java.",
        "Implemented account details and balance management.",
        "Implemented transaction amount and fingerprint-based secure identification concepts.",
      ],
    },
  ];

  const experience = [
    {
      role: "Backend Developer",
      company: "Vision Waves Technology Pvt. Ltd.",
      location: "Indore",
      duration: "Full-Time | 8 Months",
      points: [
        "Developed scalable backend applications using Java and Spring Boot.",
        "Implemented CRUD operations using Spring Data JPA and MySQL.",
        "Designed and consumed RESTful APIs.",
        "Integrated JWT Authentication and Authorization.",
        "Managed dependency management using Maven.",
        "Followed MVC Architecture and Object-Oriented Programming principles.",
        "Participated in Agile development process and sprint planning.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "PSNA College of Engineering and Technology, Dindigul",
      result: "CGPA: 8.35",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Government Modern Higher Secondary School, Kasipalayam",
      result: "2021 - 2022",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Government Modern Higher Secondary School, Kasipalayam",
      result: "2019 - 2020",
    },
  ];

    const certifications = [
  {
    title: "SQL for Beginners",
    provider: "Alison",
    type: "Course",
    date: "Certificate",
    image: "/certificates/sql-for-beginners.jpg",
  },
  {
    title: "Java Internship",
    provider: "Plasmid",
    type: "Internship",
    date: "August 2025 – October 2025",
    image: "/certificates/java-plasmid.jpg",
  },
  {
    title: "Artificial Intelligence",
    provider: "CodSoft",
    type: "Internship",
    date: "10 Feb 2025 – 10 Mar 2025",
    image: "/certificates/artificial-intelligence.jpg",
  },
  {
    title: "Java Programming",
    provider: "Great Learning Academy",
    type: "Course",
    date: "October 2024",
    image: "/certificates/java-programming.jpg",
  },
  {
    title: "Full Stack Web Development",
    provider: "Galvin Technology",
    type: "Internship",
    date: "12 Feb 2025 – 12 Mar 2025",
    image: "/certificates/full-stack-galvin.jpg",
  },
  {
    title: "Angular",
    provider: "Infosys",
    type: "Course",
    date: "August 2026",
    image: "/certificates/angular-infosys.jpg",
  },
  {
    title: "Java for Beginners",
    provider: "Infosys",
    type: "Course",
    date: "July 2026",
    image: "/certificates/java-beginners-infosys.jpg",
  },
  {
    title: "Spring Microservices",
    provider: "Infosys",
    type: "Course",
    date: "August 2026",
    image: "/certificates/spring-microservices-infosys.png",
  },
];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            DHILIP<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero">
          <div className="hero-container">

            <div className="hero-content">
              <p className="hero-small-text">
                Hello, I'm
              </p>

              <h1>
                DHILIP <span>S</span>
              </h1>

              <h2>
                Java Backend Developer
              </h2>

              <p className="hero-description">
                I build scalable and reliable backend applications using
                Java, Spring Boot, REST APIs, Microservices and MySQL.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View Projects
                </a>

              <a
  href="/resume.pdf"
  download="DHILIP_S_Resume.pdf"
  className="secondary-button"
>
  Download Resume
</a>
              </div>

              <div className="social-links">
                <a
  href="https://github.com/dhilip677"
  target="_blank"
  rel="noreferrer"
>
  GitHub
</a>

                <a
  href="https://www.linkedin.com/in/dhilip-s-6a2075275"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
</a>

                <a href="mailto:thilipmohan367@gmail.com">
                  Email
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-window">

                <div className="window-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-content">
                  <p>
                    <span className="code-purple">public class</span>{" "}
                    <span className="code-green">Developer</span>{" "}
                    {"{"}
                  </p>

                  <p className="indent">
                    <span className="code-purple">String</span> name =
                    <span className="code-yellow">
                      "DHILIP S"
                    </span>
                    ;
                  </p>

                  <p className="indent">
                    <span className="code-purple">String</span> role =
                    <span className="code-yellow">
                      "Backend Developer"
                    </span>
                    ;
                  </p>

                  <p className="indent">
                    <span className="code-purple">String</span> stack =
                    <span className="code-yellow">
                      "Java + Spring Boot"
                    </span>
                    ;
                  </p>

                  <p>{"}"}</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about-section">
          <div className="section-container">

            <div className="section-heading">
              <p>ABOUT ME</p>
              <h2>Building Backend Solutions</h2>
            </div>

            <div className="about-grid">

              <div className="about-text">
                <p>
                  I am a Java Backend Developer focused on designing and
                  developing scalable backend applications using Java,
                  Spring Boot, REST APIs and MySQL.
                </p>

                <p>
                  I have experience working with Microservices Architecture,
                  JWT Authentication, API Development, Spring Data JPA,
                  Hibernate and Maven.
                </p>

                <p>
                  I enjoy solving technical problems, learning modern
                  backend technologies and building high-performance
                  applications.
                </p>
              </div>

              <div className="about-info">

                <div className="info-card">
                  <span>01</span>
                  <h3>Backend Development</h3>
                  <p>
                    Java, Spring Boot, REST APIs and Spring Security.
                  </p>
                </div>

                <div className="info-card">
                  <span>02</span>
                  <h3>Microservices</h3>
                  <p>
                    Service-based architecture with Spring Cloud,
                    Eureka and API Gateway.
                  </p>
                </div>

                <div className="info-card">
                  <span>03</span>
                  <h3>Database</h3>
                  <p>
                    MySQL, SQL, Hibernate and Spring Data JPA.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section skills-section">
          <div className="section-container">

            <div className="section-heading">
              <p>TECHNICAL SKILLS</p>
              <h2>My Technology Stack</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span>
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <h3>{skill}</h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section experience-section">
          <div className="section-container">

            <div className="section-heading">
              <p>WORK EXPERIENCE</p>
              <h2>Professional Experience</h2>
            </div>

            <div className="experience-wrapper">

              {experience.map((job, index) => (
                <div className="experience-card" key={index}>

                  <div className="experience-number">
                    01
                  </div>

                  <div className="experience-content">

                    <div className="experience-top">
                      <div>
                        <h3>{job.role}</h3>
                        <h4>{job.company}</h4>
                      </div>

                      <div className="experience-meta">
                        <span>{job.location}</span>
                        <span>{job.duration}</span>
                      </div>
                    </div>

                    <ul>
                      {job.points.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          {point}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section projects-section">
          <div className="section-container">

            <div className="section-heading">
              <p>MY WORK</p>
              <h2>Featured Projects</h2>
            </div>

            <div className="projects-grid">

              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>

                  <div className="project-top">
                    <span className="project-number">
                      0{index + 1}
                    </span>

                    <span className="project-period">
                      {project.period}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <ul className="project-points">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="section education-section">
          <div className="section-container">

            <div className="section-heading">
              <p>EDUCATION</p>
              <h2>Academic Background</h2>
            </div>

            <div className="education-list">

              {education.map((item, index) => (
                <div className="education-card" key={index}>

                  <div className="education-year">
                    0{index + 1}
                  </div>

                  <div className="education-content">
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                  </div>

                  <div className="education-result">
                    {item.result}
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
       {/* ================= CERTIFICATIONS ================= */}

<section
  id="certifications"
  className="section certification-section"
>
  <div className="section-container">

    <div className="section-heading">
      <p>CERTIFICATIONS</p>

      <h2>Learning & Certifications</h2>

      <span>
        Professional courses, internships and technical
        certifications related to my development journey.
      </span>
    </div>


    <div className="certification-grid">

      {certifications.map((certificate, index) => (

        <div
          className="certificate-card"
          key={certificate.title}
        >

          {/* Certificate Image */}

          <div className="certificate-image">

            <img
              src={certificate.image}
              alt={`${certificate.title} Certificate`}
            />

          </div>


          {/* Certificate Details */}

          <div className="certificate-content">

            <div className="certificate-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>
              {certificate.title}
            </h3>

            <p className="certificate-provider">
              {certificate.provider}
            </p>

            <p className="certificate-meta">
              {certificate.type}
              {" • "}
              {certificate.date}
            </p>


            {/* View Certificate */}

            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-button"
            >
              View Certificate ↗
            </a>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">
          <div className="section-container">

            <div className="contact-grid">

              <div className="contact-content">

                <p className="contact-label">
                  GET IN TOUCH
                </p>

                <h2>
                  Let's Build Something
                  <span> Great Together.</span>
                </h2>

                <p>
                  I'm open to backend development opportunities,
                  technical discussions and interesting projects.
                </p>

                <div className="contact-details">

                  <a href="mailto:thilipmohan367@gmail.com">
                    <strong>Email</strong>
                    <span>
                      thilipmohan367@gmail.com
                    </span>
                  </a>

                  <a href="tel:6382668475">
                    <strong>Phone</strong>
                    <span>
                      +91 6382668475
                    </span>
                  </a>

                  <div>
                    <strong>Location</strong>
                    <span>
                      Jangalpatti, Karur
                    </span>
                  </div>

                </div>

              </div>

              <div className="contact-form-card">

                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    alert(
                      "Thank you! Your message form is ready to connect with a backend service."
                    );
                  }}
                >

                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Your Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                  >
                    Send Message →
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div>
            <h3>DHILIP<span>.</span></h3>

            <p>
              Java Backend Developer
            </p>
          </div>

          <div className="footer-links">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

          <p className="copyright">
            © {new Date().getFullYear()} DHILIP S. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;