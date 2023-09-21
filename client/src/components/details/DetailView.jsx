import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


const DetailView = () => {
    
    const { loading, product } = useSelector(state => state.getProductDetails )
    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(()=>{
        if(product && id !== product.id)
            dispatch(getProductDetails(id))
    },[dispatch, id, product, loading ])

    return(
        <div>
            {
                product && Object.keys(product).length &&
                <div className="row details">
                    <div className="left col-lg-4 col-md-4 col-sm-8 col-12">
                        <ActionItem product={product}/>
                    </div>
                    <div className="right col-lg-8 col-md-8 col-sm-8 col-12">
                        <ProductDetail product={product} />
                    </div>
                </div>
            }
        </div>
    )
}
export default DetailView;