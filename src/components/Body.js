import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () =>{

//Local State Variable - super powerful variable : to make Powerful use Hooks 

const [listOfRestaurant, setListOfRestaurant] = useState([resList]);

useEffect(() =>{
  fetchData();
},[]);

const fetchData=async ( ) =>{
   const data = await fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&page-type=DESKTOP_WEB_LISTING"
   );

   const json = await data.json();
   setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};



    return (
        <div className="body">
          <div className="filter">
            <button className="filter-btn"
            onClick={() => 
              {
                const filteredlist = listOfRestaurant.filter((res) => res.data.avgRating >= 4);

             setListOfRestaurant(filteredlist);
            }} > Top Rated Restaurants </button>
          </div>
          
          
          <div className="res-container">
            {listOfRestaurant.map((restaurant) =>
              (<RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
       
        </div>

    )
}

export default Body;