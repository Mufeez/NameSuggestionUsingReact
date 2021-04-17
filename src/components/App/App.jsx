import react from "react";
import "./App.css";
import Header from "./../Header/Header";

class App extends react.Component {
  state = {
    fastingState: "I am Fasting",
    HeaderText: "This is new ,Name it!",
  };
  render() {
    return (
      <div>
        <Header headTitle={this.state.HeaderText}></Header>
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
    );
  }
}

//Following is Functional based component

/* function App() {
    return 'this is my functional component'
} */

export default App;
