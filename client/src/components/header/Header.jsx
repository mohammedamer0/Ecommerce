import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginDialog from "../login/LoginDialog";
import Search from "./Search";

import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Header =()=>{
  const [modalIsOpen, setIsOpen] = useState(false);
  const {account, setAccount} = useContext(DataContext); 
  const {cartItems} = useSelector(state => state.cart);
    return(
      <>
      <div className="header navbar navbar-expand-md fixed-top">
      <div className="container-fluid" style={{justifyContent:'flex-start'}}>
      <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas" 
      data-bs-target="#offcanvasExample" 
      aria-controls="offcanvasExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{color:'white'}}
    >
       <span className="navbar-toggler-icon" /> 
    </button>
        <Link to='/' >
          <div className="header-icon float-start">
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" style={{width:75}}/>
            <div className="explore-plus">
              <span className="ep explore">Explore</span> <span className="ep plus">Plus</span>
              <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="logo2" style={{width:10}}/>
            </div>
          </div>
        </Link>

        <div className="search0">
          <Search/>
        </div>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
          <div className="header-buttons">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          {
            account ? <Profile account={account} setAccount={setAccount}/> : 
            
            <button className="btn_login" onClick={()=>setIsOpen(true)}>Login</button>

          }
          
          <li className="nav-item" >
            <p className="nav-link" >Become a Seller</p>
          </li>
          <li className="nav-item dropdown" >
          <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </p>
          <ul className="dropdown-menu a_dropdown" >
            <li><p className="dropdown-item" href="#">Action</p></li>
            <li><p className="dropdown-item" href="#">Another action</p></li> 
            <li><hr className="dropdown-divider"/></li>
            <li><p className="dropdown-item" href="#">Something else here</p></li>
          </ul>
          </li>
          <li className="nav-item">
            <Link to='/cart'>
            <p className="nav-link "><i className="bi bi-cart-fill position-relative" style={{marginRight:'8px'}}><span class="position-absolute top-9 start-100 translate-middle badge rounded-pill bg-danger" style={{marginBottom:'8px'}}>
    {cartItems?.length}
  </span></i>Cart</p>
  </Link>
          </li>

          </ul>
          </div>
          
          </div>
          
          </div>
        </div>  
          <LoginDialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setAccount={setAccount}/>
      </>
    )
}
export default Header; 
