import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () =>{

//Local State Variable - super powerful variable : to make Powerful use Hooks 



//normal JS variables 
let listOfRestaurant = [
  {
    data: {
      type: "F",
      id: "74454",
      name: "Domino's Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 1000,
    },
  },
  {
    data: {
      type: "F",
      id: "74444",
      name: "Ovenstory Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 1000,
    },
  },
]

    return (
        <div className="body">
          <div className="filter">
            <button className="filter-btn"
            onClick={() => 
              {listOfRestaurant = listOfRestaurant.filter((res) => res.data.avgRating >4);
             console.log(listOfRestaurant)
            }} > Top Rated Restaurants </button>
          </div>
          
          
          <div className="res-container"> 
            {listOfRestaurant.map((restaurant) =>
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            )}
          </div>
       
        </div>

    )
}

export default Body;