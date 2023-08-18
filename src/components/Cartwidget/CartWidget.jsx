import { RiShoppingCart2Fill} from "react-icons/ri";
import "./CartWidget.css";
import { useCartContext } from "../../state/Cart.context";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
  const { getCartQty } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      <RiShoppingCart2Fill />{getCartQty ?  <span className="cart-widget__qty">({getCartQty})</span> : null}
    </div>
  );
};