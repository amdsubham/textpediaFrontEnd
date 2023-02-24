import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

function Switch() {
    return (
        <>
            <label className="custom-toggle custom-toggle-default">
                <input type="checkbox" checked="" />
                <span className="custom-toggle-slider rounded-circle" data-label-off="OFF" data-label-on="ON"></span>
            </label>
        </>
    );

}

export default Switch;