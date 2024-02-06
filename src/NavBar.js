function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt="No image"
        />
      </div>
      <div className="search">
        <input type="text" name="search" id="search" />
        <button>Search</button>
      </div>
      <div className="items">
        <h4>Home</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
}

export default NavBar;
