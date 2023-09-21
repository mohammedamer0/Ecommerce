import { useEffect } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Home=()=>{
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <>
            <Navbar/>
            <div className="home">
            <Banner/>
            <MidSlide products={products} title="Deals of the day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Trending offers" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selections" timer={false}/>
            <Slide products={products} title="Home Appliance" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
            <Slide products={products} title="Discount for you" timer={false}/>
            </div>
        </>
    )
}
export default Home;