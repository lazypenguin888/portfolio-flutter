import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import './App.css'
import Flutter from './components/Flutter/Flutter'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Flutter/>
    </div>
  )
}

export default App