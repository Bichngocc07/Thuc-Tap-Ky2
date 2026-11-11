
import { useState } from 'react';
import type { FormEvent } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Đã nhận thông tin đăng nhập!');
  };

  return (
    <div className="auth-layout">

      {/* Ảnh minh họa */}
      <div className="image-side">
        <img
          src="/shopping-auth.png"
          alt="Shopping"
        />
      </div>

      {/* Form đăng nhập */}
      <main className="form-side">
        <div className="form-content">

          <h1>Log in to Exclusive</h1>

          <p className="subtitle">
            Enter your details below
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-actions">

              <button
                type="submit"
                className="primary-btn"
              >
                Log In
              </button>

              <a
                href="/forgot-password"
                className="forgot"
              >
                Forget Password?
              </a>

            </div>

          </form>

          <p className="switch-page">
            Don't have an account?

            <a href="/signup">
              Sign up
            </a>
          </p>

        </div>
      </main>

    </div>
  );
}

export default Login;
