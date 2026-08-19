import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { useAuthStore } from "../stores/useAuthStore"
import { PublicRoutes } from "./PublicRoutes";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

export const AppRouter = () => {

   const { isAuth } = useAuthStore();
   const [location] = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   return (
      <Switch>
         <Route path="/">
            <Redirect to="/home" />
         </Route>
         <Route path="/home" children={
            <PublicRoutes auth={isAuth}>
               <MainPage />
            </PublicRoutes>
         } />
         <Route path="/participante/:id" children={
            <PublicRoutes auth={isAuth}>
               <ProductPage />
            </PublicRoutes>
         } />
      </Switch>
   )
}
