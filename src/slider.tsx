import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
const SimpleCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={"slick-active"}>
            <Slider {...settings}>
                <div>
                    <img src='https://via.placeholder.com/350x150' alt='slide-1' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/350x150' alt='slide-2' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/350x150' alt='slide-3' />
                </div>
            </Slider>
        </div>
    );
};

export default SimpleCarousel;