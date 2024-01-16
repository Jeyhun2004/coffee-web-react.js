import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Basket.css';
import './Navbar.css';

const Basket = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);


    const toggleCart = () => {
        setShowCart(prevShowCart => !prevShowCart);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, { ...product }]);
        setCartCount(cartCount + 1);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        setCartCount(cartCount - 1);
    };

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        return totalPrice.toFixed(2);
    };
    const Alert = () => {
        alert('Your order has been taken')
    }

    const renderCart = () => {
        return (
            <div>
                <ul>
                    {cartItems.map((item, index) => (
                        <div key={index} className='basket_items'>
                            <div className='basket_img'>
                                <img src={item.img} alt={item.name} className='cart-img' />
                            </div>
                            <div className='basket_name'>
                                {item.name}
                            </div>
                            <div className='basket_price'>
                                <h3>${item.price}</h3>
                            </div>
                            <div className='basket_btn'>
                                <button onClick={() => removeFromCart(index)}>Remove from Basket</button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    };

    const renderProduct = (product, index) => {
        return (
            <div key={index} className='product_list'>
                <div className='product_img'>
                    <img src={product.img} alt={product.name} className='product-img' />
                </div>
                <div className='product_info'>
                    <div className='product_name'>
                        {product.name}
                    </div>
                    <div className='product_price'>
                        <h1>${product.price}</h1>
                    </div>
                    <div className='product_btn'>
                        <button onClick={() => addToCart(product)}>Add to Basket</button>
                    </div>
                </div>
            </div>
        );
    };

    const renderProducts = () => {
        return (
            <div className='products'>
                {products.map((product, index) => renderProduct(product, index))}
            </div>
        );
    };

    const products = [
        { name: 'Green Tea Latte', price: 7.00, img: 'data:image/jpeg;base64,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' },
        { name: 'Caffè Americano', price: 2.95, img: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630' },
        { name: 'Chocolate Cream Frappuccino', price: 6.05, img: 'https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Chocolate-Cream-Frappuccino_2.jpeg' },
        { name: 'Buzlu Chai Tea Latte', price: 4.25, img: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220810_IcedChaiTeaLatte.jpg?impolicy=1by1_wide_topcrop_630' },

        { name: 'Classic Hot Chocolate', price: 3.00, img: 'https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Classic-Hot-Chocolate_2.jpeg' },
        { name: 'White Hot Chocolate', price: 2.55, img: 'https://i.pinimg.com/736x/99/44/8f/99448fee423e6bee4ea129207ecee45a.jpg' },
        { name: 'Filter Coffee', price: 1.32, img: 'https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Filter-Coffee_0.jpeg' },
        { name: 'Cold Brew', price: 2.45, img: 'https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-29_720x720.png' },
    ];

    const totalPrice = calculateTotalPrice();

    const BasketIcon = () => {
        return (
            <FontAwesomeIcon icon={faShoppingBasket} />
        );
    }

    return (
        <div>
            <div className='navbar'>
                <button onClick={toggleCart}>
                    <BasketIcon /> {cartCount > 0 && <span className='dot'>{cartCount}</span>}
                </button>
            </div>
            {renderProducts()}
            {showCart && (
                <div className='overlay'>
                    <div className='modal'>
                        <div className='modal-content'>
                            <div className='btns'>
                                <button className='close' onClick={toggleCart}>
                                    Close
                                </button>
                                <button className='complate_btn' onClick={Alert}>
                                    Complate the shop
                                </button>
                            </div>
                            <h3>Total Price: {totalPrice} $</h3>
                            {renderCart()}
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Basket;
