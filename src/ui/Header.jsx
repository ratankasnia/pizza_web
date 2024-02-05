import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/UserName";

function Header() {
  return (
    <header className=" flex items-center justify-around border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase  ">
      <Link to="/" className=" tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
