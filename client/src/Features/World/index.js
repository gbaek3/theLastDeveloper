import React from 'react';
import Map from '../Map';
import Player from '../Player';
import { Link } from "react-router-dom";

import { tiles } from '../../Data/Maps/1'

function World(props) {
    return (
        <div>
        <img class="BG" src="https://i.imgur.com/Gi96eDg.png" alt="background" />
            <Link to="/Town">Town Link</Link>
            {/* <Map tiles={tiles}/> */}
            <Player />

                <img id="JS" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="REACT" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="HTML" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="CSS" src="http://i.imgur.com/hgvDp.gif"></img>
                                

                <img id="tForest" src="http://i.imgur.com/hgvDp.gif"></img>
                <img id="tTown" src="http://i.imgur.com/hgvDp.gif"></img>

        </div>
    )
}

export default World