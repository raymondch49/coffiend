
export default function Layout(props) {
  const { children } = props   // Get everything inside Layout tag of App.jsx

  const header = (
    <header>
      <div>
        <h1 className="text-gradient"> CAFFIEND </h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
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