import './App.css'
import Loader from './components/Loader'
import Modal from './components/Modal'
import ProductPage from './pages/ProductPage'
// import { AppRouter } from './routes/AppRouter'

function App() {

   return (
      <div>
         <Modal />
         <Loader />
         {/* <AppRouter /> */}
         <ProductPage />
      </div>
   )
}

export default App
