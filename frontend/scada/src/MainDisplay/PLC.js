import {Card, CardColumns, Col, Row, Container} from "react-bootstrap";
import React from "react";
import Thermometer from "react-thermometer-chart";
import GaugeChart from "react-gauge-chart";

export default class PLC extends React.Component {

    constructor(props){
        super(props)
        this.chartStyle = {
            height: 250,
        }
        this.widthStyle = {
            height: '1px',
            width: '30vw',
        }
    }

    render() {
        return (
            <Card bg={'secondary'} text={'light'}>
                <Card.Title>
                    PLC
                    <hr/>
                </Card.Title>
                <Card.Body>
                    <Row xs={2}>
                        <Col xs={8}>
                            <GaugeChart id={this.props.gaugeID} />
                            <Container style={this.widthStyle}></Container>
                        </Col>
                        <Col xs={4}>
                            <Thermometer width="100%" height="61px"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}