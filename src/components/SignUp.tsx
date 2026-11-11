
import { useState } from 'react';
import type { FormEvent } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Đã nhận thông tin đăng ký!');
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

      {/* Form đăng ký */}
      <main className="form-side">
        <div className="form-content signup-content">

          <h1>Create an account</h1>

          <p className="subtitle">
            Enter your details below
          </p>

          <form onSubmit={handleSignUp}>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
              minLength={6}
              required
            />

            <button
              type="submit"
              className="primary-btn full-btn"
            >
              Create Account
            </button>

            <button
              type="button"
              className="google-btn"
              onClick={() =>
                alert('Cần tích hợp Google OAuth để sử dụng chức năng này.')
              }
            >
              <b>G</b>
              Sign up with Google
            </button>

          </form>

          <p className="switch-page">
            Already have account?

            <a href="/login">
              Log in
            </a>
          </p>

        </div>
      </main>

    </div>
  );
}

export default SignUp;
