import React, { Component } from "react";
import './App.css';
import Navbar from "./components/NavBar/navbar";
import Tron from "./components/Jumbotron/Jumbotron";
import Herocard from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import heroList from "./heroes.json"

class App extends Component {

  state = {
    heroList: heroList.sort(() => 0.5 - Math.random()),
    clickedHero: [],
    score: 0,
    highScore: 0
  }

  refresh = () => {
    this.setState({
      heroList: this.state.heroList.sort(() => 0.5 - Math.random()),
      clickedHero: [],
      score: 0,
      highScore: 0
    })
  }

  imageClick = (id) => {

    console.log(id)
    if(this.state.clickedHero.includes(id)){
      this.setState({ clickedHero: [], score: 0});

      alert("What a shame. You lost.");
    }else{
      this.setState({score: this.state.score + 1})
      this.state.clickedHero.push(id);
      console.log(this.state.clickedHero);

      if(this.state.score >= this.state.highScore){

        this.setState({highScore: this.state.highScore + 1});
      }
    }

    if (this.state.counter === 20) {
      alert("You win!");
      this.setState({score: 0, clickedHero: []});
    }

    this.setState({heroList: this.state.heroList.sort(() => 0.5 - Math.random())});

  }

  render () {
    return (
      <Wrapper>
        <Navbar refresh={this.refresh}/>
        <Tron 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div>
        <Wrapper>
        {this.state.heroList.map(hero => (
          <Herocard
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={hero.image}
            primaryAttr={hero.primaryAttr}
            mainRole={hero.mainRole}
            imageClick={this.imageClick}
          />
        ))}
      </Wrapper>
        </div>
      </Wrapper>
    );
  }
}

export default App;
