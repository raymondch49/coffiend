import ReactDOM from "react-dom"


export default function Modal(props) {
  const {children, handleCloseModal} = props
   
//ReactDOM.createPortal is used to render a component into a different part of the DOM and not in the root div
  return ReactDOM.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay"/>
      <div className="modal-content">
        {children}
      </div>
    
    </div>,
    document.getElementById('portal') //whatever we do in the div, render it in the portal div
  )
}