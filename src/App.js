import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import LoginCard from './components/LoginCard';
import './styles/App.css';

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="full-screen-container">
        {/* Left side - App Introduction */}
        <div className="left-side">
          <h1 className="text-5xl font-bold mb-4">Event Booking</h1>
          <p className="text-xl mb-6">
            Decentralized event management powered by Web3 technology
          </p>
          <p className="text-gray-300">
            Connect, book, and attend events securely on the blockchain
          </p>
        </div>

        {/* Right side - Login Card */}
        <div className="right-side">
          <LoginCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
