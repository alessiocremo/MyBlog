import './login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder='Enter your email...'/>
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...'/>
            <button className="loginButton">Login</button>
        </form>
        <div className="register">
                <div className='notAMemberText'>Not a mem</div>
                <button className="loginRegisterButton">Register</button>
        </div>
    </div>
  )
}
