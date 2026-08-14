import './App.css'
import Loader from './components/Loader'
import Modal from './components/Modal'
import ProductPage from './pages/ProductPage'

function App() {

   return (
      <div>
         <Modal />
         <Loader />
         <ProductPage />
      </div>
   )
}

export default App
