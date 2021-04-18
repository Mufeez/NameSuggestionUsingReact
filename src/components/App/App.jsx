import react from "react";
import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "./../Search/Search";

class App extends react.Component {
  state = {
    fastingState: "I am Fasting",
    headerText: "This is new ,Name it!",
    headerExpanded: true,
  };

  handleSearchInputChange = (inputText) => {
    this.setState({ headerExpanded: !inputText });
    console.log("input Changed to" + inputText);
  };
  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleSearchInputChange} />
        <div className="button-header3-container">
          <h3>{this.state.fastingState}</h3>
          <button
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

//Following is Functional based component

/* function App() {
    return 'this is my functional component'
} */

export default App;
