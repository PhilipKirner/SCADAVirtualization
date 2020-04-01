import React from 'react';
import './App.css';
import mockup from './GasBoisMockup.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import Sidebar from "./Sidebar/Sidebar.js";
import MainDisplay from "./MainDisplay/MainDisplay.js";

function App() {
  const style = {
    width: "98%",
    maxWidth: "none",
  }
  return (

    <div className="App">

      <header className="App-header">
        <h1>GasBois, Check your Gas!</h1>
        <img src={mockup} alt="it looks like this." />
        <Container style={style}>
          <Row>
            <Col>
              <Sidebar/>
            </Col>
            <Col xs={10}>
              <MainDisplay/>
            </Col>
          </Row>
        </Container>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a completed SCADA Wireframe, we can all go back to bed now.
        </a>
        <a
            className="App-link"
            href="https://www.npmjs.com/package/react-thermometer-chart"
            target="_blank"
            rel="noopener noreferrer"
        >
          This is the Temperature Widget
        </a>
        <a
            className="App-link"
            href="https://www.npmjs.com/package/react-gauge-chart"
            target="_blank"
            rel="noopener noreferrer"
        >
          This is the Pressure Widget
        </a>
        <a
            className="App-link"
            href="https://www.npmjs.com/package/react-bulb"
            target="_blank"
            rel="noopener noreferrer"
        >
          This is the Indicator Bulb Widget
        </a>
      </header>
    </div>
  );
}

export default App;
