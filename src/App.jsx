import "./app.scss";
import NavbarComponent from "./components/Navbar/NavbarComp";

const App = () => {
  return (
    <>
      <section id="Homepage">
        <NavbarComponent />
      </section>
      <section id="Services">Parallax</section>
      <section id="Skills">Skills</section>
      <section id="About">Parallax</section>
      <section id="Contacts">Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Contacts</section>
    </>
  );
};

export default App;
