import DarkModeButton from "./buttons/DarkModeBtn"

//IF
import { ThemeLayoutProps } from "../../app"

const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  return (
    <>
      <DarkModeButton />
      {children}
    </>
  )
}

export default ThemeLayout