import Header from "../components/header";
import "../blocks/app/app.css";
import Main from "../components/main";
import Footer from "../components/footer";

function App() {
  const weatherTemp = "108°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
    </div>
  );
}

export default App;
