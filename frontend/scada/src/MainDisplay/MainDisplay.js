import {Card, CardColumns, Col} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PLC from "./PLC.js";

export default class MainDisplay extends React.Component {
    constructor(props){
        super(props)
        this.list = new Array(10)
        for (let i = 1; i < 13; i++){
            this.list.push(i)
        }
    }
    render(){
        return (
            <div>
                <CardColumns >
                    {this.list.map((number) => <PLC PLCID={number} gaugeID={"gauge"+number}/>)}
                </CardColumns>
            </div>

        )
    }
}