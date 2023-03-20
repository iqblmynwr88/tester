import logo from './Globe.png';
import banner from './banner.png';
import icon_secure from './shield.png';
import icon_edge from './edge.png';
import icon_website from './website.png';
import icon_money from './money.png';
import './App.css';

// For navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App2">
      {/* Navbar Here */}
      <Navbar sticky="top" expand="lg" className='bg-hexa' variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img alt='' src={banner} height="50" className='d-inline-block align-top'/>{''}</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Link href="#deets" active>Home</Nav.Link>
              <Nav.Link href="#deets">Stake</Nav.Link>
              <Nav.Link href="#deets">Validators</Nav.Link>
              <Nav.Link href="#deets">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      {/* Section Body */}
      <header className='body-hexa'>
        <Container>
          <Row className='blank-hexa'>

          </Row>
          <Row>
            <Col xs="12" lg="6">
              <h3>Hi, there 👋🎉</h3>
              <p>welcome to our <b>"home"</b>, yes we may call it home or whatever you want to call it. 🥰🫰</p>
              <br/>
              <p>Our house is still in the process of being repaired, there are a few things we have to add. so we apologize if there are some features that are still not working properly.</p>
            </Col>
            <Col xs lg="6">
              <img src={logo} className="globe" alt="logo" />
            </Col>
          </Row>
          <Row className='blank-hexa'>
          </Row>
          <Row>
            <Col className='hexa-text-center'>
              <h3>How to stake in our validator?</h3>
              <br/>
              <p>Hexawolf88 Validators helps investors compound their crypto investments with low commission and advanced support</p>
              <br/>
              <Button variant="outline-light">Stake With Us</Button>
            </Col>
          </Row>
          <Row className='blank-hexa'>
          </Row>
          <Row>
            <Col xs lg='12' className='text-center'>
              <h3>Why Stake With US</h3>
            </Col>
            <Col xs='12' lg='3'>
              <Col className='box-10'>
                <img src={icon_secure} className='logo-box' alt="logo" /><span className='span-logo'>Service is Highly secured with 24/7 Monitoring.</span>
              </Col>
            </Col>
            <Col xs='12' lg='3'>
              <Col className='box-10'>
                <img src={icon_edge} className='logo-box' alt="logo" /><span className='span-logo'>Fast and Reliable Explorer between chains.</span>
              </Col>
            </Col>
            <Col xs='12' lg='3'>
              <Col className='box-10'>
                <img src={icon_website} className='logo-box' alt="logo" /><span className='span-logo'>Provide Public Endpoints for Communities.</span>
              </Col>
            </Col>
            <Col xs='12' lg='3'>
              <Col className='box-10'>
                <img src={icon_money} className='logo-box' alt="logo" /><span className='span-logo'>Low Comission and Impressive Uptime with 0 Slashing!.</span>
              </Col>
            </Col>
          </Row>
        </Container>
      </header>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
