import { useState } from "react"

export default function Authentication() {
   
const [isRegistration, setIsRegistration] = useState(false) //whether user is signing in or signing up, assume user is signing in
const [email, setEmail] = useState('') //state to keep track of the email inputed in the input field
const [password, setPassword] = useState('') //state to keep track of the password inputed in the input field
const [isauthenticating, isSetAuthenticating] = useState(false) //state to keep track of whether user is authenticating


async function handleSubmit() {

}



  return (
    <>
     <h2 className="sign-up-text"> {isRegistration ? 'Sign up' : 'Sign in'}</h2>
     <p> {isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>

     <input value={email} onChange={(e) => {
        setEmail(e.target.value)
     }} placeholder="Email"/>  {/* tie a state to the value input*/}

     <input value={password} onChange={(e) => {
      setPassword(e.target.value)
     }} placeholder="********" type="password"/>

     <button onClick={handleSubmit}><p>Submit</p></button>
     <hr /> {/* horizontal line */}

     <div className="register-content">
      <p>{isRegistration ? 'Already have an account' : 'Don\'t have an account?'}</p>
      <button onClick={() => setIsRegistration(!isRegistration)}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>
     </div>
    </>
  )
}