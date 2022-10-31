
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import data from "./data.js";
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import styled from "styled-components";
import Detail from './components/Detail';
import Detail1 from './components/Detail1'
import Detail2 from './components/Detail2'
const StyleLink = styled(Link)`
  text-decoration-line: none;
`;

function App() {

  let [Nutrients] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Nav.Link onClick={()=> {navigate("/")}}>iHerb</Nav.Link>
        <Nav className="me-auto">
          <Nav.Link href="#home">메뉴</Nav.Link>
          <Nav.Link href="#features">세일 제품</Nav.Link>
          <Nav.Link onClick={()=> {navigate("/detail2")}}>내 정보</Nav.Link>
          <Nav.Link onClick={()=> {navigate("/about")}}>이벤트</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      
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
      <Route path='/detail1' element={<Detail Nutrients={Nutrients} />}/>
      <Route path='/detail2' element={<Detail1 Nutrients={Nutrients}/>}/>
      <Route path='/detail3' element={<Detail2  Nutrients={Nutrients}/>}/>
      <Route path="/about" element={ <EventPage/> } >  
      <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
      <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
      </Route>
    </Routes>
     
    </div>
  );
}

function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
} 

function Card(props){
  return (
      <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '/arginine' + props.i +'.png'} width="70%" />
         <p><StyleLink to="/detail1" >{props.Nutrients.title}</StyleLink></p> 
          <p>{props.Nutrients.content}</p>
      </div>
  )
}

export default App;
