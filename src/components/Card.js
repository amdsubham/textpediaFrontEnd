import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Row,
    Col,
} from "reactstrap";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

class CardItem extends Component {

    renderLoading = () => (
        <>
            <Skeleton height={100} />
            <Skeleton height={100} />
        </>
    )

    render() {
        const { cardType = 'default', title = '', value = '', isLoading = false } = this.props
        if (isLoading) {
            return this.renderLoading()
        }
        return (
            <>
                <Card className={`bg-gradient-${cardType} border-0 mr-0`}>
                    <CardBody>
                        <Row>
                            <div className="col">
                                <CardTitle

                                    className="text-uppercase text-muted mb-0 text-white"
                                >
                                    {title}
                                </CardTitle>


                            </div>
                            <Col className="col-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle
                                        size="sm"
                                        color="neutral"
                                        className="mr-0"
                                    >
                                        <i className="fas fa-ellipsis-h" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Add Questions
                                        </DropdownItem>
                                        <DropdownItem
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Another action
                                        </DropdownItem>
                                        <DropdownItem
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Something else here
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                        </Row>
                        {/* <p className="mt-3 mb-0 text-sm">
                            <a
                                className="text-nowrap text-white font-weight-600"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                Common Soon...
                            </a>
                        </p> */}
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default CardItem