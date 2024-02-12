import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css'; // Your existing styles
import './styles.css'; // Your additional styles

// Sample project data (replace with your actual project data)
const projects = [
  {
    id: 1,
    name: 'Miniwee - An e-commerce store sell clothings for new born babies and maternity dresses for women',
    description: "Worked as a back-end developer written public and private API for users and admin, complex mongodb aggregation queries, ﬁlter option, guest users login, email notiﬁcation for users and admin while placing and cancelling orders, implemented AWS S3 bucket and cloud front to store and serve static images, third-party courier API integration.",
    technology: "ReactJs, NodeJs, Express and MongoDB",
    link: 'https://miniwee.in/',
  },
  {
    id: 2,
    name: 'Psiog-Digital',
    description: 'Worked as a back-end developer written public and private API for users and admin, email notiﬁcation for users and admin after submitting forms, ﬁlter option.',
    technology: "ReactJs, NodeJs, Express and MongoDB",
    link: 'https://psiog.com/',
  },
  {
    id: 3,
    name: 'Sithara garments - An e-commerce store sell clothings to whole-sale parties',
    description: 'Worked as a back-end developer written public and private API for users and admin, complex mongodb aggregation queries, ﬁlter option, email notiﬁcation for users and admin while placing and cancelling orders.',
    technology: "ReactJs, NodeJs, Express and MongoDB",
    link: 'https://www.sitharagarments.com/',
  }
  // Add more projects as needed
];

const own_projects = [
  {
    id: 1,
    name: 'Responsive layout-For small, medium and larger screen devices.',
    description: "Written Basic HTML, CSS and Vanilla Js code to display contents and toggle button included to display nav bar options in smaller and medium screen devices.",
    technology: "HTML, CSS, Vanilla Javascript",
    link: 'https://final-responsive-layout-challenge-crl.netlify.app/',
  },
  {
    id: 2,
    name: 'Controlled forms-Functional react components',
    description: "CRUD operations in form and populating that data in a table aside form",
    technology: "ReactJs",
    link: 'https://controlled-form-functional-components.netlify.app/',
  },
  {
    id: 3,
    name: 'Portfolio-website',
    description: "Written by ReactJs to showcase the list of projects done in a 'previous company and on recent own'",
    technology: "ReactJs",
    link: 'https://mohanrajs-portfolio-site.netlify.app/',
  },
  {
    id: 4,
    name: 'Redux-toolkit-cart',
    description: "Built by reactjs components and redux toolkit comprises of Redux store, dispatch, reducer, actions and updating state in the store again.",
    technology: "Reactjs components, Redux-toolkit",
    link: 'https://github.com/mohanraj-exe/redux-toolkit-cart/',
  },
  {
    id: 5,
    name: 'Fitness backend-end web application',
    description: "A fitness back-end web application that allows users to public apis to get nutritional facts for different food items, Calories burned by activities, Exercises info and Recipe details. User can sign up and add food items eaten data,view,list,update and delete meals in the present day and previous days as well.",
    technology: "NodeJs, MongoDB",
    link: 'https://fitness-webapp-backend.onrender.com',
  },
  {
    id: 6,
    name: 'Color-flipper',
    description: "Written Basic HTML, CSS and Vanilla Js code to display basic and dynamic hex colors. These hex colors are dynamically created by basic numbers '0' to '9' and alphabets from 'a' to 'f' initializing it an array and adding Js functionalities to create one and append it in a html element for displaying.",
    technology: "Vanilla Javascript, HTML, CSS",
    link: 'https://color-flipper-html-dom-vanillajs.netlify.app/',
  }

  // Add more projects as needed
];

const App = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Utility function to chunk projects into rows with a specified size
  const chunkProjects = (array, size) => {
    return array.reduce((chunks, item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  // Divide projects into rows with 3 projects each
  const projectRows = chunkProjects(projects, 3);
  const ownprojectRows = chunkProjects(own_projects, 3);

  return (
    <Container fluid className="app">
      <Navbar bg="dark" expand="lg" variant="dark" className="navbar-container">
        <Container>
          <Navbar.Brand href="#">Mohanraj S</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav">
              {/* <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link> */}
              <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="jumbotron rb-header">
        <Container>
          <h1>Mohanraj S</h1>
          <p>MERN Stack web developer</p>
        </Container>
      </div> */}

      <Container id="about" className="rb-section">
        {/* Home section content */}
        <h2>About</h2>
        <p>Hi, I'm Mohanraj S, a web developer with over a year of experience in the MERN (MongoDB, Express.js, React, Node.js)
          stack. I specialize in backend development using Node.js and MongoDB. During my journey, I've contributed to multiple
          projects, including two e-commerce platforms and an admin panel application. </p>
        <p>
          During my journey, I've played a key role in the development of two e-commerce platforms and an admin panel
          application. I'm passionate about creating efficient and scalable solutions to meet the unique requirements of each
          project.
        </p>
      </Container>

      <Container id="projects" className="rb-section">
        {/* Projects section content */}
        <h2>Recent own projects</h2>
        {/* Map over project rows */}
        {ownprojectRows.map((row, rowIndex) => (
          <Row key={rowIndex} className='project-row'>
            {/* Map over projects in the current row */}
            {row.map((project) => (
              <Col key={project.id} md={4}>
                <div className="rb-project">
                  <h3>{project.name}</h3><br/>
                  <span style={{ fontWeight: "bold" }}>Description:</span>
                  <p className='project-description'>{project.description}</p>
                  <span style={{ fontWeight: "bold" }}>Technologies used:</span>
                  <p>{project.technology}</p>
                  <Button variant="success" href={project.link} target="_blank">
                    View Project
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      <Container id="projects" className="rb-section">
        {/* Projects section content */}
        <h2>Contributions to projects at a previous organization.</h2>
        {/* Map over project rows */}
        {projectRows.map((row, rowIndex) => (
          <Row key={rowIndex}> 
            {/* Map over projects in the current row */}
            {row.map((project) => (
              <Col key={project.id} md={4}>
                <div className="rb-project">
                  <h3>{project.name}</h3><br/>
                  <span style={{ fontWeight: "bold" }}>Description:</span>
                  <p className='project-description'>{project.description}</p>
                  <span style={{ fontWeight: "bold" }}>Technologies used:</span>
                  <p>{project.technology}</p>
                  <Button variant="success" href={project.link} target="_blank">
                    View Project
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      <Container id="contact" className="rb-section">
        {/* Contact section content */}
        <h2>Contact</h2>
        <p>
          Let's connect! Feel free to reach out to me. You can contact me via email or connect with me on LinkedIn. I
          look forward to hearing from you.
        </p>
        <ul>
          <li>Email: smohan1029@gmail.com</li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/mohanraj-s-b71797b9/
            </a>
          </li>
          <li>
            Github:{' '}
            <a
              href="https://github.com/mohanraj-exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/mohanraj-exe
            </a>
          </li>
        </ul>
      </Container>

      <footer className="rb-footer">
        <Container>
          <p>&copy; 2024 Mohanraj S</p>
        </Container>
      </footer>
    </Container>
  );
};

export default App;
