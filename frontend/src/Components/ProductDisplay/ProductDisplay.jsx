import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product  }) => {
     const {addToCart} = useContext(ShopContext)
  
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.image} alt={`product-${i}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>

     <div className="productdisplay-right">
  <h1 className="product-title">{product.name}</h1>

  <div className="product-rating">
    <img src={star_icon} alt="star" />
    <img src={star_icon} alt="star" />
    <img src={star_icon} alt="star" />
    <img src={star_icon} alt="star" />
    <img src={star_dull_icon} alt="dull star" />
    <span>(122)</span>
  </div>

  <div className="product-price-block">
    <p className="product-new-price">Price: ₹{product.new_price}</p>
    <p className="product-old-price"><del>₹{product.old_price}</del></p>
  </div>

  <p className="product-description">
    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and
    short sleeves, worn as an undershirt or outer garment
  </p>

  <div className="product-size-section">
    <h3>Select Size</h3>
    <div className="product-sizes">
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
    </div>
  </div>

  <button onClick={()=>{addToCart(product.id)}} className="add-to-cart-btn" >ADD TO CART</button>

  <p className="product-info"><span>Category :</span> Women, T-Shirt, Crop Top</p>
  <p className="product-info"><span>Tags :</span> Modern, Latest</p>
</div>
</div>
  )
}

export default ProductDisplay