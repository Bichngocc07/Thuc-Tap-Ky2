
function Header() {
  return (
    <>
      <div className="sale-bar">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
          <a href="/shop"> ShopNow</a>
        </div>

        <button className="language">
          English⌄
        </button>
      </div>

      <header className="header">
        <a className="logo" href="/login">
          Exclusive
        </a>

        <nav>
          <a href="/login">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/signup">Sign Up</a>
        </nav>

        <div className="search-box">
          <input
            type="text"
            placeholder="What are you looking for?"
          />
          <span>⌕</span>
        </div>
      </header>
    </>
  );
}

export default Header;
