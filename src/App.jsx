import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import Hero from './components/Hero'
import CoffeeForm from './components/CoffeeForm'
import Stats from './components/Stats'
import History from './components/History'
import { useAuth } from './context/AuthContent'
import { coffeeConsumptionHistory } from './utils'


function App() {
  const {globalUser, globalData, isLoading} = useAuth()
  
  const isAuthenticated = globalUser /* state that determines if user is authenticated */
  
  

  const isData = globalData && !!Object.keys(globalData || {}).length //if 0 entries or no data(0 entries in globalData), isData is false. Double exclamation point converts any value to boolean representation



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
      {isAuthenticated &&isLoading && (<p>Loading data...</p>)}
      {(isAuthenticated && isData) && (authenticatedContent)}  {/* If isAuthenticated is true and we have data, authenticatedContent is rendered*/}
    </Layout>
  )
}

export default App
