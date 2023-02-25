import React, { Component } from 'react'
import {
    Button,
    Input,
    Modal,
} from "reactstrap";
import _noop from 'lodash/noop'
import _get from 'lodash/get'
import axios from 'axios'
import { Spinner } from "reactstrap";
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import { toast } from 'react-toastify';
export default class NotificationModal extends Component {
    state = {
        loading: false,
        solution: 'Loading...',
        switchChecked: false,
    }

    notify = () => toast.error('Copied to clipboard 👋', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    handleCopyToClipboard = () => {
        const { solution } = this.state;
        navigator.clipboard.writeText(solution)
        this.notify()
    }
    fetchSolutionDetails = () => {
        const { query } = this.props
        const { switchChecked } = this.state
        const format = switchChecked ? 'email' : 'message'
        this.setState({ loading: true })
        const apiUrl = `http://localhost:8085/api/fetch/solution?format=${format}?prompt=${query}`;
        const requestData = {
            method: 'get',
            url: apiUrl,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        axios(requestData)
            .then(response => {
                const { data } = _get(response, 'data', '')
                this.setState({ solution: data })
                this.setState({ loading: false })
            })
            .catch(error => {
                console.error(error);
                this.setState({ loading: false })
            });
    }
    toggleSwitch = () => {
        this.setState({
            switchChecked: !this.state.switchChecked
        },
            this.fetchSolutionDetails()
        );
    };

    componentDidMount() {
        this.fetchSolutionDetails()
    }

    renderInputField = () => {
        return (
            <div className="modal-body py-3 text-center" >
                <Input
                    placeholder="A few words about you ..."
                    rows="4"
                    type="textarea"
                    defaultValue="A beautiful premium dashboard for Bootstrap 4."
                />
            </div>
        )
    }
    render() {
        const { notificationModal = false, toggleModal = _noop, query = '' } = this.props
        const { solution, loading, switchChecked } = this.state;
        return (
            <div>

                <Modal
                    className="modal-dialog-centered modal-danger"
                    contentClassName="bg-gradient-danger"
                    isOpen={notificationModal}
                    toggle={() => toggleModal("notificationModal")}
                >
                    <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                            {query}
                        </h6>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => toggleModal("notificationModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    {loading ? (<Spinner className="modal-body center"
                        type="grow"
                        size="lg"
                        color="secondary" />) : (

                        <div className="modal-body" onFocus={() => console.log("HII")}>
                            <div className="py-3 text-center">
                                <p>
                                    {solution}
                                </p>
                            </div>
                        </div>

                    )}
                    <div className="modal-footer">
                        <Button
                            className="float-right"
                            onClick={this.fetchSolutionDetails}
                            size="sm"
                        >
                            Refresh
                        </Button>
                        <ToggleSwitch disabled={loading} Name='monthly' id={1} optionLabels={["Message", "Email"]} checked={switchChecked} onChange={this.toggleSwitch} />
                        <Button
                            size="sm"
                            onClick={this.handleCopyToClipboard}
                            disabled={loading}
                            className="btn-white ml-auto" color="default" type="button">
                            Copy
                        </Button>

                    </div>
                </Modal>
            </div>
        )
    }
}
