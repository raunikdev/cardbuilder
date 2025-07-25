import Cardbuilder from './components/Cardbuilder'
import { Analytics } from "@vercel/analytics/next"
import './App.css'

function App() {

  return (
    <>
      <Cardbuilder/>
      <Analytics/>
    </>
  )
}

export default App
