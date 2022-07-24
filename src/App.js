import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <AddTask/>
      <Tasks/>
    </div>
  )
}

export default App