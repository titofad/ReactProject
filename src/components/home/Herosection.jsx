import styles from "../common/Header.module.css";
import HeroImg from "../../assets/HeroImage.png";
import icon from "../../assets/icon.svg";

function Hero (){
    return (
        <div className={styles.hero1}>
            <div className={styles.left}>
              <h1 className={styles.head}>Fresh grocery delivery services, <br /> we bring the store to your <br /> door step</h1>
              <p className={styles.para}>We serve the best of fresh, delicious ,nutrient, rich<br/>
                 and healthy food.Fastest delivery and easy pickup.</p>
                 <div className={styles.holder}>
                      <button className={styles.button2}>shop now </button>
                        <div className={styles.videobtn}>
                       <img src={icon} className={styles.icon} alt="" />
                        <h6>order process</h6>
                      </div>
                 </div>
            </div>
            <div className={styles.right}>
              <img src={HeroImg} alt="" className={styles.heroImage}/>
            </div>
        </div>
        
        
    )
}

export default Hero;
