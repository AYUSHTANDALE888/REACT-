import { CDN_URL } from "../utils/constant";

const Restaurantcards = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;

    return (
        <div className="restocard">
            <img className="res-logo" alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}
        ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default Restaurantcards;