import Meta from './meta'
import NavBar from './navbar'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {/* <NavBar /> */}
      <div className="min-h-screen font-sans  text-primary" >
        <main>{children}</main>
      </div>
    </>
  )
}
