import React, {useState} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from "./components/header/header";
import {Button, Modal} from "react-bootstrap";
import TodoTable from "./components/todoTable/TodoTable";
import fakeTodos from "./data/fakeTodos";
import {Itodo} from "./interfaces";

function App() {
    const [todoData , setTodoData] = useState<Itodo[]>(fakeTodos)
    const [modalShow, setModalShow] = useState(false);

  return (
    <div className={"w-100 h-100 d-flex flex-column"}>
        {console.log(modalShow)}
      <div className={"header"}>
        <Header setModalShow={setModalShow} modalShow={modalShow}></Header>
      </div>
        <TodoTable todoData={todoData}></TodoTable>

    </div>
  );
}

export default App;
