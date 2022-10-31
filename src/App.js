
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import data from "./data.js";
import {Routes, Route, Link} from "react-router-dom";
function App() {

  let [Nutrients] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">iHerb</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">메뉴</Nav.Link>
          <Nav.Link href="#features">세일 제품</Nav.Link>
          <Nav.Link href="#pricing">내 정보</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
    <Route path='/' element={<div> <div className='main-bg'></div>
      <div className="container">
      <div className="row">
       {
        Nutrients.map((a,i) =>{
          return (
          <Card Nutrients={Nutrients[i]} i={i+1}></Card>
          )
        })
       }
      </div>
    </div> </div>} />
      <Route path='/detail' element={<div>상세 페이지</div>} />
      <Route path='/about' element={<div>어바웃 페이지</div>} />
    </Routes>
     
    </div>
  );
}

function Card(props){
  return (
      <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '/arginine' + props.i +'.png'} width="80%" />
          <h4>{props.Nutrients.title}</h4>
          <p>{props.Nutrients.content}</p>
          <p>{props.Nutrients.price}</p>
      </div>
  )
}

export default App;
