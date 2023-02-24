import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    Row,
} from "reactstrap";
import Skeleton from 'react-loading-skeleton'
import DefaultModal from './DefaultModal';
import ColorModal from './ColorModal';

class CardItem extends Component {
    state = {
        defaultModal: false,
        notificationModal: false,
    };
    renderLoading = () => (
        <>
            <Skeleton height={100} />
            <Skeleton height={100} />
        </>
    )
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    getSegmentType = () => {
        const { isSegmentCouple } = this.props
        return isSegmentCouple ? "notificationModal" : "defaultModal"
    }
    render() {
        const { title = '', isLoading = false, } = this.props
        const { defaultModal, notificationModal } = this.state
        if (isLoading) {
            return this.renderLoading()
        }
        return (
            <>
                <Card className="card-stats"
                    onClick={() => this.toggleModal(this.getSegmentType())}>
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

                            {/* {isPremium && (<Col className="col-auto">
                                <div className=" bg-gradient-red text-white  shadow">
                                    <i style={{ padding: '0.2rem' }}>Premium</i>
                                </div>
                            </Col>)} */}
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-success mr-2">
                                    <i className="fa fa-share" /> Share
                                </span>{" "}
                            </p>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-danger mr-2">
                                    <i className="fa fa-heart" />
                                </span>{" "}
                            </p>
                        </div>
                    </CardBody>
                </Card>
                {defaultModal && (<DefaultModal
                    toggleModal={this.toggleModal}
                    defaultModal={defaultModal}
                    query={title}
                />)}
                {notificationModal && (<ColorModal
                    toggleModal={this.toggleModal}
                    notificationModal={notificationModal}
                    query={title}
                />)}
            </>
        )
    }
}

export default CardItem