/*!

=========================================================
* Argon Dashboard PRO React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import SelectSearch from "react-select-search";

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const options = [
  { name: 'Swedish', value: 'sv' },
  { name: 'English', value: 'en' },
  {
    type: 'group',
    name: 'Group name',
    items: [
      { name: 'Spanish', value: 'es' },
    ]
  },
];


// <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />

function AlternativeHeader() {
  return (
    <>
      <div className="header pb-6">
        <Container fluid>
          <div className="header-body">

            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 d-inline-block mb-0">TextPedia</h6>{" "}

                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Dashboards
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Search
                    </a>
                  </BreadcrumbItem>

                </Breadcrumb>
              </Col>
              <Col className="text-right" lg="6" xs="5">
                {/* <Button
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                > */}
                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                  <i className="ni ni-favourite-28" />
                </div>
                {/* </Button> */}
                {/* <Button
                  className="btn-neutral"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Filters
                </Button> */}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AlternativeHeader;
