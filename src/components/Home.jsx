import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";

function Home() {

  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}
export default Home;
