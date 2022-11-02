import{useParams} from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
background : ${props => props.bg};
color : balck;
padding : 10px;
`

function Detail(props){

 let {id} = useParams();
 let searchItem = props.Nutrients.find(function(x){
  return x.id == id
 });

    return(
    <div className="container">
      <YellowBtn>버튼</YellowBtn>
  <div className="row">
    <div className="col-md-6">
      <img src={process.env.PUBLIC_URL + "/arginine1.png"} width="60%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{searchItem.title}</h4>
      <p>{searchItem.content}</p>
      <p>{searchItem.price}원</p>
      <p>{searchItem.explain}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}

export default Detail;
