import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#78E335', // CMTC Green
      contrastText: '#000000',
    },
    secondary: {
        main: '#2C3E50', // CMTC Navy/Dark
        contrastText: '#ffffff',
    },
    text: {
      primary: '#2C3E50', // Dark Navy for text
      secondary: '#546E7A',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      color: '#2C3E50',
    },
    h2: {
      fontWeight: 700,
      color: '#2C3E50',
    },
    h4: {
        fontWeight: 700,
        color: '#2C3E50',
        },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // More rounded/modern
          padding: '12px 28px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
             transform: 'translateY(-2px)',
             boxShadow: '0 6px 12px rgba(120, 227, 53, 0.4)', // Green glow
          }
        },
        containedPrimary: {
          color: '#003300', // Darker text on bright green
        },
      },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: '#ffffff',
                color: '#2C3E50',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
            }
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 16,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }
        }
    }
  },
});

export default theme;
