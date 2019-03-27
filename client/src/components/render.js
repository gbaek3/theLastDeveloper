import React from "react";
import { Link } from "react-router-dom";
import img from "../Backgrounds/scroll.png"
import Scroll from "../components/Technical/Scroll"




class render extends React.Component {
    state = {
        scroll: "HTML"
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")


    };

    render() {
        return (
            <img onClick={this.scrollClick} src={img} />
        )
    }

}

export default render;
