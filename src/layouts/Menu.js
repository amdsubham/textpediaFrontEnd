
import React, { useState } from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";
// core components
import AlternativeHeader from "components/Headers/AlternativeHeader.js";
import _map from 'lodash/map'
import CardItem from "components/Card";
import EventBus from "common/EventBus";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
const segmentDetails = [
    {
        title: 'corporate',
        cardType: 'info',
        value: '8/10',
        isPremium: false,

    },
    {
        title: 'Couples',
        cardType: 'primary',
        value: '4/10',
        isPremium: true,
    },
    {
        title: 'networking',
        cardType: 'danger',
        value: '7/10',
        isPremium: false,

    },
    {
        title: 'business',
        cardType: 'default',
        value: '9/10',
        isPremium: true,

    },

]

function Menu({ user, history, dispatch, logout }) {
    const [segments, setSegment] = useState([]);
    const [currentUser, setUser] = useState(undefined);

    const logOut = () => {
        logout()
        setUser(undefined)
        history.push("/auth");
    }
    React.useEffect(() => {
        if (user) {
            setUser(user)
            setSegment(segmentDetails)
        }
        EventBus.on("logout", () => {
            logOut();
        });

    }, []);


    return (
        <>
            {/* <AlternativeHeader /> */}
            <AdminNavbar logOut={logOut} />
            <Container style={{ paddingTop: '7rem' }} className="mt--6" fluid>
                <Row>
                    {
                        _map(segments, item => (
                            <Col md="6" xl="3">
                                <CardItem
                                    {...item}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Menu;

