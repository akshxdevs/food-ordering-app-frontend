import { useEffect, useState } from 'react';
import './MainPage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const FoodDisplay = () => {
    const [place, setPlace] = useState("Your City");
    const [restaurants, setRestaurants] = useState([]); 

    const getAllRestaurants = async () => {
        try {
            const res = await axios.get("http://localhost:3000/foods");
            const data = res.data;
            setRestaurants(data.getAllFoods);
        } catch (error) {
            toast.error("List is empty. Please add some items through admin.");
        }
    };

    useEffect(() => {
        getAllRestaurants();
    }, []);

    return (
        <div>
            <h3 className='fs-title'>Restaurants with online food delivery in {place}</h3>
            <div className="filter-btns">
                <button className='fs-btn'>Filter</button>
                <button className='fs-btn'>Sort By</button>
                <button className='fs-btn'>Fast Delivery</button>
                <button className='fs-btn'>Ratings 4.0+</button>
                <button className='fs-btn'>Offers</button>
                <button className='fs-btn'>Pure Veg</button>
                <button className='fs-btn'>Rs. 300-Rs. 600</button>
                <button className='fs-btn'>Less than Rs. 300</button>
            </div>
            <div className="restaurant-container">
                <div className="restaurant-list">
                    {restaurants.length > 0 ? (
                        restaurants.map((res, index) => (
                            <div className="restaurant-card" key={index}>
                                <img src={res.resImg} alt="res" className="restaurant-img" />
                                <p className='res-name'>{res.resName}</p>
                                <p className='res-rating'>{res.resRating}</p>
                                <p className='res-info'>{res.resInfo}</p>
                            </div>
                        ))
                    ) : (
                        <p>No restaurants available.</p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
