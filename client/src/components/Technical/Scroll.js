import React from "react";
import { Link } from "react-router-dom";
import img from "../../Backgrounds/bgscroll.jpg"
import * as $ from 'axios';


class Scroll extends React.Component {
    state = {
        dialogue: []
    }
    componentDidMount() {
        var classID = sessionStorage.getItem("class");
        console.log(classID)
        $.get(`/api/gamedb/${classID}`).then(data => {
            this.setState({
                dialogue: data.data.dialogue
            })
        })
    }


    render() {
        return (
            this.state.dialogue.length > 0 && (
                <div>
                    <img className="BG" src={img} alt="img" />
                    <ul className="">
                        {this.state.dialogue.map((data, i) => (
                            <li key={i}>
                                {data}
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => {
                        window.history.back()
                        sessionStorage.setItem('class', "")
                    }}>Go Back</div>

                </div>
            ))
    }
}

export default Scroll;