import { useEffect, useState, useCallback } from "react";
import { Item } from "../components/Item/Item"
import { ItemCount } from "../components/Itemcount/ItemCount";
import { Loader } from "../components/Loader/Loader";
import { getBook } from "../lib/products.requests";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import "./Detail.css";

export const Detail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const { addProduct, itemInCart } = useCartContext();

  useEffect(() => {
    getBook(id).then((res) => {
      if(!res) return navigate('/');
      setProduct(res);
    });
  }, []);

  const handleAdd = useCallback(
    (qty) => {
      addProduct(product, qty);
    },
    [addProduct, product]
  );

  if (!Object.keys(product).length) return <Loader />;

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={product.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{product.title} </span>

          <p className="detail__info-description">{product.description}</p>

          <span className="detail__info-price">
            $
            {(product.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 3,
              maximumFractionDigits: 3,
            })}
          </span>

          <span className="detail__info-stock">¡Ultimas piezas! Quedan {product.stock}</span>

          <ItemCount
            stock={product.stock - (itemInCart?.(id)?.qty || 0)} //Se obtiene el item si existe en el cart y se le resta al stock la cantidad que este en el cart (si no existe le resta 0 para evitar errores)
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};