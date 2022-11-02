import{useParams} from "react-router-dom";

function Detail(props){

 let {id} = useParams();
 console.log(id);

    return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={process.env.PUBLIC_URL + "/arginine1.png"} width="60%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.Nutrients[id].title}</h4>
      <p>{props.Nutrients[id].content}</p>
      <p>{props.Nutrients[id].price}</p>
      <p>{props.Nutrients[id].explain}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}

export default Detail;
