import React from 'react';
import './App.css';
import mockup from './GasBoisMockup.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card, CardColumns} from 'react-bootstrap';
import Sidebar from "./Sidebar/Sidebar.js";
import MainDisplay from "./MainDisplay/MainDisplay.js";

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <h1>GasBois, Check your Gas!</h1>
        <img src={mockup} alt="it looks like this." />
        <Container>
          <Row>
            <Col>
              <Sidebar/>
            </Col>
            <Col xs={9}>
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
      </header>
    </div>
  );
}

export default App;
