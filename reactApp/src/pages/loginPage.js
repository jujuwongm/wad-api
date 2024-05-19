import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

const LoginPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();

    const login = () => {
        context.authenticate(userName, password);
    };

    const { from } = location.state || { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <div style={{ fontFamily: "Montserrat" }}>
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography variant="h4" gutterBottom fontFamily="Montserrat">Login Page</Typography>
                <Typography variant="body1" gutterBottom fontFamily="Montserrat">You must log in to view the protected pages</Typography>
                <TextField
                    id="username"
                    label="User Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fontFamily="Montserrat" margin="10px" onClick={login}>Log in</Button>
                <Typography variant="body1" gutterBottom fontFamily="Montserrat">Not Registered? <Link to="/signup">Sign Up!</Link></Typography>
            </Box>
        </div>
    );
};

export default LoginPage;
