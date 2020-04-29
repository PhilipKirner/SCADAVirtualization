import {Container, Card, Col, Row, Button} from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import React from "react";
import Bulb from "react-bulb";

/* renderButtons (numberOfButtons, buttonState){
    const views = [];
    
    for (var i = 0; i < numberOfButtons; i++){
        views.push(
                <BootstrapSwitchButton 
                    checked={buttonState} 
                    onstyle="success" 
                    offstyle="danger"
                    size="sm"
                    key={"switchButton"+i}
                    onChange={(checked: boolean) => {
                        this.setState((state) => {
                            if(buttonState == true){
                                return state.switch = false;
                            }
                        });
                    }}
                />
        );
    }
    return views;
} */

export default class PLC_Controls extends React.Component {
    state = {
        switch: true
    }

    renderButtons (numberOfButtons, buttonState){
        const views = [];
        const checked = buttonState;
        
        for (var i = 0; i < numberOfButtons; i++){
            views.push(
                    <BootstrapSwitchButton 
                        checked={true} 
                        onstyle="success" 
                        offstyle="danger"
                        size="sm"
                        key={"switchButton"+i}
                    />
            );
        }
        return views;
    }
    
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
                                { this.renderButtons(4, this.state.switch) }
                            </Row>
                            <Row>
                                { this.renderButtons(4) }
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}