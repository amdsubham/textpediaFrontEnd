
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AuthFooter() {
  return (
    <>
      <footer className="py-5" id="footer-main">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.textpedia.app"
                  target="_blank"
                >
                  Textpedia
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <Link to="/about" target="_blank">
                    About
                  </Link>
                </NavItem>
                <br />
                <NavItem >
                  <Link style={{ margin: '1rem' }} to="/privacy" target="_blank">
                    Privacy Policy
                  </Link>

                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
