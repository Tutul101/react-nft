import Clients from "./components/clients";
import Footer from "./components/footer";
import Free from "./components/free";
import Home from "./components/home";
import Like from "./components/like";
import Navbar from "./components/navbar";
import Release from "./components/release";
import ScrollToTop from "./components/scroll-to-top";
import SignUp from "./components/sign-up";
import SuperRare from "./components/superrare";

import "./scss/index.scss";

function App() {
  return (
    <div className="app-container">
      {/* <ScrollToTop /> */}
      <Navbar />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
