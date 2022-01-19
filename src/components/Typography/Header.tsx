type HeaderProps = {
  text: string
  className?: string
}

const Header = ({ text, className }: HeaderProps) => {
  return <h1 className={className}>{text}</h1>
}

export default Header
