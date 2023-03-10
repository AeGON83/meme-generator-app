import './App.css'
import Generator from './components/Generator'
import data from './components/data'
import ImageIndex from './components/ImageIndex'

function App() {

  return (
    <div className='main'>
      <Generator data={data} />
      <ImageIndex data={data} />
    </div>
  )
}

export default App
