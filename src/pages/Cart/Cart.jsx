import { useState } from "react";
import { pizzaCart } from "../../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart.map(pizza => ({...pizza, count:1}))); // cantidad inicial 1

  const aumentarCantidad = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza // aumenta la cantidad de 1
    ));
  };

  const disminuirCantidad = (id) => {
    setCart(
      cart.map((pizza) =>
          pizza.id === id && pizza.count > 0 ? { ...pizza, count: pizza.count - 1 } : pizza // disminuye la cantidad de 1
        )
        .filter((pizza) => pizza.count > 0) // Se elimina si la cantidad llega a 0
    );
  };

  const total = cart.reduce(
    (suma, pizza) => suma + pizza.price * pizza.count,
    0
  ); //  resultado total

  
  return (
    <>
      <div className="cart">
        <h2 className="text-center p-4">Detalle del pedido.</h2>
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-itemPizza col-12 mb-4">
            <div className="d-flex align-content-center justify-content-center align-items-stretch">
              <img className="rounded mb-2 " style={{width:"150px", height:"100px"}} src={pizza.img} alt={pizza.name} />
              <div className="item-info ms-md-5">
                <h3> {pizza.name}</h3>
                <p>Precio: $ {pizza.price}</p>
                <p>Cantidad: {pizza.count}</p>
                <div className="ms-3 d-flex d-flex-align">
                <button className="btn btn-xl btn btn btn-outline-success m-2" onClick={() => aumentarCantidad(pizza.id)}> + </button>
                <button className="btn btn-xl btn btn-outline-danger m-2" onClick={() => disminuirCantidad(pizza.id)}> - </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="total d-flex justify-content-center flex-column align-items-center">
          <h3 className="">Total: ${total}</h3>
          <button className="btn btn-dark w-10 m-xl-4 btn btn-secondary">Pagar Aquí</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
