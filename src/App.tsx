import React, {useState} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from "./components/header/header";
import {Button, Modal} from "react-bootstrap";

function App() {
    const [modalShow, setModalShow] = useState(false);

  return (
    <div className={"w-100 h-100 d-flex flex-column"}>
        {console.log(modalShow)}
      <div className={"header"}>
        <Header setModalShow={setModalShow} modalShow={modalShow}></Header>
      </div>

    </div>
  );
}

export default App;
