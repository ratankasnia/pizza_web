import Linkbutton from "../../../src/ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Linkbutton to="/menu">&larr; Back to menu</Linkbutton>

      <p className=" mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
