import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () =>{
    return (
        <div className="body">
          <div className="search-bar">Search</div>
          <div className="res-container"> 
            
            {/* one way to write restaurantcard */}
            {/* <RestaurantCard  resData={resList[0]} />
            <RestaurantCard  resData={resList[1]} />
            <RestaurantCard  resData={resList[2]} />
            <RestaurantCard  resData={resList[3]} />
            <RestaurantCard  resData={resList[4]} />
            <RestaurantCard  resData={resList[5]} />
            <RestaurantCard  resData={resList[6]} />
            <RestaurantCard  resData={resList[7]} />
            <RestaurantCard  resData={resList[8]} />
            <RestaurantCard  resData={resList[9]} /> */}

              {/* Using map function we call the restaurantcard */}

            {
            resList.map((restaurant) =>
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                       )
            }

            

          
          </div>
       
        </div>

    )
}

export default Body;