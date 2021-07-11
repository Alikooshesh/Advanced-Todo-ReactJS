import React, {useEffect, useState} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from "./components/header/header";
import TodoTable from "./components/todoTable/TodoTable";
import fakeTodos from "./data/fakeTodos";
import {IdataFilter, Itodo} from "./interfaces";
import Sidebar from "./components/sideBar/sidebar";

function App() {
    const [todoData , setTodoData] = useState<Itodo[]>(fakeTodos)
    const [tempData , setTempData] = useState<Itodo[]>(todoData)
    const [addModalShow, setAddModalShow] = useState<boolean>(false)
    const [editModalShow, setEditModalShow] = useState<boolean>(false)
    const [searchText , setSearchText] = useState<string>("")
    const [sideBarShow , setSideBarShow] = useState<boolean>(false)
    const [dataFilter , setDataFilter] = useState<IdataFilter>({priority:3, status:3, deadLine:3})

    useEffect( ()=> {
        setTempData(todoData)

        if (dataFilter.priority !=3){
            console.log("priority")
            setTempData([...tempData.filter(item => item.priority == dataFilter.priority)])
        }

        if (dataFilter.status != 3){
            console.log("status")
            setTempData([...tempData.filter(item => item.status == dataFilter.status)])
        }

        if (dataFilter.deadLine != 3){
            console.log("deadLine")
            dataFilter.deadLine == 0 && setTempData([...tempData.filter(item => new Date() > item.deadLine)])
            dataFilter.deadLine == 1 && setTempData([...tempData.filter(item => new Date() <= item.deadLine)])
        }
    },[dataFilter])

    useEffect(()=> {
        setDataFilter({priority:3, status:3, deadLine:3})
        setTempData(todoData)
    },[todoData])

  return (
    <div className={"w-100 h-100"}>
        {console.log(tempData)}
        {console.log(todoData)}
        <Sidebar sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} dataFilter={dataFilter} setDataFilter={setDataFilter}></Sidebar>
      <div className={"header"}>
        <Header setModalShow={setAddModalShow} modalShow={addModalShow} searchText={searchText} setSearchText={setSearchText} setTodoData={setTodoData} todoData={todoData} setSideBarShow={setSideBarShow}></Header>
      </div>
        <TodoTable todoData={tempData} setTodoData={setTodoData} searchText={searchText} editModalShow={editModalShow} setEditModalShow={setEditModalShow}></TodoTable>
        <table>
        </table>
    </div>
  );
}

export default App;
