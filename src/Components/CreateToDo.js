import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateToDo = ({modal, toggle, createTask, taskObj}) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "task") {
            setTask(value)
        }
        else {
            setDescription(value)
        }
    }
    
    const handleCreate = (e) => {
        e.preventDefault();
        let TaskObj = {}
        taskObj['Name'] = task
        taskObj['Description'] = description
        createTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Update Task
            </ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <label>Task Name</label>
                    <input type="text" className = "form-control" value = {task} onChange = {handleChange} name = "task"/>
                </div>
                <div className = "form-group">
                    <label>Description</label>
                    <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                </div>    
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleCreate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateToDo;