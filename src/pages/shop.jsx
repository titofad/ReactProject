import React, {useState, useEffect} from "react"
import Header from "../components/common/Header"
import Product from "../components/shop/Product"
import styles from "../components/shop/shop.module.css"

function Shop(){

    let [product,setProduct] = useState([]);

    useEffect(function () {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            setProduct(json);
        });
    },[]);

    return(
        <section>
            
            <Header/>
            <div className={styles.container}>
            {
                product.length > 0 ? (
                    product.map((product)=> (<Product Product = {product}/>
                     ))
                ) : ( <div>Loading...</div>)}
           
            </div> 
        </section>
    );
    
}

export default Shop;