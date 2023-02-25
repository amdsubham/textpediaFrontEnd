
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
import axios from 'axios';
import _get from 'lodash/get'

function Menu({ user, history, logout }) {
    const [segments, setSegment] = useState([]);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setUser] = useState(undefined);

    const logOut = () => {
        logout()
        setUser(undefined)
        history.push("/auth");
    }

    const handleClick = (segment) => {
        history.push(`/query/${segment}`)
    }

    const fetchMenuDetails = () => {
        setLoading(true)
        const apiUrl = 'http://localhost:8085/api/fetch/menu';
        const requestData = {
            method: 'get',
            url: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        axios(requestData)
            .then(response => {
                const { data } = _get(response, 'data', [])
                const updatedData = _map(data, (item, index) => ({ ...item, key: index }))
                setSegment(updatedData)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            });
    }

    React.useEffect(() => {
        if (user !== null) {
            setUser(user)
            fetchMenuDetails()
        }
        else {
            logOut()
        }

    }, []);


    return (
        <>
            {/* <AlternativeHeader /> */}
            <AdminNavbar logOut={logOut} history={history} />
            <Container style={{ paddingTop: '7rem' }} className="mt--6" fluid>
                <Row>
                    {
                        _map(segments, item => (
                            <Col md="6" xl="3">
                                <CardItem
                                    {...item}
                                    isLoading={loading}
                                    handleClickSegment={() => handleClick(_get(item, 'title'))}

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

