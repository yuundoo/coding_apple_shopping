import { useState } from "react";
import data from "../data";

function Detail1(){

    let [Nutrients] = useState(data);

    return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{Nutrients[1].title}</h4>
      <p>{Nutrients[1].content}</p>
      <p>{Nutrients[1].price}</p>
      <p>{Nutrients[1].explain}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}

export default Detail1;
