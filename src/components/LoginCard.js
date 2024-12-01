import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { FaUserCheck, FaUserShield } from 'react-icons/fa';
import '../styles/LoginCard.css'; // Import the CSS file

function LoginCard() {
  return (
    <Card className="login-card">
      <CardContent>
        <Typography 
          variant="h4" 
          component="h2" 
          className="login-card-title"
        >
          Login
        </Typography>
        
        <div className="login-card-btn-container">
          <Button 
            variant="contained" 
            fullWidth 
            startIcon={<FaUserShield />}
            className="login-card-btn admin-login-btn"
          >
            Admin Login
          </Button>
          
          <Button 
            variant="outlined" 
            fullWidth 
            startIcon={<FaUserCheck />}
            className="login-card-btn attendee-login-btn"
          >
            Attendee Login
          </Button>
        </div>
        
        <Typography 
          variant="body2" 
          className="login-card-footer"
        >
          Connect your Web3 wallet to proceed
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
