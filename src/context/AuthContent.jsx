//works as a globle state to wrap around application around it so that it can be access anywhere in the app
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'



const AuthContext = createContext() //create context

export function useAuth(){
  return useContext(AuthContext)
}


export function AuthProvider(props){
  const { children } = props;
  const [globalUser, setGlobalUser] = useState(null)
  const [globalData, setGlobalData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email){
    return sendPasswordResetEmail(auth, email)
  }

  function logout(){
    setGlobalUser(null)
    setGlobalData(null)
    return signOut(auth)
  }

  const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      console.log('CURRENT USERK ', user)
      setGlobalUser(user)
      //if no user, empty user state and return from this listener
      if (!user) { 
        console.log("No user found")
        return
      }
      //if there is a user, check if user has data in the database, and if they do, then fetch said data and update the global state
      try {
        setIsLoading(true)
        //first we create a reference for document (labelled json object), and then we get the doc, and then we snapshot it to see if there's anything there
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        let firebaseData = {}

        if (docSnap.exists()){
          console.log("Found user data")
          firebaseData = docSnap.data()
        }
        setGlobalData(firebaseData)

      } catch (err) {
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }



     })     //listens for changes in the authentication state (sign in or sign out)
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={value}> {/*pass a prop down to this general gloal state, this context, and anything containe in the dictioanry become a part of the gloabl state*/}
      {children}
    </AuthContext.Provider>

  )  //return the context provider with the value of the state and the function to update the state
}
