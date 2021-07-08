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
    const [addModalShow, setAddModalShow] = useState<boolean>(false)
    const [searchText , setSearchText] = useState<string>("")

  return (
    <div className={"w-100 h-100 d-flex flex-column"}>
      <div className={"header"}>
        <Header setModalShow={setAddModalShow} modalShow={addModalShow} searchText={searchText} setSearchText={setSearchText}></Header>
      </div>
        <TodoTable todoData={todoData} searchText={searchText}></TodoTable>

    </div>
  );
}

export default App;
