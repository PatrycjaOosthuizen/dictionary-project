import logo from "./reading-panda.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <strong>
              <a href="https://www.shecodes.io/graduates/104913-patrycja-oosthuizen">
                Patrycja Oosthuizen
              </a>
            </strong>
            , is{" "}
            <a href="https://github.com/PatrycjaOosthuizen/dictionary-project">
              open-sourced on GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a href="https://dictionary-project-po.netlify.app">Netlify.</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
