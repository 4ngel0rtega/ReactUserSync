import './App.css'
import Header from './components/header'
import MainContent from './components/mainContent.jsx';
import Introduction from './components/introduction.jsx';
import Contact from './components/contact.jsx';
import Solution from './components/solution.jsx';
import Team from './components/team.jsx';
import Footer from './components/footer.jsx';


function RootWeb() {

  return (
    <>
      <Header />
      <main>

        <section>
          <MainContent />
        </section>

        <section>
          <Introduction />
        </section>

        <section>
          <Solution />
        </section>

        <section>
          <Team />
        </section>

        <section>
          <Contact />
        </section>

      </main>

      <Footer />

    </>
  )
}

export default RootWeb;
