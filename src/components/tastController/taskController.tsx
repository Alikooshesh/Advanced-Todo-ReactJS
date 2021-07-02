import './taskController.css'
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
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
                        <input list={"priority"} placeholder={"priority"} className={"w-25 p-1 rounded"}/>
                        <input list={"status"} placeholder={"status"} className={"w-25 p-1 rounded"}/>
                        <datalist id={"priority"}>
                            <option value={"High"}></option>
                            <option value={"Medium"}></option>
                            <option value={"Low"}></option>
                        </datalist>

                        <datalist id={"status"}>
                            <option value={"ToDO"}></option>
                            <option value={"Doing"}></option>
                            <option value={"Done"}></option>
                        </datalist>

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