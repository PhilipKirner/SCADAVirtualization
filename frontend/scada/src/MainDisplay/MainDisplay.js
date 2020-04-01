import {Card, CardColumns, Col} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PLC from "./PLC.js";

export default class MainDisplay extends React.Component {
    render(){
        return (
            <div>
                <CardColumns >
                    <PLC gaugeID={"gauge1"}/>
                    <PLC gaugeID={"gauge2"}/>
                    <PLC gaugeID={"gauge3"}/>
                    <PLC gaugeID={"gauge4"}/>
                    <PLC gaugeID={"gauge5"}/>
                    <PLC gaugeID={"gauge6"}/>
                    <PLC gaugeID={"gauge7"}/>
                    <PLC gaugeID={"gauge8"}/>
                    <PLC gaugeID={"gauge9"}/>
                </CardColumns>
            </div>

        )
    }
}