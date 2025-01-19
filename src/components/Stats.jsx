import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels, calculateCoffeeStats, getTopThreeCoffees} from "../utils"

//coffeeConsumptionHistory is the fake data with key as timestap and value as an object with name of coffee and cost
//calculateCurrentCaffeineLevel is the function that takes in the coffeeConsumptionHistory and returns the current caffeine level

function StatCard(props){   {/* Secondary function component that is only in the scope of this component */}
  const {lg, title, children} = props
  return (
    <div className={'card stat-card ' + (lg ? ' col-span-2 ': '')}>
      <h4>{title}</h4>
      {children}
    </div> //col-span-2 is tailwind css class that make card span over 2 collumns
  )
}

//use of the secondary functional component to use StatCard as the generic wrapper or component for each stat card but the content can be vastly different since we pass in the childre prop and what is between the tags can depend on each stat card to make it more unqiue

export default function Stats() {   //fake data to be used for tests
  const stats = calculateCoffeeStats(coffeeConsumptionHistory)  //returns an object with daily_caffeine, daily_cost, average_coffees, total_cost based on the coffeeConsumptionHistory 

  const caffeineLevel =  calculateCurrentCaffeineLevel(coffeeConsumptionHistory)
  const warningLevel = caffeineLevel < statusLevels['low'].maxLevel ?  //find the warning level of caffeine Level
  'low':
  caffeineLevel < statusLevels['moderate'].maxLevel ?
  'moderate':
  'high'

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple"></i>
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">

        <StatCard lg title="Active Caffeine Level">
          <div className="Status">
            <p><span className="stat-text">{caffeineLevel}</span>mg</p>
            <h5 style ={{color: statusLevels[warningLevel].color, background: statusLevels[warningLevel].background}}>{warningLevel}</h5>    {/* Status level is an object with key as low, modertate ...and value as an object with color, background, description, maxLevel */}   
          </div>
          <p>{statusLevels[warningLevel].description}</p>
        </StatCard>

        <StatCard title="Daily Caffeine">
          <p><span className="stat-text">{stats.daily_caffeine}</span>mg</p>
        </StatCard>

        <StatCard title="Avg # of Coffees">
          <p><span className="stat-text">{stats.average_coffees}</span></p>
        </StatCard>

        <StatCard title="Daily Cost ($">
          <p>$<span className="stat-text">{stats.daily_cost}</span></p>
        </StatCard>

        <StatCard title="Total Cost ($)">
          <p>$<span className="stat-text">{stats.total_cost}</span></p>
        </StatCard>
        <table className="stat-table">  {/* table is a html element that is used to display data in a tabular format */}
          <thead> {/* table header */}
            <tr> {/* table row */}
              <th>Coffee Name</th> {/* table header cell */}
              <th>Number of Purchases</th>
              <th>Percentage of Total</th>
            </tr>
          </thead>
            <tbody>
              {getTopThreeCoffees(coffeeConsumptionHistory).map((coffee, coffeeIndex) => {
                return (
                  <tr key={coffeeIndex}>
                    <td>{coffee.coffeeName}</td>  {/* table data cell */}
                    <td>{coffee.count}</td>
                    <td>{coffee.percentage}</td> 
                  </tr>
                )
              })}
            </tbody>
        </table>
      </div>
    </>
  )
}