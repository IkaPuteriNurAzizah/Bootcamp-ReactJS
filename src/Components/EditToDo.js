import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditToDo = ({modal, toggle, editTask, taskObj}) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    
    // const [data, setData] = useState('')
    // const getData = () =>
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "task") {
            setTask(value)
        }
        else {
            setDescription(value)
        }
    }

    useEffect(() => {
        setTask(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])
    
    const handleEdit = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = task
        tempObj['Description'] = description
        editTask(tempObj)
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
                <Button color="primary" onClick={handleEdit}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditToDo;