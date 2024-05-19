import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  const buttonStyle = {
    marginLeft: "10px",
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    fontFamily: "Montserrat, sans-serif"
  };

  const signout = () => {
    context.signout();
    navigate("/");
  };

  return (
    <div style={headerStyle}>
      <h1 style={{ margin: "0", fontSize: "24px" }}>
        {context.isAuthenticated ? `Welcome ${context.userName}!` : "You are not logged in"}
      </h1>
      <br></br>
      {!context.isAuthenticated && (
        <div style={{ marginTop: "10px" }}>
          <button style={buttonStyle} onClick={() => navigate('/login')}>Login</button>
          <button style={buttonStyle} onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      )}
      {context.isAuthenticated && (
        <button style={buttonStyle} onClick={signout}>Sign out</button>
      )}
    </div>
  );
};

export default Header;
