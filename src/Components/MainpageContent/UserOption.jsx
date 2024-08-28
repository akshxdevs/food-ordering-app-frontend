import "./MainPage.css";
import ooimg from '../../assets/pngtree-variety-of-indian-food-in-front-of-a-dark-wooden-table-image_2930880.jpg' 
import dinimg from '../../assets/pngtree-variety-of-indian-food-in-front-of-a-dark-wooden-table-image_2930880.jpg' 
import leimg from '../../assets/pngtree-variety-of-indian-food-in-front-of-a-dark-wooden-table-image_2930880.jpg' 
export const UserOption = () => {
    return (
        <div className="useroption-wrapper">
            <div className="card-container">
                <div className="order-online">
                    <img src={ooimg} alt="order-online" className="oo-img"/>                                                                                       
                    <p className="title">Order Online</p>
                    <p className="description">Stay home and order to your doorstep</p>
                </div>
                <div className="dinning">
                    <img src={dinimg} alt="dinning" className="din-img" />
                    <p className="title">Dining</p>
                    <p className="description">View the city's favorite dinning venues</p>            
                </div>
                <div className="live-event">
                    <img src={leimg} alt="live-event" className="le-img"/>
                    <p className="title">Live Events</p>
                    <p className="description">Discover india's best events and concepts</p>
                </div> 
            </div>
        </div>
    );
}