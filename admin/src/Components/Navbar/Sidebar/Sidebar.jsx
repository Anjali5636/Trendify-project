import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import cart_icon from "../../../assets/cart_icon.png";


 const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className="sidebar-item">
          <img src={cart_icon} alt="cart" />
          <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className="sidebar-item">
          <img src={cart_icon} alt="cart" />
          <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar
