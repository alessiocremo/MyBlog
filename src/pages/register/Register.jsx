import './register.css'

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label><span>Email</span></label>
            <input type="text" className="registerInput" placeholder='Enter your email...'/>
            <label><span>Password</span></label>
            <input type="password" className='registerInput' placeholder='Enter your password...'/>
            <button className="registerButton">Register</button>
        </form>
        <div className="login">
                <div className='alreadyAMemberText'>Already a member?</div>
                <button className="registerLoginButton">Login</button>
        </div>
    </div>
  )
}
