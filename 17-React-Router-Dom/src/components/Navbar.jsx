import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Sohit</h3>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </>
    </div>
  );
};

export default Navbar;
