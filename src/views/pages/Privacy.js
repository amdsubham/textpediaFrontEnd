import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from "reactstrap";
export default class Privacy extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader>
                        <h3 className="mb-0">Privacy Policy</h3>
                    </CardHeader>
                    <CardBody>
                        <p className="mb-0">
                            At Textpedia, we understand that your privacy is important. We are committed to protecting your personal information and ensuring that it is used only in ways that you have consented to. This privacy policy explains how we collect, use, and safeguard your information when you use our message and email template generator based on individual situations.
                            <h3>Information we collect:</h3>


                            Personal information: we collect personal information such as your name, email address, and other relevant contact details.
                            Template information: we collect information about the templates you create using our platform, including the text and images used.
                            Usage information: we may collect information about how you use our platform, including the templates you access and how frequently you use them.

                            <h3>How we use your information:</h3>
                            To provide our services: we use your information to provide our message and email template generation services and improve the user experience.
                            To communicate with you: we use your contact information to communicate with you regarding our services and updates.
                            To improve our platform: we use the usage information to analyze user behavior and improve our platform's functionality and usability.
                            To comply with legal obligations: we may use your information to comply with legal obligations or enforce our terms of service.

                            <h3>How we protect your information:</h3>
                            We take appropriate measures to ensure the security of your personal information.
                            We restrict access to your personal information to only those who need it for the purposes of providing our services.
                            We will never sell your personal information to third parties.


                            <h3> Changes to our privacy policy:</h3>
                            We reserve the right to update our privacy policy at any time. If we make any changes, we will post the updated policy on our website.

                            If you have any questions about our privacy policy or our practices related to your personal information, please contact us at textpedia.app@gmail.com.
                        </p>
                    </CardBody>
                </Card>
            </>
        )
    }
}
