import React, { Component } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import RegisterAnimation from '../../Lottie/register.json'
import "../../styles/auth.css";
import UserServices from '../../Services/UserServices.js';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            users: [],
            username: '',
            email: '',
            password: '',
            alertShow: "close",
            showLoader: false,
        };
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


    registerUser = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const searchUsername = this.state.users.find(user => user.username === this.state.username);
        const searchEmail = this.state.users.find(user => user.email === this.state.email);
        const emailRegex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
        const passwordRegex = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}");



        if (searchUsername !== undefined && searchEmail !== undefined) {
            this.setState({
                alertShow: 'error',
            })
        } else if (searchUsername !== undefined) {
            this.setState({
                alertShow: 'error-username',
            })
        } else if (searchEmail !== undefined) {
            this.setState({
                alertShow: 'error-email',
            })
        } else if (!emailRegex.test(user.email)) {
            this.setState({
                alertShow: 'error-regexemail',
            })
        } else if (!passwordRegex.test(user.password)) {
            this.setState({
                alertShow: 'error-regexpassword',
            })
        } else {
            UserServices.createUser(user);
            this.setState({
                alertShow: 'success',
                showLoader: true,
            })
            setTimeout(() => {
                this.props.history.push('/');
            }, 5000)
        }
    }


    render() {
        if (this.state.showLoader) {
            return (
                <>
                    <section className="h-100">
                        <div className="container h-100">
                            <div className="row justify-content-sm-center h-100">
                                <div className="container">
                                    <div className="card shadow-lg">
                                        <div className="card-body p-5">
                                            {/* ALERTS */}
                                            <div>
                                                <Alert className="m-2 text-center" show={this.state.alertShow === "success"} variant="success">
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                    <h6 className="m-0">Your account has been successfully created</h6>
                                                    <h6 className="m-0">You are redirected to the login page</h6>
                                                </Alert>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
        return (
            <>
                <section className="h-100">
                    <div className="container h-100">
                        <div className="row justify-content-sm-center h-100">
                            <div className="container">
                                <div className="card shadow-lg">
                                    <div className="card-body pt-2 p-5">
                                        {/* ALERTS */}
                                        <div className="alerts-window">
                                            <Alert className="m-2 text-center mx-auto" show={this.state.alertShow === "error"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                                <h6 className="m-0">This username is being used.</h6>
                                                <h6 className="m-0">This email is being used.</h6>
                                                <p className="m-0"><small>Click to close the notification.</small></p>
                                            </Alert>

                                            <Alert className="m-2 text-center mx-auto" show={this.state.alertShow === "error-username"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                                <h6 className="m-0">This username is being used.</h6>
                                                <p className="m-0"><small>Click to close the notification.</small></p>
                                            </Alert>

                                            <Alert className="m-2 text-center mx-auto" show={this.state.alertShow === "error-email"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                                <h6 className="m-0">This email is being used.</h6>
                                                <p className="m-0"><small>Click to close the notification.</small></p>
                                            </Alert>

                                            <Alert className="m-2 text-center mx-auto" show={this.state.alertShow === "error-regexemail"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                                <h6 className="m-0">Write in the appropriate email format</h6>
                                                <p className="m-0"><small>Click to close the notification.</small></p>
                                            </Alert>

                                            <Alert className="m-2 text-center mx-auto" show={this.state.alertShow === "error-regexpassword"} variant="danger" onClick={() => this.setState({ alertShow: "close" })} >
                                                <p className="m-0 fw-bold">Your password must contain at least one number and one uppercase and lowercase letter and at least 6 or more characters</p>
                                                <p className="m-0"><small>Click to close the notification.</small></p>
                                            </Alert>
                                        </div>

                                        <div>
                                            <Player src={RegisterAnimation} autoplay loop />
                                        </div>
                                        <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
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
                                            <div>
                                                <input
                                                    id="email"
                                                    className="form-field"
                                                    type="text"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={(e) => this.setState({ email: e.target.value })}
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

                                                {
                                                    this.state.passwordError && (
                                                        <div className='w-100 ms-1'>
                                                            <p className="text-danger">DENEMEDENEMEDENEME</p>
                                                        </div>
                                                    )
                                                }


                                            </div>
                                            <button type="submit" className='btn btn-primary' onClick={this.registerUser}>REGISTER</button>
                                            <button type="reset" className='btn-clear btn btn-danger'>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="card-footer py-3 border-0">
                                        <div className="text-center">
                                            Already have an account? <Link to="/">Login</Link>
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

export default Register