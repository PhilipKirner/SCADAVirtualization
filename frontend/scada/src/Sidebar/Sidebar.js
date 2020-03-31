import {Card, Col} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarCard from "./SidebarCard.js";

export default class Sidebar extends React.Component {
    render(){
    return(
        <div>
            <SidebarCard title={"Linked PLC's"}>
                infoList
            </SidebarCard>
            <SidebarCard title={"Connection Errors"}>
                infoList
            </SidebarCard>
            <SidebarCard title={"Rechard Events"}>
                infoList
            </SidebarCard>
            <SidebarCard title={"Send Commands"}>
                infoList
            </SidebarCard>
            <SidebarCard title={"Error Logs"}>
                infoList
            </SidebarCard>

        </div>
)
}
}