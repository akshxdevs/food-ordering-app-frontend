import { FoodSlider } from './FoodSlider';
import { MainHeader } from './MainHeader';
import './MainPage.css';
import { TitleandSearchbar } from './TitleandSearchbar';
import { UserOption } from './UserOption';

export const MainPage = () => {
  return (
    <div>
      <div className="hole-container">
        <MainHeader />
        <TitleandSearchbar />
      </div>
      <div>
        <UserOption />
      </div>
      <FoodSlider />
    </div>
  );
};
