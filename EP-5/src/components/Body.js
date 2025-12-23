import Restaurantcards from "./Restaurantcards";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {

    // Local State variable - super powerful variable

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(() => {
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const data =  await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        // optional chaining
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Conditional Rendering
    if(listOfRestaurants.length === 0){
       return <Shimmer />
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick = { () => {
                    // Filter logic
                    const FilteredList = listOfRestaurants.filter( 
                        (res) => res.info.avgRating > 4
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
                    <Restaurantcards key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;