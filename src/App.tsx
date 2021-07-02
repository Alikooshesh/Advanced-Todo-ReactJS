import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from "./components/header/header";

function App() {
  return (
    <div className={"w-100 h-100 d-flex flex-column"}>
      <div className={"header"}>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
