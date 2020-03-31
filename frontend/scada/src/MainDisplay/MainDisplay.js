import {Card, CardColumns, Col} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PLC from "./PLC.js";

export default class MainDisplay extends React.Component {
    render(){
        return (
            <div>
                <CardColumns>
                    <PLC/>
                    <PLC/>
                    <PLC/>
                    <PLC/>
                </CardColumns>
            </div>

        )
    }
}