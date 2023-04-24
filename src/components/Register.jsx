import { useState } from 'react'
import axios from 'axios'
import './Register.css'
import GamingBackground from '../images/gaming-bg-2.jpeg'
import GameVaultLogo from './GameVaultLogo'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
    const [getFormData, setFormData] = useState({
        Name: '',
        username: '',
        password: '',
        age: '',
        mobno: ''
    })
    const handleFormData = (e) => {
        setFormData(() => ({
            ...getFormData,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/register', {
                name: getFormData.Name, uname: getFormData.username, pass: getFormData.password, age: getFormData.age, mobno: getFormData.mobno
            })
            toast.success('Registered Successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (err) {
            toast.error('Network Error!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='background'>
                <img src={GamingBackground} alt="" srcset="" />
            </div>
            {/* <div className='logo'>
                <GameVaultLogo width={90} height={90} />
            </div> */}
            <div className="login-card">
                <div className="card-header">
                    <div className="log">Register</div>
                </div>
                <form action='post' onSubmit={handleSubmit}>
                    <center>
                        <img src={require("../images/game-vault-logo-new-2.png")} alt="" width={90} height={90}/>
                    </center>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className='register-input-field' required name="Name" id="name" type="text" placeholder='' onChange={handleFormData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input className='register-input-field' required name="username" id="username" type="text" placeholder='' onChange={handleFormData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input className='register-input-field' required name="password" id="password" type="password" placeholder='' onChange={handleFormData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input className='register-input-field' required="" name="age" id="age" type="text" placeholder='' onChange={handleFormData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobno">Mobile Number:</label>
                        <input className='register-input-field' required="" name="mobno" id="mobno" type="text" placeholder='' onChange={handleFormData} />
                    </div>
                    <center style={{ marginTop: '30px' }}>
                        <div className="button-borders">
                            <button className="primary-button" type='submit'> REGISTER
                            </button>
                        </div>
                        <div className="register-link" style={{ marginTop: '25px' }}>
                            Already registered ? <span><a href="/login" style={{ textDecoration: 'none', color: '#FF4655' }}>Login</a></span>
                        </div>
                    </center>
                </form>
            </div>
        </>
    )
}

export default Register