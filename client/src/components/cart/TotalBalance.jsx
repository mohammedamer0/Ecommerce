import { useEffect, useState } from "react";



const TotalBalance = ({cartItems}) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(()=>{
        totalAmount()
    },[cartItems])

    const totalAmount = () => {
        let price=0, discount=0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }

    return(
        <div className="total">
            <div className="total-header">
                <p>PRICE DETAILS</p>
            </div>
            <div className="total-body">
                <p>Price ({cartItems?.length} item)
                    <span>₹{price}</span>
                </p>
                <p>Discount
                    <span>-₹{discount}</span>
                </p>
                <p>Delivery Charges
                    <span>₹40</span>
                </p>
                <p className="h6" style={{fontSize:20}}>Total Amount
                    <span>₹{price - discount + 40}</span>
                </p>
                <p style={{color:'green',fontWeight:500}}>You will save ₹{discount - 40} on this order</p>
            </div>
        </div>
    )
}
export default TotalBalance;