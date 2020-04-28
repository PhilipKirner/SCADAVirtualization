import {Card, Col, Row, Container} from "react-bootstrap";
import ReactDOM from 'react-dom';
import React from "react";
import PLC_CONTROLS from "./PLC_Controls/PLC_Controls.js";
import ConnectionStatus from "./ConnectionStatus.js";
import PressureTemp from "./PressureTemp.js"
import Thermometer from "react-thermometer-component";
import GaugeChart from "react-gauge-chart";
import Bulb from "react-bulb";
import './plc.css';


export default class PLC extends React.Component {
    constructor(props){
        super(props)
        this.createPressureAndTemp = this.createPressureAndTemp.bind(this)

        const tempStats = this.createPressureAndTemp();
        this.state = {
            chartStyle: {
                height: 30
            },
            stats: tempStats
        }

    }

    createPressureAndTemp() {
        const tempStats = {
            pressure: 0,
            temp: 0,
            pressureInd: "",
            tempInd: ""
        };
        
        tempStats.pressure = Math.random();
        tempStats.temp = Math.floor(Math.random() * 100) + 1;
        if (tempStats.pressure > 0.5){
            tempStats.pressureInd = "red";
        } else {
            tempStats.pressureInd = "green";
        }
        if (tempStats.temp > 50){
            tempStats.tempInd = "red";
        } else {
            tempStats.tempInd = "green";
        }
        return tempStats;
    }

    createGauges() {
        const chartStyle = {
            height: 30,
        }
        return <Row bsPrefix="gauges">
                        <Col bsPrefix="pressure">
                            <Row bsPrefix="pressureRow">
                                <GaugeChart 
                                    nrOfLevels={30} 
                                    colors={["#00ff7f", "#FFC371", "#FF5F6D"]}
                                    textColor={"#00ff7f"}
                                    formatTextValue= {(value) => { return ((value + 800)).toFixed(2) + " psi"}}
                                    percent={this.state.stats.pressure} 
                                    id={this.props.gaugeID} 
                                    style={chartStyle}
                                />
                            </Row>
                            <Row bsPrefix="indicator">
                                <Bulb
                                    size={10}
                                    color={ this.state.stats.pressureInd }
                                />
                            </Row>
                            <Row bsPrefix="errorTag">
                                Error Status
                            </Row>
                        </Col>
                        <Col bsPrefix="temp">
                            <Row bsPrefix="thermo">
                                <Thermometer 
                                    theme={"dark"} 
                                    size={"normal"} 
                                    height="140" 
                                    value={this.state.stats.temp}
                                />
                            </Row>
                            <Row bsPrefix="indicator">
                                <Bulb
                                    size={10}
                                    color={ this.state.stats.tempInd }
                                />
                            </Row>
                            <Row bsPrefix="errorTag">
                                Error Status
                            </Row>
                        </Col>  
                    
                </Row>;
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
                        <PressureTemp gaugeID={this.props.gaugeID} gauges={ this.createGauges() } ind={ [this.state.stats.pressureInd, this.state.stats.tempInd] }/>
                        <Col xs={5}>
                            <PLC_CONTROLS/>
                        </Col>
                    </Row>
                    <Row xs={12}>
                        <ConnectionStatus status={"Connected"}/>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}