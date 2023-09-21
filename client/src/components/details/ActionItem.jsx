import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const {id} = product;

    const addItemToCart = () =>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
    return(
        <div className="details_image">
            <div>
            <img src={product.detailUrl}  alt="image" style={{border: '1px solid #f0f0f0',padding:'15px 20px',marginBottom:'10px',width:'95%'}}/>
            </div>
            <button className="btn" onClick={() => addItemToCart()} style={{ background:'#ff9f00'}}><i class="bi bi-cart-fill"></i>ADD TO CART</button>
            <button className="btn" style={{background:'#fb541b'}}><i class="bi bi-lightning-fill"></i>BUY NOW</button>
        </div>
    )
}

export default ActionItem;