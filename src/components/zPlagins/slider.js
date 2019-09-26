import React, {Component} from "react";
import style from "./Slider.module.css"

 class Slider extends React.Component {

        constructor(props){
            super();
            this.nextSliderHandler=this.nextSliderHandler.bind(this);
            this.state= {
                images:props.images,
                currentImgIndex:0,
                isCycleMode: false,
                canGoPrev: false,
                canGoNext: true,
            }

        }


        nextSliderHandler(e) {
           let newIndex=this.state.currentImgIndex;
           if (e.currentTarget.dataset.direction==='next'){
               if(newIndex<this.state.images.length-1) {
                   newIndex = this.state.currentImgIndex + 1;
               }
           }
           else {
               if (newIndex > 0) {
                   newIndex = this.state.currentImgIndex - 1;
               }
           }
            this.setState({currentImgIndex: newIndex});
        }


    render() {
        return (
            <div className={style.Slider}>
                <button  className={style.prev}
                    disabled={this.state.currentImgIndex > 0 ? false : true}
                        data-direction="prev" onClick={this.nextSliderHandler.bind(this)}>prev</button>
                    <img className={style.img} src={this.state.images[this.state.currentImgIndex]} alt=""/>

                <button className={style.next}
                    disabled={this.state.currentImgIndex < this.state.images.length-1 ? false : true}
                    data-direction="next" onClick={this.nextSliderHandler.bind(this)}>next</button>
                
            </div>
        )
    }
}

export default Slider;



























