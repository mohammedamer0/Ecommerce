import {useDispatch} from 'react-redux';
import {removeFromCart} from '../../redux/actions/cartActions';

import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";


const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <div className="cartItem">
            <div className="left">
                <img src={item.url} alt="image" style={{height:110,width:110}}/>
                <ButtonGroup/>
            </div>
            <div className="right">
                <p>{addEllipsis(item.title.longTitle)}</p>
                <p style={{color:'#878787',fontSize:14, marginTop:10}}>Seller:RetailNet
                    <span><img src={fassured} style={{width:'50px',marginLeft:10}}/></span>
                </p>
                <p style={{margin:'20px 0'}}>
                    <span style={{ fontWeight:600, fontSize:18}}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#878787'}}><strike>{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C'}}>{item.price.discount}</span>
            </p>
            <button onClick={()=>remove(item.id)} className="btn" style={{marginTop:'20px',fontSize:'16px',fontWeight:600}}>REMOVE</button>
            </div>
        </div>
    )
}
export default CartItem;