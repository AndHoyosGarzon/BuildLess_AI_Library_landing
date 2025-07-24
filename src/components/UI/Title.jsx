const Title = ({ level = 1, children }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag>
      {children || /* Título */}
    </HeadingTag>
  )
}

export default Title 