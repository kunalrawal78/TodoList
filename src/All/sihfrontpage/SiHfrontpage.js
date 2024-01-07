import React from "react";
import "./Sihfrontpage.css";
import Video from "./Video";

const Frontpage=()=>{
    return(
        <>
         <div className="navbar">
    <span className="logo">SIH</span>
   <a href="#">Home</a>
   <a href="#">Survillence</a>
   <a href="#">Assessment</a>
   <a href="#" >Mental Health</a>
   <a href="#" >Contact</a>

    <button className="btn_navbar">
    Login

    </button>
    <button className="btn_navbar">
Signup
    </button>

    </div>

    <div className="backg">
<div className="backgtext">
    <h2>Empowering Youth, Nuturing Minds: Tracking Mental Well-being</h2>
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>

<div className="btn_backg">
   <button className="get_btn">Get Started</button>
 <button className="lm_btn">Learn More</button>  
</div>

</div>


    </div>
  
<div className="vid">
<video width="500" autoPlay>
    <source src="/Users/kunalrawal/Downloads/reactjs/myapp/video.mp4"></source>
</video>
</div>

  
        </>
    );

}
export default Frontpage;