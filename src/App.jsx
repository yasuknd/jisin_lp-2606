import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Update from './components/Update/Update.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import Future from './components/Future/Future.jsx';
import Entry from './components/Entry/Entry.jsx';
import Notice from './components/Notice/Notice.jsx';
import Message from './components/Message/Message.jsx';
import BottomCta from './components/BottomCta/BottomCta.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Update />
        <Pricing />
        <Benefits />
        <Future />
        <Entry />
        <Notice />
        <Message />
      </main>
      <BottomCta />
      <Footer />
    </>
  );
}

export default App;
