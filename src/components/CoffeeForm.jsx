import {coffeeOptions} from '../utils'
import {useState} from 'react'


export default function CoffeeForm() {
  const [selectedCoffee, setSelectedCoffee] = useState(null) //state to keep track of which coffee type button selected
   const [showCoffeeTypes, setShowCoffeeTypes] = useState(false) // state variable to whether or not show select coffee types menu selection
   const [coffeeCost, setCoffeeCost] = useState(0) //state to keep track of the cost of the coffee inputed in the inpu field

  return (
    <>
    <div className="section-header"> 
      <i className="fa-solid fa-pencil"/>   {/* Can make any self-closing tag in jsx if it cotnains nothing inside it*/}
      <h2>Start tracking Today</h2>
    </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">    
        {coffeeOptions.slice(0,5).map((option, optionIndex) => {  //list of objects with name and caffiene (level)
          return (
            <button onClick = {() => {
              setSelectedCoffee(option.name) //adds the pretty border and sets hover state to this coffee type
              setShowCoffeeTypes(false) //hide the coffee type menu and remove the styles applied to other button when these are selected
            }}className={"button-card " + (option.name === selectedCoffee ? ' coffee-button-selected': ' ')} key={optionIndex}>
              {/* dynamic class name generation to add a hover state of the coffee type button selected*/} 
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          )
        })}
        <button onClick={() => {
          setShowCoffeeTypes(true) //showows the select tag
          setSelectedCoffee(null) //reset the selected coffee state so that when I click coffee type and then other, both are not hovered
        }} className={"button-card " + (showCoffeeTypes ? ' coffee-button-selected': ' ')}>
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>

      
      {showCoffeeTypes && ( //if state that controls the rendering of this select  is true, render the select tag
      <select onChange = {(e) => {
        setSelectedCoffee(e.target.value) //changes the state of curently selected coffee type getting the value of the selection option from the value attribute of option tag
      }} id="coffee-list" name="coffee-list"> {/* Select tag for dropdown menu and its called coffee-list*/}
        <option value={null}>Select type</option> {/* Default value is hardcoded to null*/}
        {coffeeOptions.map((option, optionIndex) => {
          return (
            <option value={option.name} key={optionIndex}>  {/* value attribute reprsent value submitted when form is submitted*/}
              {option.name} ({option.caffeine.mg}mg)
            </option>
          )
        })}
      </select>
      )}

      <h4>Add the cost ($)</h4>
      <input className="w-full" type="number" value = {coffeeCost} onChange = {(e) => {
        setCoffeeCost(e.target.value)  //changes state of coffee cost and the thing "value = ..." connects the state to the input field making sure it matches at all times
      }} placeholder="4.50"/> {/* w-full tailwind css to make it full width of screen and type number input type*/}
      <h4> Time since conspumtion</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select id="hours-select">

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((hour, hourIndex) => {
              return (
                <option value={hour} key={hourIndex}> {hour} </option>
              )
            })}
          </select>
        </div>
        <div>
          <h6>Mins</h6>
          <select id="mins-select">

            {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
              return (
                <option value={min} key={minIndex}> {min} </option>
              )
            })}

          </select>
        </div>
      </div>
      <button>
        <p>Add entry</p>
      </button>
    </>
  )
}