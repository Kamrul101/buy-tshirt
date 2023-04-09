import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirts from "../TShirts/TShirts";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exist = cart.find(ts => ts._id === tshirt._id);
    if(exist){
        toast("Already Added")
    }
    else{
        const newCart = [...cart, tshirt];
    // console.log(newCart);
    setCart(newCart);
    }
    
  };
  const handleRemoveFromCart = (_id) => {
    
    const remaining = cart.filter(tshirt => tshirt._id !== _id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tShirt-container">
        {tshirts.map((tshirt) => (
          <TShirts
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirts>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
