import React, { Component } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Job from './Components/Job';
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader';

class App extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(2000);
  }
  render(){
    if (this.state.loading) return <Loader />;
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Services/>
        <Projects/>
        <Job/>
        <Contact />
        <ScrollToTop/>
        <Footer />
      </div>
    );
  }
}

export default App;