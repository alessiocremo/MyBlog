import './login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label><span>Email</span></label>
            <input type="text" className="loginInput" placeholder='Enter your email...'/>
            <label><span>Password</span></label>
            <input type="password" className='loginInput' placeholder='Enter your password...'/>
            <button className="loginButton">Login</button>
        </form>
        <div className="register">
                <div className='notAMemberText'>Not a member?</div>
                <button className="loginRegisterButton">Register</button>
        </div>
    </div>
  )
}
