import React from "react";
import { Link } from "react-router-dom";
import JSBG from '../../Backgrounds/PewterCity.png'
import portal from "../../SVG/portal.gif"


class ReactTown extends React.Component {
    state = {
        abilities: []
    }

    render() {
        return (

            <div>
                <div>
                    <img className="BG" src={JSBG} alt="CSSBG" />
                    <h1 className="TownTitles">HOUSE OF HTML</h1>
                </div>

                {/* Character filler sprite */}

                <img id="HTMLSprite1" src="http://i.imgur.com/0kvtMLE.gif" alt="HTMlSprite1" />
                <img id="HTMLSprite2" src="http://i.imgur.com/0kvtMLE.gif" alt="HTMlSprite2" />
                <img id="HTMLSprite3" src="http://i.imgur.com/0kvtMLE.gif" alt="HTMlSprite3" />
                <img id="HTMLSprite4" src="http://i.imgur.com/0kvtMLE.gif" alt="HTMlSprite4" />
                <img id="HTMLSprite5" src="http://i.imgur.com/0kvtMLE.gif" alt="HTMlSprite5" />

                {/* ------------------------------------ */}

                <Link to="/HTMLHouse">
                    <img id="REACT" src={portal} alt="portal"></img>
                </Link>
                <br />
                <Link to="/WorldMap">
                    <img id="REACTWorld" src={portal} alt="portal"></img>
                </Link>

            </div>
        )
    }

}

export default ReactTown;