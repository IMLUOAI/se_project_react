import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import "../blocks/app/app.css";

function App() {
  const weatherTemp = "108°F";
  return (
    <div className="page__section">
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
    </div>
  );
}

export default App;
