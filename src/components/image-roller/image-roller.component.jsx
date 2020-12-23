import React, { Component } from 'react'

import {Image} from "react-bootstrap"

import "./image-roller.styles.scss"

export class ImageRoller extends Component {

    constructor(props){
        super(props);

        this.counter = null;

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.counter = setInterval(()=>{
            this.setState({count:  this.state.count%5 + 1})
        }, 1500)
    }

    componentWillUnmount(){
        clearInterval(this.counter)
        console.log("counter cleared")
    }

    render() {
        // console.log("count is", this.state.count);
        const {count} = this.state;
        return (
            <div className="image-roller text-center">
                <Image className="actual-image" src={`./static/images/roller_imageclip0${count}.png`} rounded />
            </div>
        )
    }
}

export default ImageRoller
