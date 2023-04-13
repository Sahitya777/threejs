import Canvas from './canvas'
import Cutsomizer from './pages/Cutsomizer';
import Home from './pages/Home';

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Cutsomizer/>
      
    </main>
  )
}

export default App