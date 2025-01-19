import {calculateCurrentCaffeineLevel, timeSinceConsumption, getCaffeineAmount, coffeeConsumptionHistory} from "../utils"
export default function History() {
   

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline"></i>
        <h2>History</h2>
      </div>
      <p> <i>Hover for more information!</i> </p> {/* <i> tag is used for italic text */}
      <div className="coffee-history">
        {Object.keys(coffeeConsumptionHistory).sort((a, b) => b - a).map((utcTime, coffeeIndex) => {
          const coffee = coffeeConsumptionHistory[utcTime]
          const timeSinceConsume = timeSinceConsumption(utcTime) //returns a formatted string 2 days 2 hours 6 mins 4 secs for e.g
          const originalAmount = getCaffeineAmount(coffee.name) //return coffee amount from inputing the name of it
          const remainingAmount = calculateCurrentCaffeineLevel({
            [utcTime]: coffee
          })
          
          const summary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`

          return (
            <div title={summary} key={coffeeIndex}>  {/* title is a hover tooltip that will show summary when hovering over*/}
              <i className="fa-solid fa-mug-hot"></i>

            </div>
          )
        })} {/* Sort the keys in descending order, taking in 2 things in the array at a time (Object.keys(..) creates an array) if b - a is positive, b should come before a and if its negative, a shold come before b The normal a - b sorts it in descending order and it goes through all the different combination and sorts it
        
        Yeah, coffee sorted by most recent to oldest cause most recent days have biggest time and thus be decreasing order*/}
      </div>
    </>
  )
}