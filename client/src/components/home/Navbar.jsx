
import { navData } from "../../constants/data";


const Navbar=()=>{
    return(
        <div style={{background:'white'}}>
        <div className="nav2">
            {
                navData.map((data,index)=>(
                    <div className="nav2-elem" key={index}>
                        <img src={data.url} alt="nav" style={{width:64}}/>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Navbar;