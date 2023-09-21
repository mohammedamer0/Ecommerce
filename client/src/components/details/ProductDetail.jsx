

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return(
        <>
            <p>{product.title.longTitle}</p>
                <p style={{marginTop: 5, color: '#878787', fontSize: 14}}>8 Ratings and 1 review
                <span><img src={fassured} alt="flipkart" style={{ width: 77, marginLeft: 20}} /></span>
                </p>
                <p>
                    <span style={{ fontSize: 28}}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#878787'}}><strike>{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C'}}>{product.price.discount}</span>
            </p>
            <p>Available offers</p>
            <div className="offers">
                <p><i class="bi bi-tag-fill"></i>Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C</p>
                <p><i class="bi bi-tag-fill"></i>Bank Offer10% Instant Discount on ICICI Bank Credit Card Txns, up to ₹1250, on orders of ₹5000 and aboveT&C</p>
                <p><i class="bi bi-tag-fill"></i>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</p>
            </div>
            <table className="table table-borderless information-table">
                <tbody>
                    <tr>
                        <td style={{color:'#878787'}}>Delivery</td>
                        <td style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</td>
                    </tr>
                    <tr>
                        <td style={{color:'#878787'}}>Warranty</td>
                        <td>No Warranty</td>
                    </tr>
                    <tr>
                        <td style={{color:'#878787'}}>Seller</td>
                        <td>
                            <span style={{color:'#2874f0'}}>SuperComNet</span>
                            <p style={{margin:0}}>GST invoice available</p>
                            <p>View more sellers starting from ₹{product.price.cost}</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="flipkartpoints"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{color:'#878787'}}>description</td>
                        <td>{product.description}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ProductDetail;