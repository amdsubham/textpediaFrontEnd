import React from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-main navbar-dark navbar-transparent"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("assets/img/brand/textpediaicon.png")}
              style={{ marginBottom: '0.7rem', paddingRight: '0.3rem' }}
            />
            <span style={{
              fontWeight: 'bold',
              fontSize: 'xx-large',

            }}>Textpedia</span>

          </NavbarBrand>
          <button
            aria-controls="navbar-collapse"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-collapse"
            data-toggle="collapse"
            id="navbar-collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            className="navbar-custom-collapse"
            navbar
            toggler="#navbar-collapse"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <span style={{
                      fontWeight: 'bold',
                      fontSize: 'xx-large',
                      color: '#11cdef'
                    }}>TEXTPEDIA</span>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-collapse"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-collapse"
                    data-toggle="collapse"
                    id="navbar-collapse"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/admin/dashboard" tag={Link}>
                  <span className="nav-link-inner--text">Dashboard</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/pricing" tag={Link}>
                  <span className="nav-link-inner--text">Pricing</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/login" tag={Link}>
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/register" tag={Link}>
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/lock" tag={Link}>
                  <span className="nav-link-inner--text">Lock</span>
                </NavLink>
              </NavItem>
            </Nav> */}
            <hr className="d-lg-none" />
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.facebook.com/textpedia"
                  id="tooltip601201423"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Facebook
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip601201423">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/textpedia.app"
                  id="tooltip871243015"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip871243015">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="https://www.instamojo.com/@textpedia"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fas fa-shopping-cart mr-2" />
                  </span>
                  <span className="nav-link-inner--text">Buy Premium</span>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
