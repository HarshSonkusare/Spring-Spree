import LandingPage from "./components/LandingPage";
import Explore from "./components/Explore";
import FAQ from "./components/Faq";
import Sponsors from "./components/Sponsors";
import Event from "./components/Events";
import Gallery from "./components/Gallery/LayoutGallery";
import { Routes, Route, Navigate } from "react-router-dom";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import VerifyEmail from "./components/VerifyEmail";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";

import Profile from "./components/Profile";

const AppRoutes = () => {
  const { restore } = useAuth();

  useEffect(() => {
    restore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/events" exact element={<Event />} />
      <Route path="/contacts" exact element={<Contacts />} />
      <Route path="/sponsors" exact element={<Sponsors />} />
      <Route path="/gallery" exact element={<Gallery />} />
      <Route path="/explore" exact element={<Explore />} />
      <Route path="/faq" exact element={<FAQ />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/verifyMail" exact element={<VerifyEmail />} />
      <Route
        path="/passwordResetRequest"
        exact
        element={<PasswordResetRequest />}
      />
      <Route path="/resetPassword/:id" exact element={<PasswordReset />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
