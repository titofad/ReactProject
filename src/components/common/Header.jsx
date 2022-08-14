import styles from "./Header.module.css"
import logo from "../../assets/logo.png"

function Errand (){
    return (
        <nav className={styles.header}>
            <div className={styles.logo}> <img src={logo}/></div>
            <ul className={styles.list}>
               <b><li className={styles.hs}><span className={styles.span}>Home</span></li> </b>
                <b> <li className={styles.hs}>About us</li> </b>
                <b> <li className={styles.hs}>services</li> </b>
                <b> <li className={styles.hs}>contact</li> </b>
                <b> <li className={styles.hs}>Help</li> </b>
            </ul>
            <button className={styles.button}> <b> contact us</b></button>
        </nav>
    )
}


export default Errand;