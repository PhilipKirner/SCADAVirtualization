import React from "react";
import {Col, Row} from "react-bootstrap";
import GaugeChart from "react-gauge-chart";
import Thermometer from "react-thermometer-chart";
import Bulb from "react-bulb";

export default class PressureTemp extends React.Component {

    constructor(props) {
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
            <div>
                <Row xs={12}>
                    <Col xs={9}>
                        <GaugeChart id={this.props.gaugeID} style={this.chartStyle}/>
                    </Col>
                    <Col xs={3}>
                        <Thermometer width="100%" height="120px"/>
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
                    <Col xs={7}>
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
            </div>
        )

    }
}