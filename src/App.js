/* eslint-disable */
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">shoesShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
              <Nav.Link> <Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<switch>
      {/* 메인 페이지로 접속 했을 때 */}
              <Route exact path="/">
                <Carousel className="background">
                  <Carousel.Item>
                    <Carousel.Caption>
                      <div>
                        <h3>20% Season Off</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <div className="contianer">
                  <div className="row">
                    {
                      shoes.map((a,i)=>{
                        return <Card shoes = { shoes[i] } i={i}/>
                      })
                    }     
                  </div>
                </div>
              </Route>
      {/* //메인페이지 */}


      {/* 상품페이지로 접속 했을 때 */}
              <Route path="/detail/:id">
                <Detail shoes={ shoes }/>
              </Route>


              <Route pacth="/:id">
                <div>아무거나 적었을때 이거 보여주세요</div>
              </Route>
</switch>

    </div>// app   
  );
}



function Card(props){
  return (
    <div className="col-md-4">
      <img src= { 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } &amp; { props.shoes.price }</p>
  </div>
  )
}

 
export default App;