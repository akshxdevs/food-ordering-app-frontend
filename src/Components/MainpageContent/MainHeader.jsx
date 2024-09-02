import { useEffect, useState } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
export const MainHeader = () => {
  const [login,setlogin] = useState(false);
  const [username,setUsername] = useState("");

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
      setlogin(true);
    }
  },[]);

  const logout = () => {
    localStorage.clear();
    setlogin(false);
    setUsername("");
    console.log("logged out sucessfully..");
    
  }

  return (
    <header className="main-header">
      <div className="main-container">
        <div className="get-the-app">
        <img width="25" height="25" src="https://img.icons8.com/windows/32/hand-with-smartphone.png" alt="hand-with-smartphone" className="gta-logo"/>
          <h5>Get the App</h5>
        </div>
        <nav className="header-nav">
          <h4 className="investors-relation">Investors Relation</h4>
          {login ? 
          <h4>{username}</h4>
          :
          <Link to={"/userlogin"} style={{
          textDecoration:"none",
          color:"rgb(203, 208, 213)",
          }}><h4 className="login">Log in</h4></Link>}
          <Link to={"/respage"} style={{
          textDecoration:"none",
          color:"rgb(203, 208, 213)",
          }}><h4 className="add-restaurant">Add Restaurant</h4></Link>
          <Link to={"/usersignup"} style={{
            textDecoration:"none",
            color:"rgb(203, 208, 213)",
          }}><h4 className="signup">Signup</h4></Link>
          {login ? 
          <button onClick={logout}>logout</button>
          : <></>}
        </nav>
      </div>
    </header>
  );
};
