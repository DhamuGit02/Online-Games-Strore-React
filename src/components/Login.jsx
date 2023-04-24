import './Login.css'
import './GamingButton.css'
import { useState } from 'react'
import GamingBackground from '../images/gaming-bg-2.jpeg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GameVaultLogo from './GameVaultLogo'
function Login() {
    const [getLoginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleFormData = (e) => {
        setLoginData(() => ({
            ...getLoginData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/api/get-user', { uname: getLoginData.username, password: getLoginData.password })
            if (res.data) {
                navigate(`/mainpage`)
                localStorage.setItem('user', res.data[0].id)
            }
            else {
                toast.error('Invalid Credentials', {
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
        } catch (err) {
            toast.error('Network Error', {
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
            <div className="login-box">
                <p>Login</p>
                <center>
                    <img src={require("../images/game-vault-logo-new-2.png")} alt="" width={90} height={90}/>
                </center>
                <form method='get' onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input required="" name="username" type="text" value={getLoginData.username} onChange={handleFormData} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input required="" name="password" type="password" value={getLoginData.password} onChange={handleFormData} />
                        <label>Password</label>
                    </div>
                    <center>
                        <div className="button-borders">
                            <button className="primary-button" type='submit'> LOGIN
                            </button>
                        </div>
                    </center>
                </form>
                <center className='register-link'>
                    <p>Don't have an account? <a href="/register" className="a2" style={{ color: '#FF4655' }}>Register</a></p>
                </center>
            </div>
        </>
    )
}

export default Login