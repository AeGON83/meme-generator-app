import './App.css'
import Generator from './components/Generator'
import data from './components/data'

function App() {

  return (
    <div className='main'>
      <Generator data={data} />
    </div>
  )
}

export default App
