import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ContactForm from "./components/contact/contact-us";

function App() {
 
  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
               <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
