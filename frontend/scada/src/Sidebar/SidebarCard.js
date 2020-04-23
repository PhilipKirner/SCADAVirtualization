import {Card} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Sidebar extends React.Component {

    render() {
        return (
            <Card bg={'secondary'} text={'light'}>
                <Card.Title>
                    {this.props.title}
                    <hr/>
                </Card.Title>
                <Card.Body>
                    {this.props.children}
                </Card.Body>
            </Card>
        )
    }
}