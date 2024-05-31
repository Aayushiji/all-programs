import React from "react";

function Navigation(){
    return(
        <nav className="container">
        <div className='logo'>
          <img src='https://m.media-amazon.com/images/I/51Iy5h5rqgL._SL1500_.jpg' height={100} width={100}/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    )
}
export default Navigation