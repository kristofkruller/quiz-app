import DarkModeButton from "./buttons/DarkModeBtn"

interface ThemeLayoutProps {
  children: React.ReactNode;
}

const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  return (
    <>
      <DarkModeButton />
      {children}
    </>
  )
}

export default ThemeLayout