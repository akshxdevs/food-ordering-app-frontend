import "./MainPage.css";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpeg'
export const UserOption = () => {
    return (
        <div className="useroption-wrapper">
            <div className="card-container">
                <div className="order-online">
                    <img src={img1} alt="order-online" className="oo-img"/>                                                                                       
                    <p className="us-title">Order Online</p>
                    <p className="us-description">Stay home and order to your doorstep</p>
                </div>
                <div className="dinning">
                    <img src={img2}  alt="dinning" className="din-img" />
                    <p className="us-title">Dining</p>
                    <p className="us-description">View the city's favorite dinning venues</p>            
                </div>
                <div className="live-event">
                    <img src={img3} alt="live-event" className="le-img"/>
                    <p className="us-title">Live Events</p>
                    <p className="us-description">Discover india's best events and concepts</p>
                </div> 
            </div>
        </div>
    );
}