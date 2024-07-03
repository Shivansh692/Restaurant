// client/src/components/Header.js
import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';

const Header = () => {

	const { itemsInCart, totalPrice } = useContext(itemContext)

	return (
		<div className='header' >
			<h1 className='gfg'>
				Fresh Fruit & Vegetable Market
			</h1>
			<h3 style={{ color: "green" }}>
				Total Price: {totalPrice}
			</h3>
			<div className='cart-num'>
				<div className='cart-items'>
					{itemsInCart}
				
		</div>
        </div>
        </div>
	);
};

export default Header;
