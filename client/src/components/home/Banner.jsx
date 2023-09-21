import { bannerData } from "../../constants/data";

const Banner = () => {
    const filterData = bannerData.filter((data)=>data.id!==1);
    return(
        <div > 
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={bannerData[0].url} className="d-block w-100 banner" alt="..." />
                    </div>
                    { filterData.map((data,index)=>(
                     <div className="carousel-item banner" key={index}>
                     <img src={data.url} className="d-block w-100 banner" alt="..." />
                     </div>
                    ))}
                    
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                </div>

            
            
        </div>

    )
}
export default Banner;