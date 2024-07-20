
export default function Navbar() {
  return (

    <nav className="block w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="navbar-brand">
        <a href="/">BrandName</a>
      </div>
      <div className="navbar-links">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
        <a href="#features">Features</a>
        </li>
        <li>
        <a href="#contact">Contact</a>
        </li>
      </ul></div>
    </nav>
  )
}
