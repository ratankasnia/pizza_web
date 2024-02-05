import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import PropTypes from "prop-types";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const onDecreaseItemHandler = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  const onIncreaseItemHandler = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={onDecreaseItemHandler}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={onIncreaseItemHandler}>
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};
export default UpdateItemQuantity;
