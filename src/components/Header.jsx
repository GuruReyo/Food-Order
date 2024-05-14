import React, { useContext } from 'react';
import Button from './UI/Button';
import logoImage from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
const Header = () => {
 const cartCtx= useContext(CartContext);

 const totalCartItems = cartCtx.items.reduce((totalNUmberofItems , item )=>{
    return totalNUmberofItems + item.quantity;
 },0);
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImage} alt='restaurant'/>
            <h1>ReactFoood</h1>
        </div>

        <nav>
            <Button textOnly={true}>Cart ({totalCartItems})</Button>
        </nav>
        

    </header>
  )
}

export default Header