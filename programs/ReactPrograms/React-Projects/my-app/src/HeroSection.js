import React from "react";

function HeroSection(){
    return(
        <main className="hero container">
            <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>The logo is derived from goddess' wing,'swoosh', which symbolises the sound of speed,<br/> movement, power and motivation.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available No</p>
            </div>
            <div className="brand-icons">
                <img src="https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg" height={50} width={50}/>
                <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-online-shopping-android-app-download-12.png" height={50} width={50}/>
            </div>
            </div>
            <div className="img">
                <img src="https://m.media-amazon.com/images/I/61+hrj2FI5L._AC_UY1000_.jpg" height={500} width={500}/>
            </div>
        </main>
    )

}
export default HeroSection