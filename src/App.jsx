import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import css from './styles/App.module.scss'

const App = () => {
  return <div className={` bg-primary ${css.container}`}>
<Header/>
<Hero/>
<Experties/>
<Works/>
<Portfolio/>
<People/>
<Footer/>
  </div>
};

export default App;
