import React, { Component } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import LoginAnimation from '../../Lottie/login.json'
import "../../styles/auth.css";
import UserServices from '../../Services/UserServices.js';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            isVisible: false,
            username: '',
            password: '',
            users: [],
            alertShow: "close",
        };

        //bind
        this.registerPage = this.registerPage.bind(this);
    }

    componentDidMount() {
        UserServices.getAllUsers().then(
            (response) => {
                this.setState({
                    users: response.data
                })
            }
        )
    }//end componentDidMount

    // REGISTER PAGE
    registerPage() {
        this.props.history.push('/register');
    }

    checklogin = (event) => {
        event.preventDefault();
        let searchUser = this.state.users.find(user => user.username === this.state.username && user.password === this.state.password);

        if (searchUser !== undefined) {
            this.props.history.push(`${searchUser.id}/todos`);
        } else {
            this.setState({
                alertShow: "error"
            })
        }
    }

    render() {

        return (
            <>
                <section className="h-100">
                    <div className="container h-100">
                        <div className="row justify-content-sm-center h-100">
                            <div className="container">
                                <div className="card shadow-lg">
                                    <div className="card-body pt-2 p-5">
                                        {/* ALERTS */}
                                        <div>
                                            <Alert className="m-2 text-center" show={this.state.alertShow === "error"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                                <h5 className="m-0 ">User Not Found</h5>
                                                <p className="m-0"><small>Click to close the notification.</small></p>
                                            </Alert>
                                        </div>
                                        <Player src={LoginAnimation} autoplay loop />
                                        <h1 className="fs-4 card-title fw-bold mb-4">LOGIN</h1>
                                        <form>
                                            <div>
                                                <input
                                                    id="username"
                                                    className="form-field"
                                                    type="text"
                                                    placeholder="Username"
                                                    name="username"
                                                    onChange={(e) => this.setState({ username: e.target.value })}
                                                />
                                            </div>
                                            <div className="inner-addon right-addon">
                                                <input
                                                    id="password"
                                                    className="form-field"
                                                    type={this.state.isVisible ? "text" : "password"}
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={(e) => this.setState({ password: e.target.value })}
                                                />
                                        
                                                <i onClick={() => this.setState({ isVisible: !this.state.isVisible })} className={this.state.isVisible ? "icon fa-solid fa-eye-slash" : "icon fa-solid fa-eye"}></i>

                                            </div>
                                            <button className='btn-login btn btn-primary' onClick={this.checklogin}>LOGIN</button>
                                        </form>
                                    </div>
                                    <div className="card-footer py-3 border-0">
                                        <div className="text-center">
                                            Don't have an account? <Link to="/register">Create One</Link>
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

export default Login