import { useEffect, useContext } from "react";
import { LoadingContext } from "./context/loading/LoadingContext";
import { apiClient } from "@src/apis/apiClient";
import { attachInterceptors } from "@src/apis/axiosInterceptor";
import { ToastContainer } from "react-toastify";
import { AppLayout } from "./@core/Layouts/AppLayout";

export const App = () => {
  const loading = useContext(LoadingContext);

  useEffect(() => {    
      attachInterceptors(apiClient, loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppLayout />      
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </>
  )
}
