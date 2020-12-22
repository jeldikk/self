import React from 'react'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"
import Homepage from "./pages/homepage/homepage"
import SkillSet from "./components/skill-set/skill-set.component"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Homepage />
        <SkillSet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
