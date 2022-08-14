import React from "react";
import Index from "../../pages";
import "./Section2.css";
import img1 from "../../assets/Ellipse 1.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 3.png";
import img4 from "../../assets/Ellipse 4.png";
import img5 from "../../assets/Ellipse 5.png";
import img6 from "../../assets/Ellipse 6.png";
import img8 from "../../assets/Ellipse 8.png";
import img9 from "../../assets/Ellipse 9.png";
import guy from "../../assets/guy.png";

function Section2(){
    let [value, setValue] = React.useState("tosin");

    let changeValue = () => {
        setValue("charles");
    };

    React.useEffect(() => {
        setTimeout(() => {
            changeValue();
        }, 3000);
    }, []);
   
    let [popular, setPopular ] = React.useState("");

    React.useEffect(() => {
        setTimeout(() => {
            setPopular([
              { id:1, name: "tomatoes", image: img1},  
              { id:2, name: "carrot", image: img2},  
              {id:3, name: "cucumber", image: img3},  
              {id:4, name: "yellow pepper", image: img4},
              {id:5, name: "orange", image: img5},  
              {id:6, name: "Apple", image: img6},   
              {id:7, name: "Grapes", image: img8},  
              {id:8, name: "strawberry", image: img9},  
            ]);
            
        }, 3000);
    }, []);

return(
    <section className="section2">
        <section > 
            <h1 id="head"> popular items {value}</h1>
            <div className="imageholder">
               <div className="imgdiv"> <img src={img1} alt="" />
                <h1>tomatoes</h1>
                </div>
                <div className="imgdiv"> <img src={img2} alt="" />
                <h1>carrot</h1>
                </div>
                <div className="imgdiv"> <img src={img3} alt="" />
                <h1>cucumber</h1>
                </div>
                <div className="imgdiv"> <img src={img4} alt="" />
                <h1>yellow pepper</h1>
                </div>
                <div className="imgdiv"> <img src={img5} alt="" />
                <h1>orange</h1>
                </div>
                <div className="imgdiv"> <img src={img6} alt="" />
                <h1>Apple</h1>
                </div>
                <div className="imgdiv"> <img src={img8} alt="" />
                <h1>Grapes</h1>
                </div>
                <div className="imgdiv"> <img src={img9} alt="" />
                <h1>Strawberry</h1>
                </div>
            </div>
        </section>
        <section>
            <div className="bg">
             <img src={guy} alt="" />
            </div>
            <div >
                <div className="sec">
                    <h1>Why  you should use <br /> our service?</h1>
                </div>
            </div>
        </section>
     </section>
);

}
export default Section2;