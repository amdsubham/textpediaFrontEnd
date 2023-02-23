import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
export default class About extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader>
                        <h3 className="mb-0">About Textpedia</h3>
                    </CardHeader>
                    <CardBody>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    What is textpedia ?
                                </small>
                            </Col>
                            <Col sm="9">
                                <p className="mb-0">
                                    We provide email and message template based on situations to help you out with your over thinking.
                                    so you can make sure you are providing the most appropriate replies.
                                </p>
                            </Col>
                        </Row>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    How does Textpedia works?
                                </small>
                            </Col>
                            <Col sm="9">
                                <p >
                                    We uses machine learning algorithms and natural language processing (NLP) to create pre-designed templates for various documents such as networking, business proposals, and corporate messages. The system uses existing templates and data to identify patterns and generate new templates that are optimized for specific purposes.
                                </p>
                            </Col>
                        </Row>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    Is it already tested ?
                                </small>
                            </Col>
                            <Col sm="9">
                                <blockquote className="blockquote">
                                    <p className="mb-0">
                                        Yes, the feature has been thoroughly tested before being released to the public to ensure that it is working as intended and free of any bugs or errors." It's important to assure the user that the feature has undergone rigorous testing to instill confidence in the product or service. Its already in use.
                                    </p>
                                </blockquote>
                            </Col>
                        </Row>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    What is the team size?
                                </small>
                            </Col>
                            <Col sm="9">
                                <p className="mb-0">
                                    Our team consists of 10-15 highly talented and experienced coders who are dedicated to creating the best possible product. We take pride in the quality of our team and the work they do, and we're confident that our AI-powered auto template generation feature will meet and exceed your expectations.
                                </p>
                            </Col>
                        </Row>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    what the Premium users will get?
                                </small>
                            </Col>
                            <Col sm="9">
                                <p className="mb-0">
                                    As a premium user of our AI-powered auto template generation feature, you will have access to a range of advanced features and tools that are not available to our regular users. These features are designed to help you save time and create high-quality templates more efficiently, making it easier for you to achieve your goals
                                </p>
                            </Col>
                        </Row>
                        <Row className="py-3 align-items-center">
                            <Col sm="3">
                                <small className="text-uppercase text-muted font-weight-bold">
                                    contact details ?
                                </small>
                            </Col>
                            <Col sm="9">
                                <p className="mb-0">
                                    For any issues or queries, reach out to us at
                                    <p className="text-primary">
                                        textpedia.app@gmail.com
                                    </p>
                                </p>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </>
        )
    }
}
