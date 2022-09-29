import './NavBar.css'
import Logo from './logoLikeYouBe.jpeg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


// NAVBAR
function NavBar() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container-fluid">   <img src={Logo} className="nav-logo" alt="logo" width="50" height="50"/></div>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong>LikeYouBe</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
        <Link className="nav-link active" to="/sistema">Proyectos</Link>
        <Link className="nav-link active" to="/sistema">Contacto</Link>
      </div>
    </div>
    <CartWidget />
  </div>
</nav>
);
};

export default NavBar;

