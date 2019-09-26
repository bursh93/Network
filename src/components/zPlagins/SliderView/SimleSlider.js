import React from "react";
import Slider from "react-slick";
import ilya from "../../../img/ilya.jpg";
import img from "../../../img/world.png";
import "./Slider.css"


class SliderView extends React.Component {
    render() {

        return (
            <div>
                <Slider className={"www"}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                    >
                    <div className={"w1"}><img src={img}  alt=""/></div>
                    <div className={"w1"}><img src={ilya} alt=""/></div>
                    <div className={"w1"}><img src={img} alt=""/></div>

                </Slider>

            </div>
        );
    }
}

export default SliderView;