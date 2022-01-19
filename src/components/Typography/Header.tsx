export const numberTuple = <T extends number[]>(...args: T) => args

const HEADER_LIST = numberTuple(1, 2, 3, 4, 5)

type HeaderProps = {
  text?: string
  level?: typeof HEADER_LIST[number]
}

const Header = ({ text, level }: HeaderProps) => {
  const H = `h${level}` as keyof JSX.IntrinsicElements

  const header = <H>{text}</H>
  return header
}

export default Header
