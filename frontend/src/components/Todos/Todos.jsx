import React, { Component } from 'react'
import Accordion from '../../components/Todos/Accordion'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../../styles/todos.css'

import { Player } from '@lottiefiles/react-lottie-player';
import TodosAnimation from '../../Lottie/todos.json'


import UserServices from '../../Services/UserServices';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            show: null,
            isActive: false,
            isCompleted: false,
            user: [],
            todos: [],
            todoId: null,
            title: "",
            description: "",
            alertShow: "close",
        };

        // bind
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        const ID = this.state.id;

        // TODOS
        UserServices.getAllTodosForUser(ID).then(
            (response) => {
                this.setState({
                    todos: response.data
                })
            }
        );

        // USER
        UserServices.getUserById(ID).then(
            (response) => {
                this.setState({
                    user: response.data
                })
            }
        );

    }//end componentDidMount

    addTodo() {
        const ID = this.state.id;
        const todoDto = {
            title: this.state.title,
            description: this.state.description,
        }

        UserServices.addTodo(ID, todoDto).then(
            response => {
                this.setState({
                    alertShow: "add",
                })

                UserServices.getAllTodosForUser(ID).then(
                    (response) => {
                        this.setState({
                            todos: response.data
                        })
                    }
                );
            }
        );
    }

    updateTodo() {
        const ID = this.state.id;
        const todoId = this.state.todoId;
        const todoDto = {
            title: this.state.title,
            description: this.state.description,
        }

        UserServices.updateTodo(ID, todoId, todoDto).then(
            response => {
                this.setState({
                    alertShow: "update",
                })

                UserServices.getAllTodosForUser(ID).then(
                    (response) => {
                        this.setState({
                            todos: response.data
                        })
                    }
                );
            }
        )
    }

    toggleTodoCompleted(todoId) {
        const ID = this.state.id;
        UserServices.toggleTodoCompleted(ID, todoId).then(
            response => {
                this.setState({
                    alertShow: "toggle",
                });

                UserServices.getAllTodosForUser(ID).then(
                    (response) => {
                        this.setState({
                            todos: response.data
                        })
                    }
                );
            }
        )
    }

    deleteTodo(todoId) {
        const ID = this.state.id;
        UserServices.deleteTodo(ID, todoId).then(
            response => {
                this.setState({
                    todos: this.state.todos.filter(
                        todos => todos.id !== todoId
                    ),
                    alertShow: "delete",
                });
            }
        )
    }

    render() {

        const handleClose = () => this.setState({ show: "close", title: "", description: "" });
        const handleAddShow = () => this.setState({ show: "add" });
        const handleUpdateShow = () => this.setState({ show: "update" });
        const handleDeleteShow = () => this.setState({ show: "delete" });

        //console.log(this.state.todos.filter((todo) => todo.id === this.state.todoId).map((todo) => todo.id))

        return (
            <>
                <section>
                    <div className="container">
                        <div className="row justify-content-sm-center">
                            <div className="container">
                                <div className="card shadow-lg">
                                    <div className="row card-header py-1 border-1 m-0">
                                        <div className="col-6 text-start m-0 p-0 fw-bolder">
                                            <i className="fa-solid fa-user text-secondary"></i> {this.state.user.username}
                                        </div>
                                        <div className="col-6 text-end m-0 p-0">
                                            <Link className="text-danger" to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                                        </div>
                                    </div>

                                    {/* ALERT */}
                                    <div>
                                        <Alert className="m-2 text-center" show={this.state.alertShow === "add"} variant="success" onClick={() => this.setState({ alertShow: "close" })} >
                                            <h5 className="m-0 ">Item Successfully Added</h5>
                                            <p className="m-0"><small>Click to close the notification.</small></p>
                                        </Alert>
                                        <Alert className="m-2 text-center" show={this.state.alertShow === "update"} variant="primary" onClick={() => this.setState({ alertShow: "close" })} >
                                            <h5 className="m-0 ">Item Successfully Updated</h5>
                                            <p className="m-0"><small>Click to close the notification.</small></p>
                                        </Alert>
                                        <Alert className="m-2 text-center" show={this.state.alertShow === "delete"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                            <h5 className="m-0 ">Item Successfully Deleted</h5>
                                            <p className="m-0"><small>Click to close the notification.</small></p>
                                        </Alert>
                                        <Alert className="m-2 text-center" show={this.state.alertShow === "toggle"} variant="warning" onClick={() => this.setState({ alertShow: "close" })} >
                                            <h5 className="m-0 ">Item Successfully State Toggled</h5> 
                                            <p className="m-0"><small>Click to close the notification.</small></p>
                                        </Alert>
                                    </div>

                                    <div className="card-body pt-2 p-5">
                                        <Player src={TodosAnimation} className="logo mt-4" autoplay loop />
                                        <h1 className="fs-4 card-title fw-bold m-4">TODOS</h1>

                                        {/* MODAL */}
                                        <div className='container text-end pe-3'>
                                            <Button className="w-25" variant="primary" onClick={handleAddShow}>
                                                ADD
                                            </Button>
                                        </div>

                                        {/* ADD AND UPDATE MODAL */}
                                        <Modal show={this.state.show === "add" || this.state.show === "update"} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{this.state.show === "add" ? "Add To Do" : "Update To Do"}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="addForm.ControlInput">
                                                        <Form.Label>Title</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder={this.state.show === "add" ? "Todo Title" : this.state.todos.filter((todo) => todo.id === this.state.todoId).map((todo) => todo.title)}
                                                            autoFocus
                                                            value={this.state.title}
                                                            onChange={(e) => this.setState({ title: e.target.value })}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="addForm.ControlTextarea">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            value={this.state.description}
                                                            placeholder={this.state.show === "add" ? "Todo Description" : this.state.todos.filter((todo) => todo.id === this.state.todoId).map((todo) => todo.description)}
                                                            onChange={(e) => this.setState({ description: e.target.value })}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className="w-25" variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button className={this.state.show === "add" ? "w-25" : ""} variant="primary" onClick={this.state.show === "add" ? () => { this.addTodo(); handleClose(); } : () => { this.updateTodo(); handleClose(); }}>
                                                    {this.state.show === "add" ? "Add" : "Update Changes"}
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        {/* DELETE CHECK MODAL */}
                                        <Modal show={this.state.show === "delete"} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>DELETE</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>This item will be deleted. Are you sure ?</Modal.Body>
                                            <Modal.Footer>
                                                <Button className="w-25" variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button className="w-25" variant="danger" onClick={() => { this.deleteTodo(this.state.todoId); handleClose(); }}>
                                                    DELETE
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        {/*
                                            this.state.todos.map((todos) =>
                                                <Accordion key={todos.id} title={todos.title} description={todos.description}/>
                                            )
                                        */}

                                        {
                                            this.state.todos.map((todos) =>
                                                <Accordion key={todos.id} title={todos.title} description={todos.description} updateShow={() => { this.setState({ todoId: todos.id, title: todos.title, description: todos.description }); handleUpdateShow() }} deleteShow={() => { this.setState({ todoId: todos.id }); handleDeleteShow() }} isChecked={todos.isCompleted} handleCheckBoxChange={() => this.toggleTodoCompleted(todos.id)}/>
                                            )
                                        }
                                    </div>


                                    {/* Footer */}
                                    <div className="card-footer fw-bolder py-2 border-1">
                                        <div className="text-center">
                                            Total : {this.state.todos.length} - Completed : {this.state.todos.filter(todo => todo.isCompleted === true).length} - Uncompleted : {this.state.todos.filter(todo => todo.isCompleted === false).length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Todos