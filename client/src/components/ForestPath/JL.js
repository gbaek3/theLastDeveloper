import React from "react";
import { Link } from "react-router-dom";
import finalforest from "../../Backgrounds/finalforest.png"
import * as $ from 'axios';


class JL extends React.Component {
    state = {
        npcName: "Jacob",
        dialogue: [],
        dialogueCount: 0,
        dialogueComplete: false
    }

    componentDidMount() {

    }

    nextDialogue = (event) => {

    };

    render() {
        return (
            <img className="BG" src={finalforest} alt="finalforest" />
        )
    }

}

export default JL;