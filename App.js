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
 
const RestaurantCard = () => {
    return (
       <div className="res-card">
         <img className="res-img" alt="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4" />
         <h3>Meghana Foods</h3>
         <h4>Biryani, South Indian</h4>
         <h4>4.6 star</h4>
         <h4>35-40 MINS</h4>
       </div> 
     

    )
}



const Body = () =>{
    return (
        <div className="body">
          <div className="search-bar">Search</div>
          <div className="res-container">
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
          </div>
       
        </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
