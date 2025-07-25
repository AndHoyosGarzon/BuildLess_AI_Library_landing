import Navigation from "./UI/Navigation.jsx"

const Header = () => {
  return (
    <header className="xs:px-5 md:px-30 text-header-text border-b-[1px] border-[#f24e3f]/20">
      {/* Contenido del header */}
        <Navigation/>
    </header>
  )
}

export default Header 