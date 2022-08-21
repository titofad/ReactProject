import image16 from "../../assets/image16.png";
import styles from "./shop.module.css"
import image18 from "../../assets/group9.png"


function Product({ Product}) {
  const {title, image, category, price, id} = Product;
   const handleCick = () =>{
    console.log(Product)
   };


    return <div className={styles.card} onClick={handleCick} >
    <img src={image} className={styles.images} alt="" />
      <h1 className={styles.title}>{title}</h1>
      <div className="div-image">
      <img src={image18} className={styles.star} alt="" />
      <h6 className="header">(3.2% Review)</h6>
      </div>
      <button className="btn3"> order</button>
</div>
    
}

export default Product;