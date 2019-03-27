import React from "react";
import { Link } from "react-router-dom";
import OuterTownBG from '../../Backgrounds/OuterTown.jpg'



class OuterTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <h1 id="OuterTownTitle">Outer Town</h1>
                <img className="BG" src={OuterTownBG} alt="OuterTown" />

                <div>
                    <div id="characterBox">
                        <button className="btn btn-success"><Link to="/OuterForest">Continue to forest</Link></button>
                        <button className="btn btn-secondary"><Link to="/WorldMap">World Map</Link></button>
                    </div>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>

                    <div id="textBox">
                        <h3>Theres something that smells nearby, but you realized it was just you.</h3>
                        <p>Ya piece of garbage</p>

                    </div>
                </div>

            </div>
        )
    }

}

export default OuterTown;