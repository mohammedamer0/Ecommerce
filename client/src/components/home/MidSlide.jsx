import Slide from "./Slide";


const MidSlide = ({ products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <div className="midSlide">
        <div className="left">
            <Slide 
                products={products} 
                title="Deals of the day" 
                timer={true}
                />
        </div>
        <div className="right">
            <img src={adURL} alt="ad" style={{width: 217, height:'100%'}}/>
        </div>
        </div>
    )
}

export default MidSlide;