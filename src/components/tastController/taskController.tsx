import './taskController.css'
import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

import {ItaskModal} from "../../interfaces";

const TaskModal:React.FC<ItaskModal> = (props) => {
    const handleClose = () => props.setModalShow(false);
    const handleShow = () => props.setModalShow(true);

    const [date, setDate] = useState(props.taskDate)
    return (
        <Modal show={props.modalShow} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className={"modal-body-div d-flex flex-column justify-content-center align-items-center p-3"}>
                    <input type="text" placeholder={"Task Name"} className={"w-100 mb-5 p-1 rounded"}/>
                    <div className={"w-100 d-flex justify-content-between mt-3 mb-5"}>

                        <Form.Control as="select" custom>
                            <option disabled>priority</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </Form.Control>

                        <Form.Control as="select" custom>
                            <option disabled>status</option>
                            <option>ToDO</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </Form.Control>

                        <DtPicker
                            onChange={setDate}
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

                    {props.modalType != "read" ?
                        <div className={"w-25 d-flex justify-content-end"}>
                            <Button variant="primary" onClick={handleClose} className={"w-75"}>
                                Save Changes
                            </Button>
                        </div>
                        :<div></div>}
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default TaskModal