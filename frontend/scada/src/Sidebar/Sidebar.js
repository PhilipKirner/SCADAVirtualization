import {Card, Col} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Sidebar extends React.Component {
    render(){
    return(
        <div>
            <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                    Linked PLC's
                    <hr/>
                </Card.Body>
            </Card>
            <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                    Connection Errors
                    <hr/>
                </Card.Body>
            </Card>
            <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                    Rechard Events
                    <hr/>
                </Card.Body>
            </Card>
            <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                    Send Commands
                    <hr/>
                </Card.Body>
            </Card>
            <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                    Error Logs
                    <hr/>
                </Card.Body>
            </Card>
        </div>
)
}
}