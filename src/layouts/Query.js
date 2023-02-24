import React, { useState } from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import _map from 'lodash/map'
import _get from 'lodash/get'
import axios from 'axios';
import QueryCard from "components/QueryCard";
import AdminNavbar from "components/Navbars/AdminNavbar";

function Query({ match, logOut }) {

    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchQueryDetails = () => {
        const segment = _get(match, 'params.segment')
        setLoading(true)
        const apiUrl = `http://localhost:8085/api/fetch/query/?menuType=${segment}`;
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
                setQueries(updatedData)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            });
    }
    React.useEffect(() => {
        fetchQueryDetails()
    }, []);


    return (
        <>
            <AdminNavbar logOut={logOut} />
            <Container style={{ paddingTop: '7rem' }} className="mt--6" fluid>
                <Row>
                    {
                        _map(queries, item => (
                            <Col md="6" xl="3">
                                <QueryCard
                                    {...item}
                                    isLoading={loading}
                                    isSegmentCouple={_get(match, 'params.segment') === 'couple'}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Query;
