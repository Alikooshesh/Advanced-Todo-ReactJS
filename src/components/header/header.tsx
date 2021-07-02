import React from "react";
import {MdPlaylistAddCheck , MdSearch , MdFilterList , MdModeEdit} from "react-icons/md"
import {FormControl, InputGroup} from "react-bootstrap";

import './header.css'

const Header:React.FC = () => {
    return (
        <header className={"w-100 h-100 d-flex text-light p-2"} style={{backgroundColor:"#673ab7"}}>
            <div className={"w-75 d-flex align-items-center"}>
                <span className={""}><MdPlaylistAddCheck className={"icon"}></MdPlaylistAddCheck></span>
                <h4 className={"mx-2"}>MY To-Do Tasks</h4>
            </div>
            <div className={"w-25 d-flex justify-content-end align-items-center"}>
                <InputGroup className="rounded">
                    <InputGroup.Text><MdSearch></MdSearch></InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Search" />
                </InputGroup>
                <MdFilterList className={"icon"}></MdFilterList>
                <MdModeEdit className={"icon"}></MdModeEdit>
            </div>
        </header>
    )
}

export default Header