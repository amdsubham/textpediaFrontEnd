
import React, { useState } from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";
// core components
import _map from 'lodash/map'
import CardItem from "components/Card";
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
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setUser] = useState(undefined);

    const logOut = () => {
        logout()
        setUser(undefined)
        history.push("/auth");
    }

    React.useEffect(() => {
        if (user !== null) {
            setUser(user)
            setSegment(segmentDetails)
        }
        else {
            logOut()
        }

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

