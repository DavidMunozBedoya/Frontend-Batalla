import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { useAuthStore } from "../stores/useAuthStore"
import { PublicRoutes } from "./PublicRoutes";
import { NotFound } from "../components/NotFound";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import PolicyPage from "../pages/PolicyPage";
import EndingPage from "../pages/EndingPage";

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

         <Route path="/politica" children={
            <PublicRoutes auth={isAuth}>
               <PolicyPage />
            </PublicRoutes>
         } />

         <Route path="/agradecimientos" children={
            <PublicRoutes auth={isAuth}>
               <EndingPage />
            </PublicRoutes>
         } />

         <Route path="/404" children={<NotFound />} />
         <Redirect to="/404" replace />

      </Switch>
   )
}
