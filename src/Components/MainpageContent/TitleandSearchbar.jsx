import "./MainPage.css"

export const TitleandSearchbar = () => {
    return(
        <div className="main">
            <h1 className="main-title">Food Order App</h1>
            <h2 className="des">Discover the best food & drinks in Chennai</h2>
            <div className="search-div">
                <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png" alt="search--v1"className="search-img" />
                <input type="text" className="search-bar" placeholder="Search for restaurent, cusine or a dish"/>
            </div>
        </div>
    );
}