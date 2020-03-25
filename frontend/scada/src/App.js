import React from 'react';
import './App.css';
import mockup from './GasBoisMockup.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card, CardColumns} from 'react-bootstrap';

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <h1>GasBois, Check your Gas!</h1>
        <img src={mockup} alt="it looks like this." />
        <Container>
          <Row>
            <Col>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  Linked PLC's
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  Connection Errors
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  Rechard Events
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  Send Commands
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  Error Logs
                  <hr/>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8}>
              <CardColumns>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  PLC
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  PLC
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Body>
                  PLC
                  <hr/>
                </Card.Body>
              </Card>
              <Card bg={'secondary'} text={'light'}>
                <Card.Title>PLC<hr/></Card.Title>
                <Card.Body>

                </Card.Body>
              </Card>
              </CardColumns>
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
