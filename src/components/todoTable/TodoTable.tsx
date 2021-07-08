import React, {useEffect, useState} from "react";
import {MdKeyboardArrowLeft , MdKeyboardArrowUp , MdKeyboardArrowDown , MdVisibility , MdModeEdit , MdDelete} from "react-icons/md";
import './todoTable.css'
import {IlistSort, Itodo, ItodoTable} from "../../interfaces";
import {Table} from "react-bootstrap";

const TodoTable:React.FC<ItodoTable> = (props) => {
    const [todoData , setTodoData] = useState([...props.todoData])
    const [listSort , setListSort] = useState<IlistSort>({priority : 0 , status : 0 , deadLine : 0})

    const searchItems:Itodo[] | null = props.todoData.filter(item => item.text.toLowerCase().includes(props.searchText.toLowerCase()))

    useEffect(()=> {
        // const searchItems:Itodo[] | null = props.todoData.filter(item => item.text.includes(props.searchText))
        searchItems ? setTodoData([...searchItems]) : setTodoData([...todoData])
        setListSort({priority : 0 , status : 0 , deadLine : 0})
    },[props.searchText])

    function sortChangeButton(sort : string){
        sort == "priority" &&
            (listSort.priority < 2 ?
                setListSort({priority : listSort.priority +1 , status : 0 , deadLine : 0}) :
                    setListSort({priority : 0 , status : 0 , deadLine : 0}))

        sort == "status" &&
            (listSort.status < 2 ?
                setListSort({priority : 0 , status : listSort.status + 1 , deadLine : 0}) :
                    setListSort({priority : 0 , status : 0 , deadLine : 0}))

        sort == "deadLine" &&
            (listSort.deadLine < 2 ?
                setListSort({priority : 0 , status : 0 , deadLine : listSort.deadLine+1}) :
                    setListSort({priority : 0 , status : 0 , deadLine : 0}))

    }

    useEffect(()=>{
        !searchItems && setTodoData([...props.todoData])
        listSort.status == 1 && setTodoData([...todoData.sort((a,b) => a.status - b.status)])
        listSort.status == 2 && setTodoData([...todoData.sort((a,b) => b.status - a.status)])

        listSort.priority == 1 && setTodoData([...todoData.sort((a,b) => a.priority - b.priority)])
        listSort.priority == 2 && setTodoData([...todoData.sort((a,b) => b.priority - a.priority)])

        listSort.deadLine == 1 && setTodoData([...todoData.sort((a,b) => a.deadLine.getTime() - b.deadLine.getTime())])
        listSort.deadLine == 2 && setTodoData([...todoData.sort((a,b) => b.deadLine.getTime() - a.deadLine.getTime())])
    },[listSort])


    return (
        <>
            {console.log(props.todoData.filter(item => item.text.includes("G")))}
            <Table bordered hover>
                <thead>
                <tr>
                    <th>Task</th>
                    <th className={"clickable text-center border-0"} onClick={() => sortChangeButton("priority")}>Priority
                        {listSort.priority == 0 && <i><MdKeyboardArrowLeft></MdKeyboardArrowLeft></i>}
                        {listSort.priority == 1 && <i><MdKeyboardArrowDown></MdKeyboardArrowDown></i>}
                        {listSort.priority == 2 && <i><MdKeyboardArrowUp></MdKeyboardArrowUp></i>}
                    </th>
                    <th className={"clickable text-center border-0"} onClick={() => sortChangeButton("status")}>Status
                        {listSort.status == 0 && <i><MdKeyboardArrowLeft></MdKeyboardArrowLeft></i>}
                        {listSort.status == 1 && <i><MdKeyboardArrowDown></MdKeyboardArrowDown></i>}
                        {listSort.status == 2 && <i><MdKeyboardArrowUp></MdKeyboardArrowUp></i>}
                    </th>
                    <th className={"clickable text-center border-0"} onClick={() => sortChangeButton("deadLine")}>DeadLine
                        {listSort.deadLine == 0 && <i><MdKeyboardArrowLeft></MdKeyboardArrowLeft></i>}
                        {listSort.deadLine == 1 && <i><MdKeyboardArrowDown></MdKeyboardArrowDown></i>}
                        {listSort.deadLine == 2 && <i><MdKeyboardArrowUp></MdKeyboardArrowUp></i>}
                    </th>
                    <th className={"text-center border-0"}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {todoData.map(item => {
                    return(
                        <tr>
                            <td>{item.text}</td>
                            <td className={"text-center border-0"}><span>
                                {item.priority == 0 && <span className={"status-td p-1 pr-2 px-2 bg-dark text-light"}>Low</span>}
                                {item.priority == 1 && <span className={"status-td p-1 pr-2 px-2 bg-warning text-light"}>Medium</span>}
                                {item.priority == 2 && <span className={"status-td p-1 pr-2 px-2 bg-danger text-light"}>High</span>}
                            </span></td>


                            <td className={"text-center border-0"}><span>
                                {item.status == 0 && <span className={"status-td p-1 pr-2 px-2 bg-warning text-light"}>To Do</span>}
                                {item.status == 1 && <span className={"status-td p-1 pr-2 px-2 bg-primary text-light"}>Doing</span>}
                                {item.status == 2 && <span className={"status-td p-1 pr-2 px-2 bg-success text-light"}>Done</span>}
                            </span></td>


                            <td className={"text-center border-0"}><span>
                                {item.deadLine <= new Date(Date.now()+(1000*60*60*24)) ?
                                    <span className={"deadLine-td p-1 pr-2 px-2 border-danger text-danger"}>{`${item.deadLine.getFullYear()}/${item.deadLine.getMonth()+1}/${item.deadLine.getDate()}`}</span> :
                                    <span className={"deadLine-td p-1 pr-2 px-2 border-success text-ssuccess"}>{`${item.deadLine.getFullYear()}/${item.deadLine.getMonth()+1}/${item.deadLine.getDate()}`}</span>}
                            </span></td>

                            <td className={"text-center border-0"}><div className={"d-flex justify-content-center"}>
                                <div className={"w-50 d-flex justify-content-around"}>
                                    <span className={"clickable text-secondary"}><MdVisibility></MdVisibility></span>
                                    <span className={"clickable text-secondary"}><MdModeEdit></MdModeEdit></span>
                                    <span className={"clickable text-secondary"}><MdDelete></MdDelete></span>
                                </div>
                            </div></td>
                        </tr>
                    )
                })}

                </tbody>
            </Table>
        </>
    )
}

export default TodoTable