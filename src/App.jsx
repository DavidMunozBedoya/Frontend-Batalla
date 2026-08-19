import './App.css'
import Loader from './components/Loader'
import Modal from './components/Modal'
import MainPage from './pages/MainPage'
// import ProductPage from './pages/ProductPage'
// import { AppRouter } from './routes/AppRouter'

function App() {

   return (
      <div>
         <Modal />
         <Loader />
         {/* <AppRouter /> */}
         {/* <ProductPage /> */}
         <MainPage />
      </div>
   )
}

export default App
