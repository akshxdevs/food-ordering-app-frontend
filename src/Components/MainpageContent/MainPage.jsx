import './MainPage.css';
import { FoodDisplay } from './FoodDisplay';
import { FoodSlider } from './FoodSlider';
import { MainHeader } from './MainHeader';
import { TitleandSearchbar } from './TitleandSearchbar';
import { UserOption } from './UserOption';
import { WebDetails } from './WebDetails';

export const MainPage = () => {
  return (
    <div>
      <div className="hole-container">
        <MainHeader />
        <TitleandSearchbar />
      </div>
      <UserOption />
      <FoodSlider />
      <FoodDisplay/>
      <WebDetails/>
    </div>
  );
};
