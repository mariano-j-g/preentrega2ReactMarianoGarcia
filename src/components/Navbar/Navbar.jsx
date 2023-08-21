import classes from "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <h1>Ecommerce</h1>
      <section>
        <button>celulares</button>
        <button>Tablets</button>
        <button>NoteBooks</button>
      </section>
      <CartWidget></CartWidget>
    </nav>
  );
};

export default Navbar;
