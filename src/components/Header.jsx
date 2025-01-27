import Logo from "./Logo";
import ShoppingCart from "./ShoppingCart";
import Search from "./Search";

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <Logo />
      <Search />
      <ShoppingCart />
    </header>
  );
}

export default Header;
