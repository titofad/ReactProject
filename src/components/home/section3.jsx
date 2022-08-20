import React,{useEffect} from "react";
import "./section3.css";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";
import image18 from "../../assets/group9.png"

function Section3 () {
      let [value, setValue] = React.useState("");

       let changeValue = () => {
        setValue("");
      };

     React.useEffect(() => {
        setTimeout(() => {
            changeValue();
        }, 3000);
      }, []);

      let [sectionCard, setSectionCard] = React.useState("");

      React.useEffect(() => {
         setTimeout(() => {
             setSectionCard([
               { id:1, name: "tomatoes", image: image10, images:image18},  
               { id:2, name: "potatoes", image: image11, images:image18},  
               {id:3, name: "apple", image: image12, images:image18},  
               {id:4, name: "meat", image: image13, images:image18},
               {id:5, name: "groundnut oil", image: image14,images:image18},  
               {id:6, name: "pomo", image: image15, images:image18},   
               {id:7, name: "onions", image: image16, images:image18},  
              {id:8, name: "brocolli", image: image17, images:image18},  
             ]);
            
         }, 3000);
     }, []);


    return( 

   <section className="sect3">
      <b><h1 className="head3"> Fresh quality Fruits and Vegetables just for <br />
     your Consumption </h1></b> 

     
          <div className="image-holder"> 
               { sectionCard ?
                  sectionCard.map(function (item,index) {
                   return (
                       <div className="sectionCard" key={item.id}>
                         <img src={item.image} alt="" />
                           <h1>{item.name}</h1>
                           <div className="div-image">
                           <img src={item.images} alt="" />
                           <h6 className="h6">(3.2% Review)</h6>
                           </div>
                           <button className="btn3"> order</button>
                  </div>
                   );
                 }): <div> Loading...</div>
                 
               } 
           </div>   


    
   </section>
);
}
export default Section3;