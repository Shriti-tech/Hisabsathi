import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ContactForm from "./components/contact/contact-us";
import RefundPolicyPage from "./components/policy/refund-policy";
import PrivacyPolicyPage from "./components/policy/privacy-policy";
import TermsOfServicePage from "./components/policy/terms-service";
import ReferEarnPage from "./components/policy/refer-earn";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/refer-and-earn" element={<ReferEarnPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
