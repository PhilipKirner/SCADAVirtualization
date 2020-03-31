import {Card, CardColumns, Col} from "react-bootstrap";
import React from "react";

export default class PLC extends React.Component {
    render(){
        return (
            <Card bg={'secondary'} text={'light'}>
                <Card.Title>PLC<hr/></Card.Title>
                <Card.Body>
                    info
                </Card.Body>
            </Card>
        )
    }
}