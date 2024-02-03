import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

function App() {
  const weatherTemp = "75°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
    </div>
  );
}

export default App;
