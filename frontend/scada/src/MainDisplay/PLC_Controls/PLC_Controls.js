import {Container, Card, Col, Row, Button} from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import React from "react";
import Bulb from "react-bulb";
import GasValveSwitch from "./GasValveSwitch";

function renderButtons (numberOfButtons){
    const views = [];
    
    for (var i = 0; i < numberOfButtons; i++){
        views.push(
                <GasValveSwitch
                    key={"switchButton"+i}
                />
        );
    }
    return views;
}

export default class PLC_Controls extends React.Component {
    
    render() {

        return (
            <div className="mx-auto">
                <Card border="warning" bg={'secondary'} text={'light'}>
                    <Card.Title>
                        PLC Controls
                    </Card.Title>
                    <Card.Body>
                        <Container fluid={true}>
                            <Row>
                                { renderButtons(4) }
                            </Row>
                            <Row>
                                { renderButtons(4) }
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}