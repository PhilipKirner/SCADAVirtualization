import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default class GasValveSwitch extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            valveOn:true
        }
    }

    render() {

        return (
            <BootstrapSwitchButton
                checked={true}
                onstyle="success"
                offstyle="danger"
                size="sm"
                key={this.props.key}
                onChange={(checked) => {
                    this.setState({ valveOn: checked })
                }}
            />
        )
    }
}