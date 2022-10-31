import { useState } from "react";
import data from "../data";

function Detail(){

    let [Nutrients] = useState(data);

    return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={process.env.PUBLIC_URL + "/arginine1.png"} width="60%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{Nutrients[0].title}</h4>
      <p>{Nutrients[0].content}</p>
      <p>{Nutrients[0].price}</p>
      <p>{Nutrients[0].explain}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}

export default Detail;
