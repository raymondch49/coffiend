export default function Hero() {
   

  return (
    <>
      <h1>CoffeeTracking for Coffee <abbr title="An enthusiats of devotee">Fiends</abbr>!</h1>
      <div className="benefits-list">
        <h3 className="fomt-bolder">Try <span 
        className="text-gradient"> Caffiend</span> and start ...</h3>
        <p>✅ Tracking every coffee</p>
        <p>✅ Measuring you blood caffeine levels</p>
        <p>✅ Costing and quantifying your addition</p>
      </div>
      <div className="card info-card">
        <div>
          <i className="fa-solid fa-circle-info"></i>
          <h3> Did you know ...</h3>
        </div>
        <h5> That caffeine&apos;s half-life is about 5 hours</h5>
        <p> This means that after 5 hours, half of the caffeine you consume is still in your system, keeping you alert longer! So if drink a cup of coffee with 200 mg of caffiene, 5 hours, later, you&apos;ll still have about 100 mg of caffeine in your system.</p> {/* &apos; is apostrophe in html symbol cause React dont like it */}
      </div>
    </>
  )
}