import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


// The function
function StartNavbar() {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" href="#">Bothniabladet</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" href="#action1">Home</Nav.Link>
            <Nav.Link as={Link} to="upload-image" href="#action2">Upload Image</Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="search" href="#action3">Search Image</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#" href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about" href="#action5">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="contact" href="#action6">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/categories" href="#action7">
              Image categories
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <a className="btn btn-primary log-in" href="#" role="button">
              Log in
            </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StartNavbar;