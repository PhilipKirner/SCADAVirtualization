import React from "react";
import ReactDOM from 'react-dom';
import {Col, Row} from "react-bootstrap";
import GaugeChart from "react-gauge-chart";
import Thermometer from "react-thermometer-chart";
import Bulb from "react-bulb";
import './plc.css';

export default class PressureTemp extends React.Component {
    constructor(props) {
        super(props)
        this.chartStyle = {
            height: 30,
        }
        this.fontStyle = {
            fontSize: ".4em",
        }
    }

    render() {
        return (
            <Col>
                { this.props.gauges }
            </Col>   
        )

    }
}
