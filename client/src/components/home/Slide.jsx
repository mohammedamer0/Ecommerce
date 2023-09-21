import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { Link } from 'react-router-dom';

import Countdown from 'react-countdown';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer = ({ hours, minutes, seconds }) => {
        return <span>{hours} : {minutes} : {seconds} Left</span>
    }
    
    return(
        <div className='slide'>
            <div style={{padding:'15px 20px',display:'flex'}}>
                <p style={{fontSize:'22px',fontWeight:600,marginRight:'25px',lineHeight:'32px'}}>{title}</p>
                {timer &&
                <div className='timer'>
                    <img src={timerURL} alt='timer' style={{width: 24}}/>
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                </div>
}
                <button className='view-all'>View All</button>
            </div>
            <hr style={{margin:0}}/>
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
        >
            {
                products.map((product) => (
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <div className='products-slide'>
                        <img src={product.url} alt='product'/>
                        <p style={{ fontWeight:600, color:'#212121'}}>{product.title.shortTitle}</p>
                        <p style={{color:'green'}}>{product.discount}</p>
                        <p style={{color:'#212121',opacity:0.6}}>{product.tagline}</p>
                    </div>
                    </Link>
                ))
            }
        </Carousel>
        </div>
    )
}

export default Slide;