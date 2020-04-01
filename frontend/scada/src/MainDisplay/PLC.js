import {Card, Col, Row} from "react-bootstrap";
import React from "react";
import PLC_CONTROLS from "./PLC_Controls.js";
import ConnectionStatus from "./ConnectionStatus.js";
import GaugeChart from "react-gauge-chart";
import PressureTemp from "./PressureTemp.js"
import Thermometer from "react-thermometer-chart";
import Bulb from "react-bulb";

export default class PLC extends React.Component {

    render() {
        return (
            <Card bg={'secondary'} text={'light'}>
                <Card.Title>
                    PLC {this.props.PLCID}
                    <hr/>
                </Card.Title>
                <Card.Body>
                    <Row xs={12}>
                        <Col xs={7}>
                            <PressureTemp gaugeID={this.props.gaugeID} />
                        </Col>
                        <Col xs={5}>
                            <PLC_CONTROLS/>
                        </Col>
                    </Row>
                    <Row xs={12}>
                        <ConnectionStatus/>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}