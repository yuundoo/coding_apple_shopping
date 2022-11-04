import { useEffect, useState } from "react";
import{useParams} from "react-router-dom";
import styled from "styled-components";




function Detail(props){
  //렌더링이 실행된후에 실행됨(어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착 )
  useEffect(()=>{

  })
  setTimeout(()=>{
    
  })

  let[count, setCount] = useState(0)

 let {id} = useParams();
 let searchItem = props.Nutrients.find(function(x){
  return x.id == id
 });

    return(
    <div className="container">
      <div className="alert alert-warning">
        2초이내 구매시 할인
      </div>
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
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
