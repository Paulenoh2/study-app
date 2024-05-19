import React from "react";
import { Link } from "react-router-dom";

const Home = ({home1,text})=>{

return(

    <div className="image-container">
        
<img src={home1} alt="background" className="background-image" />
        <div className="text-overlay">{text}</div>



    </div>




)

}
export default Home;