import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./global.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "@/components/shared/navbar";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
         <App />
    </BrowserRouter>
  </StrictMode>,
)
