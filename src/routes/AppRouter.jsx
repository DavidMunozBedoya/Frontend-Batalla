import { Route, Switch } from "wouter";
import { useAuthStore } from "../stores/useAuthStore"
import { PublicRoutes } from "./PublicRoutes";
import MainPage from "../pages/MainPage";

export const AppRouter = () => {
   const { isAuth } = useAuthStore();

   return (
      <Switch>
         <Route
            path="/"
            children={
               <PublicRoutes auto={isAuth}>
                  <MainPage />
               </PublicRoutes>
            }
         />
         <Route />
      </Switch>
   )
}
