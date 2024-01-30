import header from "./header.js";
import "../blocks/app/app.css";

function App() {
  return (
    <div>
      <header />
      <main className="main">
        <section className="weather" id="weather">
          <div className="weather__info">75°F</div>
          <img src="images/day/Cloudy.svg" />
        </section>
        <section id="card-section"> card section</section>
      </main>
    </div>
  );
}

export default App;
