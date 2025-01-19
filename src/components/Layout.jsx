
export default function Layout(props) {
  const { children } = props

  const header = (
    <header></header>
  )

  const footer = (
    <footer></footer>
  )

  return (
    <>
    <header></header>
    <main>
      {children}         {/* This helps maintain orginization  of the code with the rendering of different pages */}
    </main>
    <footer></footer>
    </>
  )

}