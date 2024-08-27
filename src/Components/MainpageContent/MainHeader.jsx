import "./MainPage.css";

export const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-container">
        <h5 className="get-the-app">
        <img width="25" height="25" src="https://img.icons8.com/windows/32/hand-with-smartphone.png" alt="hand-with-smartphone" className="gta-logo"/>
          Get the App
        </h5>
        <nav className="header-nav">
          <h4 className="investors-relation">Investors Relation</h4>
          <h4 className="add-restaurant">Add Restaurant</h4>
          <h4 className="login">Log in</h4>
          <h4 className="signup">Signup</h4>
        </nav>
      </div>
    </header>
  );
};
