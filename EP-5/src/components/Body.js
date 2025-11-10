import Restaurantcards from "./Restaurantcards";
import { useState } from "react";
import reslist from "../utils/mockData";

const Body = () => {

    // Local State variable - super powerful variable

    const [listOfRestaurants, setlistOfRestaurants] = useState(reslist);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick = { () => {
                    // Filter logic
                    const FilteredList = listOfRestaurants.filter( 
                        (res) => res.data.avgRating > 4
                    );
                    setlistOfRestaurants(FilteredList);
                }}>
                    TOP RATED RESTAURANTS
                </button>
            </div>
            <div className="resto-container">   
                {/* <Restaurantcards resData={resList[0]} />
                <Restaurantcards resData={resList[1]} />
                <Restaurantcards resData={resList[2]} />
                <Restaurantcards resData={resList[3]} />
                <Restaurantcards resData={resList[4]} />
                <Restaurantcards resData={resList[5]} />
                <Restaurantcards resData={resList[6]} />
                <Restaurantcards resData={resList[7]} />
                <Restaurantcards resData={resList[8]} /> */}
                {listOfRestaurants.map((restaurant) => (
                    <Restaurantcards key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;