import image16 from "../../assets/image16.png";
import image18 from "../../assets/group9.png"


function Product(){
    return <div className="sectionCard" >
    <img src={image16} alt="" />
      <h1>carrot</h1>
      <div className="div-image">
      <img src={image18} alt="" />
      <h6 className="h6">(3.2% Review)</h6>
      </div>
      <button className="btn3"> order</button>
</div>
    
}

export default Product;