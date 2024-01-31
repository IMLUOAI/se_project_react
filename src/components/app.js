import Header from "../components/header";
import "../blocks/app/app.css";
import WeatherCard from "../components/weatherCard";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="cloudy" />
        <section id="card-section"> card section</section>
      </main>
    </div>
  );
}

export default App;
