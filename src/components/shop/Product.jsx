import React, {useState} from "react"
import image16 from "../../assets/image16.png";
import styles from "./shop.module.css"
import image18 from "../../assets/group9.png"
import Button from 'react-bootstrap/Button';
import { setStorage, getStoredValue } from "../../utils/storageHelper"



function Product({ Product}) {
  const {title, image, category, price, id} = Product;
  // define a state and use the getStorageValue function to get the value fom localStorage if not found return[]
  const [carts, setCart ]= useState(JSON.parse(getStoredValue("cart")) ||[]);

  
   const handleCick = () =>{
    // create a new array and push the new product to the array
    const newCart = [...carts, {id, title, image, category, price, qty: 1 }];
    console.log(setStorage("cart", JSON.stringify(newCart)));
    // update the state
    setCart(newCart)
   };


    return <div className={styles.card} onClick={handleCick} >
    <img src={image} className={styles.images} alt="" />
      <h1 className={styles.title}>{title}</h1>
      <div className="div-image">
      <img src={image18} className={styles.star} alt="" />
      <h6 className="header text-danger">(3.2% Review)</h6>
      </div>
      {/* <button className="btn3"> order</button> */}
      <Button variant="success">shop now</Button>

</div>
    
}

export default Product;