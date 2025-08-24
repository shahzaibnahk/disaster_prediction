import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboad from "./pages/Dashboad";
import toast, { Toaster } from "react-hot-toast";
import { clearError, clearMessage } from "./redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import { getMyProfile } from "./redux/profile/profileAction";

const App = () => {
  const { message, error, loading } = useSelector((state) => state.auth);

  const { user, isAuthenticated } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [message, error]);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [message, loading, error]);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={"/dashboard"}
            >
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={"/dashboard"}
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={"/dashboard"}
            >
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect={"/login"}
            >
              <Dashboad user={user} isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
