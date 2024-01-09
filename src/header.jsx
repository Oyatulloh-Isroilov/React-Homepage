function Header() {
    return <div className="headerBar">
        <div className="headerLogo">
        <img src="logo.svg" alt="" />
        </div>
        <div className="headerMenu">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </div>
    </div>
}

export default Header;