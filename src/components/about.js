import React from "react";
import Rainbow from "../HoC/Rainbow";
const About = ()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo sunt amet ipsa sit nesciunt et, harum, molestiae explicabo suscipit consequatur eligendi cumque quam eveniet recusandae laborum consequuntur molestias ipsum eum id? Dolor itaque explicabo cumque tempore porro sint placeat?</p>
            
        </div>
    )
}

export default Rainbow(About);