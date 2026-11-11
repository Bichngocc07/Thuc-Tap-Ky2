
import Header from './components/Header';
import Footer from './components/Footer';

import Login from './Login';
import SignUp from './components/SignUp';

import './App.css';

function App() {
  const path = window.location.pathname.toLowerCase();

  return (
    <div className="app">
      <Header />

      {path === '/signup' || path === '/register' ? (
        <SignUp />
      ) : (
        <Login />
      )}

      <Footer />
    </div>
  );
}

export default App;
