import Restaurantcards from "./Restaurantcards";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
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
                {resList.map((restaurant) => (
                    <Restaurantcards key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;