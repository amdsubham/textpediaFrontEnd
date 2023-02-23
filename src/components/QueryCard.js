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
        const { cardType = 'default', title = '', value = '', isLoading = false, isPremium = false } = this.props
        if (isLoading) {
            return this.renderLoading()
        }
        return (
            <>
                <Card className="card-stats" >
                    <CardBody>
                        <Row>
                            <div className="col">
                                <CardTitle
                                    tag="h5"
                                    className="h2 text-uppercase font-weight-bold mb-0"
                                >
                                    {title}
                                </CardTitle>

                            </div>
                            {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i className="ni ni-single-02" />
                                </div>
                            </Col> */}

                            {isPremium && (<Col className="col-auto">
                                <div className=" bg-gradient-red text-white  shadow">
                                    <i style={{ padding: '0.2rem' }}>Premium</i>
                                </div>
                            </Col>)}
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-success mr-2">
                                    <i className="fa fa-share" /> Share
                                </span>{" "}
                            </p>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-danger mr-2">
                                    <i className="fa fa-plus" /> Favourite
                                </span>{" "}
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default CardItem