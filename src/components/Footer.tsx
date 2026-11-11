
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <section>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>

          <form
            className="subscribe"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email đăng ký"
            />

            <button type="submit">
              ➤
            </button>
          </form>
        </section>

        <section>
          <h4>Support</h4>
          <p>PTIT</p>
          <p>tlshop@gmail.com</p>
          <p>+88015-88888-9999</p>
        </section>

        <section>
          <h4>Account</h4>
          <a href="/account">My Account</a>
          <a href="/login">Login / Register</a>
          <a href="/cart">Cart</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/shop">Shop</a>
        </section>

        <section>
          <h4>Quick Link</h4>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms Of Use</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </section>

      </div>

      <div className="copyright">
        © Copyright RimeI 2022. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
