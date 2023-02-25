import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import AuthLayout from "layouts/Auth.js";
import Menu from "layouts/Menu";
import Query from "layouts/Query";

import { connect } from "react-redux";
import { login, logout } from "./actions/auth";
import About from 'views/pages/About';
import Privacy from 'views/pages/Privacy';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    render() {
        return (

            <HashRouter>
                <ToastContainer />
                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} {...this.props} />} />
                    <Route path="/rtl" render={(props) => <RTLLayout {...props} {...this.props} />} />
                    <Route path={["/auth/login", "/auth"]} render={(props) => <AuthLayout {...props} {...this.props} />} />
                    <Route path="/query/:segment" render={(props) => <Query {...props} {...this.props} />} />
                    <Route path="/about" render={(props) => <About />} />
                    <Route path="/privacy" render={(props) => <Privacy />} />
                    <Route path={["/", "/menu"]} render={(props) => <Menu {...props} {...this.props} />} />
                    <Redirect from="*" to="/" />
                </Switch>
            </HashRouter>

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(login(email, password))
        },
        logout: () => {
            dispatch(logout())
        }


    }
}

function mapStateToProps(state) {
    const { auth, message } = state
    return {
        ...auth,
        ...message
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);