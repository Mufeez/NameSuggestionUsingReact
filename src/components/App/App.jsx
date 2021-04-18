import react from "react";
import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "./../Search/Search";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

class App extends react.Component {
  state = {
    fastingState: "I am Fasting",
    headerText: "Name Your Startup!",
    headerExpanded: true,
    suggestedNames: [],
  };

  handleSearchInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };
  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleSearchInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
        <div className="button-header3-container">
          <p>
            Note: Below Content is just for explaining state change
            implementation
          </p>
        </div>
        <div className="button-header3-container">
          <h3 className="state-header">{this.state.fastingState}</h3>
        </div>
        <div className="button-header3-container">
          <button
            className="iftaar-button"
            onClick={() => {
              this.setState({
                fastingState: "Yeah ! Completed the Fasting!",
              });
            }}
          >
            Iftaar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
