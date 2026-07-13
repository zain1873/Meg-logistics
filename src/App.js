import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SmsTerms from './pages/SmsTerms';
import CookiesPolicy from './pages/CookiesPolicy';
import CookieConsent from './components/CookieConsent/CookieConsent';

function App() {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/sms-terms" element={<SmsTerms />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
