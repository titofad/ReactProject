import styles from "./Header.module.css"
import logo from "../../assets/logo.png"

function Errand (){
    return (
        <nav className={styles.header}>
            <div className={styles.logo}> <img src={logo}/></div>
            <ul className={styles.list}>
               <b><li className={styles.hs}><span className={styles.span}> <a href="/">Home</a></span></li> </b>
                <b> <li className={styles.hs}> <a href="/About us">About us</a></li> </b>
                <b> <li className={styles.hs}> <a href="/services">services</a></li> </b>
                <b> <li className={styles.hs}> <a href="/contact"> contact</a></li> </b>
                <b> <li className={styles.hs}> <a href="/Help"> Help</a></li> </b>
                <b> <li className={styles.hs}> <a href="/CartGit push origin main"> Cart</a></li> </b>
            </ul>
            <button className={styles.button}> <b> <a href="/Shop">Shop Now</a></b></button>
        </nav>
    )
}


export default Errand;