import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";



const Cart = () => {
    const {cartItems } = useSelector(state => state.cart);
    return(
        <>
        {
            cartItems.length ? 
                <div className="row cart">
                    <div className="col-12 col-lg-9 col-md-7 col-sm-12">
                        <div className="cart-header">
                            <p>My cart ({cartItems.length})</p>
                        </div>
                        {
                            cartItems.map(item => (
                                <CartItem item={item}/>
                            ))
                        }
                        <div className="order-btn">
                            <button className="btn" style={{}}>PLACE ORDER</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-5 col-sm-12">
                        <TotalBalance cartItems={cartItems}/>
                    </div>
                </div>
            : <EmptyCart/>
        }
        </>
    )
}
export default Cart;