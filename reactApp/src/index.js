import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import PublicPage from "./pages/publicPage";
import ProfilePage from "./pages/profilePage";
import MoviesPage from "./pages/moviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import ProtectedRoutes from "./protectedRoutes";
import Header from "./components/siteHeader";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <ul style={{ fontFamily: "Montserrat" }}>
            <Link style={{ padding: "10px", textDecoration: "none", color: "black", fontWeight: "bold" }} to="/">Public</Link>
            <Link style={{ padding: "10px", textDecoration: "none", color: "black", fontWeight: "bold" }} to="/movies">Movies</Link>
            <Link style={{ padding: "10px", textDecoration: "none", color: "black", fontWeight: "bold" }} to="/top-rated-movies">Top Rated Movies</Link>
            <Link style={{ padding: "10px", textDecoration: "none", color: "black", fontWeight: "bold" }} to="/profile">Profile</Link>
          </ul>
          <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/top-rated-movies" element={<TopRatedMoviesPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
