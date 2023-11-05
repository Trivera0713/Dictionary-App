import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="money" />
        </main>
        <footer>
          {" "}
          This project was coded by Thaisha Rivera and is Open-Source on{" "}
          <a href="https://github.com/Trivera0713"> Github </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
