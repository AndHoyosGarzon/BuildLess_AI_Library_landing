import Navigation from "./UI/Navigation.jsx"

const Header = () => {
  return (
    <header className="xs:px-5 md:px-30 text-header-text border-b-[0.2px] border-[#f24e3f]/10">
      {/* Contenido del header */}
        <Navigation/>
    </header>
  )
}

export default Header 