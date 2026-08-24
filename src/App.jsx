import { useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import Modal from './components/Modal'
import { AppRouter } from './routes/AppRouter'
import { useLoaderStore } from './stores/useLoaderStore'
import { useLocation } from 'wouter'

function App() {

   const { toggleLoading } = useLoaderStore();
   const [ location ] = useLocation();

   useEffect(() => {
      toggleLoading(true);

      const t = setTimeout(() => {
         toggleLoading(false)
      }, 2000)

      return () => clearTimeout(t)
   }, [toggleLoading, location]);

   return (
      <div>
         <Modal />
         <Loader />
         <AppRouter />
      </div>
   )
}

export default App
