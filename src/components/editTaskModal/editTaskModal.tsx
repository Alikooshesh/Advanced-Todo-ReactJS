import './editTaskModal.css'
import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

import {IeditTaskModal, Itodo} from "../../interfaces";

const EditTaskModal:React.FC<IeditTaskModal> = (props) => {
    const handleClose = () => props.setEditModalShow(false);
    const handleShow = () => props.setEditModalShow(true);

    let todoTaked:Itodo = props.todoData.filter(item => item.id == props.todoId)[0]

    const [todoText , setTodoText] = useState<string>(todoTaked.text)
    const [date, setDate] = useState<number | null>()

    function priorityChange(e:React.ChangeEvent<HTMLSelectElement>) {
        todoTaked.priority = Number(e.target.value)
    }

    function statusChange(e:React.ChangeEvent<HTMLSelectElement>) {
        todoTaked.status = Number(e.target.value)
    }

    function todoTextChange(e:React.ChangeEvent<HTMLInputElement>) {
        setTodoText(e.target.value)
    }

    function handleSave () {
        let tempData = [...props.todoData]
        const editTodo = tempData.findIndex(item => item.id == props.todoId)

        tempData.splice(editTodo,1,todoTaked)

        props.setTodoData([...tempData])
        handleShow()
    }
    return (
        <Modal show={props.editModalShow} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className={"modal-body-div d-flex flex-column justify-content-center align-items-center p-3"}>
                    <input type="text" placeholder={"Task Name"} className={"w-100 mb-5 p-1 rounded"} value={todoText} onChange={todoTextChange}/>
                    <div className={"w-100 d-flex justify-content-between mt-3 mb-5"}>

                        <Form.Control as="select" custom onChange={priorityChange}>
                            <option disabled={true}>priority</option>
                            {todoTaked.priority == 2 ? <option selected={true} value={2}>High</option> : <option value={2}>High</option>}
                            {todoTaked.priority == 1 ? <option selected={true} value={1}>Medium</option> : <option value={1}>Medium</option>}
                            {todoTaked.priority == 0 ? <option selected={true} value={0}>Low</option> : <option value={0}>Low</option>}
                        </Form.Control>

                        <Form.Control as="select" custom onChange={statusChange}>
                            <option disabled={true} >status</option>
                            {todoTaked.priority == 0 ? <option selected={true} value={0}>ToDO</option> : <option value={0}>ToDO</option>}
                            {todoTaked.priority == 1 ? <option selected={true} value={1}>Doing</option> : <option value={1}>Doing</option>}
                            {todoTaked.priority == 2 ? <option selected={true} value={2}>Done</option> : <option value={2}>Done</option>}
                            <option>ToDO</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </Form.Control>

                        <DtPicker
                            // onChange={setDate}
                            showWeekend
                            clearBtn
                            local="fa"
                            placeholder="Date"
                            inputClass='date-input'
                        />

                    </div>
                    <textarea placeholder={"Task Details"} className={"w-100 rounded p-2"}></textarea>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className={"w-100 d-flex align-items-center"}>
                    <div className={"w-75"}>
                        <Button variant="outline-dark" onClick={handleClose}>
                            Close
                        </Button>
                    </div>

                    <div className={"w-25 d-flex justify-content-end"}>
                        <Button variant="primary" onClick={handleSave} className={"w-75"}>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTaskModal