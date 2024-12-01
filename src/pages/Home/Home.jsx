import { useEffect, useState } from "react";
import CardPizza from "../../components/CardPizza/CardPizza";
import Header from "../../components/Header/Header";


const Home = () => {
  const [pizzas, setPizza] = useState([])
    const pizzaId = async () => {
     const url = "http://localhost:5000/api/pizzas/"
     const response = await fetch(url)
     const data = await response.json()
     setPizza(data)
    }

    useEffect (() => {
      pizzaId()
    }, [])
 
   if (!pizzas) {
     return <div>Cargando... </div>
   }

  return (
    <>
      <Header />
      <div className="cardPizza d-flex justify-content-evenly flex-wrap " >
        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
