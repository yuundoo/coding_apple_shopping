function Detail(props){

    return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={process.env.PUBLIC_URL + "/arginine1.png"} width="60%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props[0].title}</h4>
      <p>{props[0].content}</p>
      <p>{props[0].price}</p>
      <p>{props[0].explain}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}

export default Detail;
