import {Card, Col, Row} from "react-bootstrap";
import React from "react";
import Thermometer from "react-thermometer-chart";
import GaugeChart from "react-gauge-chart";
import Bulb from "react-bulb";

export default class PLC extends React.Component {

    constructor(props){
        super(props)
        this.chartStyle = {
            height: 70,
        }
        this.fontStyle = {
            fontSize: ".4em",
        }
    }

    render() {
        return (
            <Card bg={'secondary'} text={'light'}>
                <Card.Title>
                    PLC {this.props.PLCID}
                    <hr/>
                </Card.Title>
                <Card.Body>
                    <Row xs={12}>
                        <Col xs={8}>
                            <GaugeChart id={this.props.gaugeID} style={this.chartStyle} />
                        </Col>
                        <Col xs={4}>
                            <Thermometer width="100%" height="61px"/>
                        </Col>
                    </Row>
                    <Row xs={12} style={this.fontStyle}>
                        <Col>
                            Error
                            <Bulb
                                size={10}
                                color="black"
                            />
                        </Col>
                        <Col xs={6}>
                            {""}
                        </Col>
                        <Col>
                            Error
                            <Bulb
                                size={10}
                                color="white"
                            />
                        </Col>
                    </Row>
                    <Row xs={12}>

                    </Row>
                </Card.Body>
            </Card>
        )
    }
}