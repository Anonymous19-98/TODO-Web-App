import React, { Component } from 'react';
import {
    Button,
    ModalHeader,
    Modal,
    ModalBody,
    ModalFooter,
    From,
    FromGroup,
    Input,
    Label,
    FormControl,
    ControlLabel
} from 'reactstrap';


class CustomModel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
    //TO CHECK CHECKED 
    handleChange = e =>{
        let {name,value} = e.target;
        if(e.target.type === 'checkbox'){
            value = e.target.checked;
        }

        const activeItem = {...this.state.activeItem, [name]: value};
        this.setState ({activeItem})
    };

    render(){
        const {toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Items</ModalHeader>
                <ModalBody>
                    <Form>
                        <formGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.activeItem.Title}
                                onChange={this.handleChange}
                                placeholder="Enter Task Title"
                            />
                        </formGroup>
                        <formGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="Description"
                                value={this.state.activeItem.Description}
                                onChange={this.handleChange}
                                placeholder="Enter Task Description"
                            />
                        </formGroup>
                        <formGroup check>
                            <Label for="completed">
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    value={this.state.activeItem.Completed}
                                    onChange={this.handleChange}
                                    placeholder="Enter Task Title"
                                />
                                Completed
                            </Label>
                        </formGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default Modal
