import react from "react";
import "./App.css";
import Header from "./../Header/Header";

class App extends react.Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

//Following is Functional based component

/* function App() {
    return 'this is my functional component'
} */

export default App;
