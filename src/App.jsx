import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import Hero from './components/Hero'
import CoffeeForm from './components/CoffeeForm'
import Stats from './components/Stats'
import History from './components/History'

function App() {
  
  const isAuthenticated = false  /* state that determines if user is authenticated */

  const authenticatedContent = (    /* This is info conditionally renderd if the user is authenticated */
    <>
      <Stats />
      <History />   
    </>
  )
  
  return (
    <Layout>
      <Hero />     
      <CoffeeForm isAuthenticated={isAuthenticated} />        {/* Users see the website and can input their information and try to complete the form but will be     
                              prompte to sign up and be rejected*/}
      {isAuthenticated && (authenticatedContent)}  {/* If isAuthenticated is true, authenticatedContent is rendered*/}
    </Layout>
  )
}

export default App
