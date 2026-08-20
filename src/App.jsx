import { useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import Modal from './components/Modal'
import { AppRouter } from './routes/AppRouter'
import { useLoaderStore } from './stores/useLoaderStore'

function App() {

   const { toggleLoading } = useLoaderStore();

   useEffect(() => {
      toggleLoading(true);

      const t = setTimeout(() => {
         toggleLoading(false)
      }, 3000)

      return () => clearTimeout(t)
   }, [toggleLoading]);

   return (
      <div>
         <Modal />
         <Loader />
         <AppRouter />
      </div>
   )
}

export default App
