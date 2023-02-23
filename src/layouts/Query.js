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
import QueryCard from "components/QueryCard";

const queryDetails = [
    {
        title: 'What are your plans for the weekend?',
        cardType: 'info',
        value: '8/10',
        isPremium: false,
    },
    {
        title: 'What do you do for a living?',
        cardType: 'default',
        value: '9/10',
        isPremium: true,

    },
    {
        title: 'What kind of music/movies/TV shows do you like?',
        cardType: 'danger',
        value: '7/10',
        isPremium: false,

    },
    {
        title: 'Where did you grow up?',
        cardType: 'primary',
        value: '4/10',
        isPremium: true,

    },


    {
        title: 'What are your plans for the weekend?',
        cardType: 'info',
        value: '8/10',
        isPremium: false,
    },
    {
        title: 'Where did you grow up?',
        cardType: 'primary',
        value: '4/10',
        isPremium: false,

    },
    {
        title: 'What kind of music/movies/TV shows do you like?',
        cardType: 'danger',
        value: '7/10',
        isPremium: true,

    },
    {
        title: 'What do you do for a living?',
        cardType: 'default',
        value: '9/10',
        isPremium: false,

    },
    {
        title: 'What are your plans for the weekend?',
        cardType: 'info',
        value: '8/10',
        isPremium: false,
    },
    {
        title: 'Where did you grow up?',
        cardType: 'primary',
        value: '4/10',
        isPremium: false,

    },
    {
        title: 'What kind of music/movies/TV shows do you like?',
        cardType: 'danger',
        value: '7/10',
        isPremium: false,

    },
    {
        title: 'What do you do for a living?',
        cardType: 'default',
        value: '9/10',
        isPremium: false,

    },

]

function Query() {
    const [queries, setQueries] = useState([]);
    React.useEffect(() => {
        setQueries(queryDetails)
    }, []);
    return (
        <>
            <AlternativeHeader />
            <Container className="mt--6" fluid>
                <Row>
                    {
                        _map(queries, item => (
                            <Col md="6" xl="3">
                                <QueryCard
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

export default Query;
