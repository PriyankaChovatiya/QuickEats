import React from "react";
import ReactDOM from "react-dom";

/**
 * Header 
 * - logo 
 * - navbar
 * Body 
 * - Search
 * - RestaurantContainer 
 *    - Reastaurant Card 
 * Footer 
 * - Copyright 
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return (
          <div className="header">
                 <div className="logo-container">
                     <img className="logo" src="https://quickeats.ai/wp-content/uploads/2021/03/QE_Signage-Wordmark-with-Monogram_Solid-Color.png" />
                 </div>
                <div className="navbar-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                </div>
         </div>
    )
}
 

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
