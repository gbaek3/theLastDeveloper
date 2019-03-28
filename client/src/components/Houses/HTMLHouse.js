import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import HTMLHouseImg from "../../Backgrounds/HTML BeachHouse.jpg";
import Jorge from "../../Sprites/Jorge.png";
import imgscroll from "../../Backgrounds/scroll.png";

class HTMLHouse extends React.Component {
  state = {
    npcName: "Jorge the HTML Hotshot",
    scroll: "HTML"
  };

  scrollClick = event => {
    event.preventDefault();
    sessionStorage.setItem("class", this.state.scroll);
    this.props.history.push("/Scroll");
  };

  render() {
    return (
      <div>
        <img className="BG" src={HTMLHouseImg} alt="HTMLHouse" />
        <h1 className="HouseTitles">HTML House</h1>
        <img
          className="houseScroll"
          onClick={this.scrollClick}
          src={imgscroll}
        />
        <img id="Jorge" src={Jorge} alt="Jorge" />

        <div id="DialogContainer">
          <div id="characterName">
            <p className="namePlate">Jorge the HTML Hotshot</p>
          </div>

          <div id="textBox">
            <h3>Welcome to the HTML house</h3>
            <p>Ya noob</p>
          </div>
        </div>

        <div id="actionBox">
          <Link to="/HTMLTown">
            <button className="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    );
  }
=======
import HTMLHouseImg from "../../Backgrounds/HTMLHouse.jpg"
import Jorge from "../../Sprites/Jorge.png"
import imgscroll from "../../Backgrounds/scroll.png"
import * as $ from 'axios';

class HTMLHouse extends React.Component {
    state = {
        npcName: 'Jorge the HTML Hotshot',
        scroll: "HTML",
        passedTrial: false,
        dialogue: [],
        abilityDialogue: [],
        passedDialogue: [],
        dialogueCount: 0,
        isCorrect: false,
        answers: ["hyper text markup language", "<p>"],
        currentAnswer: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        })
    }

    componentDidUpdate() {
        const { isCorrect, currentAnswer, answers, dialogueCount } = this.state;
        if (!isCorrect && currentAnswer === answers[dialogueCount - 1]) {
            this.setState({
                isCorrect: true
            });
        } else if (isCorrect && currentAnswer !== answers[dialogueCount - 1]) {
            this.setState({
                isCorrect: false
            })
        }
    }

    componentDidMount() {
        const userId = sessionStorage.getItem("userId");
        $.get(`/api/gamedb/${this.state.npcName}`).then(gameDB => {
            $.get(`/api/user/${userId}`).then(userDB => {
                this.setState({
                    dialogue: gameDB.data.dialogue,
                    passedDialogue: gameDB.data.passedTrialDialogue,
                    abilityDialogue: gameDB.data.beatTrial,
                    passedTrial: userDB.data.progress[0].passed
                })
            })
        });
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")
    };

    nextDialogue = (event) => {
        event.preventDefault();
        this.setState({
            dialogueCount: this.state.dialogueCount + 1,
            currentAnswer: ""
        });
    };

    resetTrial = (event) => {
        event.preventDefault();
        this.setState({
            passedTrial: false
        });
    };


    render() {
        return (

            <div>
                <img className="BG" src={HTMLHouseImg} alt="HTMLHouse" />
                <h1 className="HouseTitles">HTML House</h1>
                <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} />
                <img id="Jorge" src={Jorge} alt="Jorge"></img>

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p className="namePlate">Jorge the HTML Hotshot</p>
                    </div>
                    {
                        this.state.passedTrial === true ?
                            <div id="textBox">
                                <h4>{this.state.passedDialogue[this.state.dialogueCount]}</h4>
                                <button onClick={this.resetTrial} className="btn btn-primary btn-sm confirm">Retake Trial</button>
                            </div>

                            :
                            (this.state.dialogueCount === 1 || this.state.dialogueCount === 2)
                                ?
                                <div id="textBox">
                                    <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                    <input name="currentAnswer" onChange={this.handleChange} value={this.state.currentAnswer}></input>
                                    <button disabled={!this.state.isCorrect} onClick={this.state.isCorrect ? this.nextDialogue : undefined} className={`btn btn-primary btn-sm confirm ${!this.state.isCorrect && "disabled"}`}>Confirm</button>
                                </div>
                                :
                                this.state.dialogueCount === 3
                                    ?
                                    <div id="textBox">
                                        <h4>{this.state.abilityDialogue[0]}</h4>
                                    </div>
                                    :
                                    <div id="textBox">
                                        <h4>{this.state.dialogue[this.state.dialogueCount]}</h4>
                                        <button onClick={this.nextDialogue} className="btn btn-primary btn-sm confirm">Confirm</button>
                                    </div>
                    }
                </div>

                <div id="actionBox">
                    <Link to="/HTMLTown">
                        <button className="btn btn-success">Back</button>
                    </Link>
                </div>
            </div>
        )
    }

>>>>>>> b0f79c9e0d48af39d8aa3acf2b112874e3d5aad1
}

export default HTMLHouse;
