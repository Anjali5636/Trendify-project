import React from 'react';
import Item from '../Components/Item/Item';
import all_product from '../Components/Assets/all_product';


const AllProducts = () => {
  return (
    <div className="all-products-page">
      <h2>All Products</h2>
      <div className="products-container">
        {all_product.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

