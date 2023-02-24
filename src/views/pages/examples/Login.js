import React, { Component } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";
// import Input from "react-validation/build/input";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import { Redirect } from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty'
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedEmail: false,
      focusedPassword: false,
      loading: false,
      email: '',
      password: ''
    };
  }


  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const { login } = this.props;


    login(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  }


  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { focusedEmail, focusedPassword, loading } = this.state;
    const { isLoggedIn, message = '' } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/menu" />;
    }
    return (
      <>
        <AuthHeader
          title="Welcomessss!"
          lead="Get your awesome email and message templates to match your situation, We will make sure you are providing the most appropriate response."
        />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small> Sign in with credentials</small>
                  </div>
                  <Form role="form"
                    onSubmit={this.handleLogin}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <FormGroup
                      className={classnames("mb-3", {
                        focused: focusedEmail,
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          onFocus={() => this.setState({ focusedEmail: true })}
                          onBlur={() => this.setState({ focusedEmail: true })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: focusedPassword,
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          placeholder="Password"
                          type="password"
                          onFocus={() => this.setState({ focusedPassword: true })}
                          onBlur={() => this.setState({ focusedPassword: true })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                        checked
                      />
                      {!_isEmpty(message) && (<div className="text-center  text-danger mb-4">
                        <small> {message}</small>
                      </div>)}

                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"

                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    {loading && (<div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span>Please Wait...</span>
                        </div>
                        <div className="progress-percentage">
                          <span>80%</span>
                        </div>
                      </div>
                      <Progress max="100" value="80" color="info" />
                    </div>)}

                    <div className="text-center">
                      <Button
                        className="my-4"
                        color="info"
                        type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Login;
