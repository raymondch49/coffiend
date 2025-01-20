import { useState } from "react"
import {useAuth} from '../context/AuthContent'
export default function Authentication(props) {
const {handleCloseModal} = props
   
  const [isRegistration, setIsRegistration] = useState(false) //whether user is signing in or signing up, assume user is signing in
  const [email, setEmail] = useState('') //state to keep track of the email inputed in the input field
  const [password, setPassword] = useState('') //state to keep track of the password inputed in the input field
  const [isAuthenticating, setIsAuthenticating] = useState(false) //state to keep track of whether user is authenticating
  const [error, setError] = useState(null)

  const { signup, login } = useAuth()

  async function handleAuthenticate() {
    if (!email || !email.includes('@') || !password || password.length < 6 || isAuthenticating) {
      return}
    try {
      setIsAuthenticating(true)
      setError(null)

      if (isRegistration) {
        //register a user
        await signup(email, password)
      } else {
        //login the user
        await login(email, password)
      }
      handleCloseModal()
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    } finally {
      setIsAuthenticating(false)
    }
    


  }



  return (
    <>
     <h2 className="sign-up-text"> {isRegistration ? 'Sign up' : 'Sign in'}</h2>
     <p> {isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>
     {error && (<p> X {error}</p>)}

     <input value={email} onChange={(e) => {
        setEmail(e.target.value)
     }} placeholder="Email"/>  {/* tie a state to the value input*/}

     <input value={password} onChange={(e) => {
      setPassword(e.target.value)
     }} placeholder="********" type="password"/>

     <button onClick={handleAuthenticate}><p>{isAuthenticating ? 'Authenticating...' : 'Submit'}</p></button>
     <hr /> {/* horizontal line */}

     <div className="register-content">
      <p>{isRegistration ? 'Already have an account' : 'Don\'t have an account?'}</p>
      <button onClick={() => setIsRegistration(!isRegistration)}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>
     </div>
    </>
  )
}