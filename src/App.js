import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import AuthLayout from "layouts/Auth.js";
// import IndexView from "views/Index.js";
import Menu from "layouts/Menu";
import Query from "layouts/Query";

import { connect } from "react-redux";
import { login, logout } from "./actions/auth";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} {...this.props} />} />
                    <Route path="/rtl" render={(props) => <RTLLayout {...props} {...this.props} />} />
                    <Route path="/auth" render={(props) => <AuthLayout {...props} {...this.props} />} />
                    {/* <Route path="/menu" render={(props) => <Menu {...props} {...this.props} />} /> */}
                    <Route path="/query" render={(props) => <Query {...props} {...this.props} />} />
                    {/* <Route path="/" render={(props) => <IndexView {...props} {...this.props} />} /> */}
                    <Route path={["/", "/menu"]} render={(props) => <Menu {...props} {...this.props} />} />
                    <Redirect from="*" to="/" />
                </Switch>
            </BrowserRouter>

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
    console.log("ALL STATE", state)
    const { auth, message } = state
    // const { user } = state.auth;
    return {
        ...auth,
        ...message
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);