import { useState } from "react"

import Modal from "./modal"
import Authentication from "./Authentication"

export default function Layout(props) {
  const { children } = props   // Get everything inside Layout tag of App.jsx

  const [showModal, setShowModal] = useState(false) //state to determine if modal is shown

  const header = (
    <header>
      <div>
        <h1 className="text-gradient"> CAFFIEND </h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button onClick={() => {
        setShowModal(true)
      }}>
        <p> Sign up free </p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  )

  const footer = (
    <footer>
      <p> <span className="text-gradient">Caffiend</span> made by <a>Raymond</a></p>
    </footer>
  )

  return (
    <>
      {showModal && (<Modal handleCloseModal={() => {
        setShowModal(false)
      }}>
        <Authentication />
      </Modal>)}  {/* If showModal is true, React rereders the Modal component with its {children} and then its modal-container css probide the overlay and the modal-content contains the authentication */}

      {header}
      <main>
        {children}    {/* Children is special prop always avaliable passed down and represents what is nested inside Layout tag
                        of App.jsx   
                        This helps maintain orginization  of the code with the rendering of different pages */}
      </main>
      {footer}
    </>
  )

}