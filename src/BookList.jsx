import React, { useState } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails'; // Assuming BookDetails component is defined separately
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



const themes = {
  default: createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
  }),
  dark: createTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#ff4081',
      },
      background: {
        default: '#303030',
        paper: '#424242',
      },
      text: {
        primary: '#ffffff',
      },
    },
  }),
};


const BookList = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [themeName, setThemeName] = useState('default');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (event) => {
    setThemeName(event.target.value);
  };




  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBooks = async (query) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
      const fetchedBooks = response.data.items || [];
      setBooks(fetchedBooks);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
    if (value.trim()) {
      fetchBooks(value);
    } else {
      setBooks([]);
    }
  };

  return (
    <div>
   
   <ThemeProvider theme={themes[themeName]}>
      <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', animation: 'gradient 5s ease infinite' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Services</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="/logo.png" alt="MyLogo" style={{ height: '40px', verticalAlign: 'middle' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 3 }}>
            <Link href="#home" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
              Home
            </Link>
            <Link href="#about" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
              About
            </Link>
            <Link href="#services" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
              Services
            </Link>
            <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
              Contact
            </Link>
          </Box>

      <Autocomplete
        value={searchTerm}
        onChange={handleSearchChange}
        freeSolo
        options={[]}
        renderInput={(params) => (
          <Box sx={{ width: 300 }}>
            <Stack spacing={2}>
      
              <input
                {...params.inputProps}
                type="text"
                className="search-input"
                placeholder="Enter book title or author name"
                style={{ padding: '10px', fontSize: '16px', width: '80%' }}
              />
            </Stack>
          </Box>
        )}
      />


<FormControl variant="outlined" size="small" sx={{ mr: 2 }}>
            <InputLabel>Theme</InputLabel>
            <Select
              value={themeName}
              onChange={handleThemeChange}
              label="Theme"
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
          <Link href="src\components\login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
               Sign In
            </Button>
            </Link>    
          
        </Toolbar>
        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            AppBar {
              background-size: 200% 200%;
            }
          `}
        </style>
      </AppBar>
    </ThemeProvider>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map(book => (
          <BookDetails key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
