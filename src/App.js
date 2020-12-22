import React from 'react'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/header/header.component"
import Homepage from "./pages/homepage/homepage"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
