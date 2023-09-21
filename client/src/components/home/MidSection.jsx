import { imageURL } from "../../constants/data";

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
        <div className="row" style={{marginTop:'10px'}}>
            {
                imageURL.map((image)=>(
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4">
                        <img src={image} alt="image" style={{width:'100%'}}/>
                    </div>
                ))
            }
        </div>
        <div className="row">
            <img src={url} alt="img" className="col-12 midSection" style={{marginTop:10}}/>
        </div>
        </>
    )
}
export default MidSection;