import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const activeClass = ({ isActive }) => {
    return isActive ? "text-red-600" : "";
  };
  return (
    <div className="flex gap-5 text-xl mb-5 mt-5">
      <NavLink className={activeClass} to="/">
        Home
      </NavLink>
      <NavLink className={activeClass} to="/about">
        About
      </NavLink>
      <NavLink className={activeClass} to="/products">
        Product
      </NavLink>
      <NavLink className={activeClass} to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
