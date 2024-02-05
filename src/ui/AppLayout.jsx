import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const Navigation = useNavigation();
  const isLoading = Navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      {/* {true && <Loader />} its just for infinte the loader */}
      <Header />
      <div className="overflow-scroll">
        <main className=" mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
