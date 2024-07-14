// // import React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Box from '@mui/material/Box';
// // import Link from '@mui/material/Link';

// // const Header = () => {
// //   return (
// //     <AppBar position="static">
// //       <Toolbar>
// //         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
// //           <MenuIcon />
// //         </IconButton>
// //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //           MyLogo
// //         </Typography>
// //         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
// //           <Link href="#home" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             Home
// //           </Link>
// //           <Link href="#about" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             About
// //           </Link>
// //           <Link href="#services" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             Services
// //           </Link>
// //           <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             Contact
// //           </Link>
// //         </Box>
// //         <Button color="inherit">Get Started</Button>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;


// // import React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import SearchIcon from '@mui/icons-material/Search';
// // import Link from '@mui/material/Link';

// // const Header = () => {
// //   return (
// //     <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }}>
// //       <Toolbar>
// //         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
// //           <MenuIcon />
// //         </IconButton>
// //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //           MyCreativeLogo
// //         </Typography>
// //         <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, ml: 3 }}>
// //           <Link href="#home" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             Home
// //           </Link>
// //           <Link href="#about" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             About
// //           </Link>
// //           <Link href="#services" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             Services
// //           </Link>
// //           <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2 }}>
// //             Contact
// //           </Link>
// //         </Box>
// //         <TextField
// //           variant="outlined"
// //           size="small"
// //           placeholder="Search…"
// //           sx={{ mr: 2, background: '#ffffff', borderRadius: 1 }}
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <SearchIcon />
// //               </InputAdornment>
// //             ),
// //           }}
// //         />
// //         <Button variant="contained" color="secondary">
// //           Get Started
// //         </Button>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;


// // import React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import SearchIcon from '@mui/icons-material/Search';
// // import Link from '@mui/material/Link';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import { useState } from 'react';

// // const Header = () => {
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   const handleMenuClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', animation: 'gradient 5s ease infinite' }}>
// //       <Toolbar>
// //         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
// //           <MenuIcon />
// //         </IconButton>
// //         <Menu
// //           anchorEl={anchorEl}
// //           open={Boolean(anchorEl)}
// //           onClose={handleMenuClose}
// //         >
// //           <MenuItem onClick={handleMenuClose}>Home</MenuItem>
// //           <MenuItem onClick={handleMenuClose}>About</MenuItem>
// //           <MenuItem onClick={handleMenuClose}>Services</MenuItem>
// //           <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
// //         </Menu>
// //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //           <img src="/logo.png" alt="MyLogo" style={{ height: '40px', verticalAlign: 'middle' }} />
// //         </Typography>
// //         <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 3 }}>
// //           <Link href="#home" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //             Home
// //           </Link>
// //           <Link href="#about" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //             About
// //           </Link>
// //           <Link href="#services" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //             Services
// //           </Link>
// //           <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //             Contact
// //           </Link>
// //         </Box>
// //         <TextField
// //           variant="outlined"
// //           size="small"
// //           placeholder="Search…"
// //           sx={{ mr: 2, background: '#ffffff', borderRadius: 1 }}
// //           InputProps={{
// //             startAdornment: (
// //               <InputAdornment position="start">
// //                 <SearchIcon />
// //               </InputAdornment>
// //             ),
// //           }}
// //         />
// //         <Button variant="contained" color="secondary" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
// //           Get Started
// //         </Button>
// //       </Toolbar>
// //       <style>
// //         {`
// //           @keyframes gradient {
// //             0% { background-position: 0% 50%; }
// //             50% { background-position: 100% 50%; }
// //             100% { background-position: 0% 50%; }
// //           }
// //           AppBar {
// //             background-size: 200% 200%;
// //           }
// //         `}
// //       </style>
// //     </AppBar>
// //   );
// // };

// // export default Header;


// // import React, { useState } from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import SearchIcon from '@mui/icons-material/Search';
// // import Link from '@mui/material/Link';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import Avatar from '@mui/material/Avatar';
// // import Switch from '@mui/material/Switch';
// // import Stack from '@mui/material/Stack';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import FacebookIcon from '@mui/icons-material/Facebook';
// // import TwitterIcon from '@mui/icons-material/Twitter';
// // import InstagramIcon from '@mui/icons-material/Instagram';

// // const Header = () => {
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [profileEl, setProfileEl] = useState(null);

// //   const handleMenuClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const handleProfileClick = (event) => {
// //     setProfileEl(event.currentTarget);
// //   };

// //   const handleProfileClose = () => {
// //     setProfileEl(null);
// //   };

// //   const handleDarkModeToggle = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const theme = createTheme({
// //     palette: {
// //       mode: darkMode ? 'dark' : 'light',
// //     },
// //   });

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', animation: 'gradient 5s ease infinite' }}>
// //         <Toolbar>
// //           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
// //             <MenuIcon />
// //           </IconButton>
// //           <Menu
// //             anchorEl={anchorEl}
// //             open={Boolean(anchorEl)}
// //             onClose={handleMenuClose}
// //           >
// //             <MenuItem onClick={handleMenuClose}>Home</MenuItem>
// //             <MenuItem onClick={handleMenuClose}>About</MenuItem>
// //             <MenuItem onClick={handleMenuClose}>Services</MenuItem>
// //             <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
// //           </Menu>
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             <img src="/logo.png" alt="MyLogo" style={{ height: '40px', verticalAlign: 'middle' }} />
// //           </Typography>
// //           <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 3 }}>
// //             <Link href="#home" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //               Home
// //             </Link>
// //             <Link href="#about" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //               About
// //             </Link>
// //             <Link href="#services" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //               Services
// //             </Link>
// //             <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
// //               Contact
// //             </Link>
// //           </Box>
// //           <TextField
// //             variant="outlined"
// //             size="small"
// //             placeholder="Search…"
// //             sx={{ mr: 2, background: '#ffffff', borderRadius: 1, width: '300px' }}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <SearchIcon />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />
// //           <Stack direction="row" spacing={2} sx={{ mr: 2 }}>
// //             <IconButton color="inherit">
// //               <FacebookIcon />
// //             </IconButton>
// //             <IconButton color="inherit">
// //               <TwitterIcon />
// //             </IconButton>
// //             <IconButton color="inherit">
// //               <InstagramIcon />
// //             </IconButton>
// //           </Stack>
// //           <IconButton edge="end" color="inherit" onClick={handleProfileClick}>
// //             <Avatar alt="Profile Picture" src="/profile.jpg" />
// //           </IconButton>
// //           <Menu
// //             anchorEl={profileEl}
// //             open={Boolean(profileEl)}
// //             onClose={handleProfileClose}
// //           >
// //             <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
// //             <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
// //             <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
// //           </Menu>
// //           <Switch checked={darkMode} onChange={handleDarkModeToggle} color="default" />
// //           <Button variant="contained" color="secondary" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
// //             Get Started
// //           </Button>
// //         </Toolbar>
// //         <style>
// //           {`
// //             @keyframes gradient {
// //               0% { background-position: 0% 50%; }
// //               50% { background-position: 100% 50%; }
// //               100% { background-position: 0% 50%; }
// //             }
// //             AppBar {
// //               background-size: 200% 200%;
// //             }
// //           `}
// //         </style>
// //       </AppBar>
// //     </ThemeProvider>
// //   );
// // };

// // export default Header;


// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import Link from '@mui/material/Link';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Select from '@mui/material/Select';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';

// const themes = {
//   default: createTheme({
//     palette: {
//       primary: {
//         main: '#3f51b5',
//       },
//       secondary: {
//         main: '#f50057',
//       },
//     },
//   }),
//   light: createTheme({
//     palette: {
//       primary: {
//         main: '#90caf9',
//       },
//       secondary: {
//         main: '#f48fb1',
//       },
//       background: {
//         default: '#f5f5f5',
//         paper: '#ffffff',
//       },
//       text: {
//         primary: '#000000',
//       },
//     },
//   }),
//   dark: createTheme({
//     palette: {
//       primary: {
//         main: '#212121',
//       },
//       secondary: {
//         main: '#ff4081',
//       },
//       background: {
//         default: '#303030',
//         paper: '#424242',
//       },
//       text: {
//         primary: '#ffffff',
//       },
//     },
//   }),
// };

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [themeName, setThemeName] = useState('default');

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleThemeChange = (event) => {
//     setThemeName(event.target.value);
//   };

//   return (
//     <ThemeProvider theme={themes[themeName]}>
//       <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', animation: 'gradient 5s ease infinite' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Home</MenuItem>
//             <MenuItem onClick={handleMenuClose}>About</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Services</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
//           </Menu>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <img src="/logo.png" alt="MyLogo" style={{ height: '40px', verticalAlign: 'middle' }} />
//           </Typography>
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 3 }}>
//             <Link href="#home" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
//               Home
//             </Link>
//             <Link href="#about" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
//               About
//             </Link>
//             <Link href="#services" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
//               Services
//             </Link>
//             <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
//               Contact
//             </Link>
//           </Box>
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search…"
//             sx={{ mr: 2, background: '#ffffff', borderRadius: 1, width: '300px' }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <FormControl variant="outlined" size="small" sx={{ mr: 2 }}>
//             <InputLabel>Theme</InputLabel>
//             <Select
//               value={themeName}
//               onChange={handleThemeChange}
//               label="Theme"
//             >
//               <MenuItem value="default">Default</MenuItem>
//               <MenuItem value="light">Light</MenuItem>
//               <MenuItem value="dark">Dark</MenuItem>
//             </Select>
//           </FormControl>
//           <Button variant="contained" color="secondary" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
//             Get Started
//           </Button>
//         </Toolbar>
//         <style>
//           {`
//             @keyframes gradient {
//               0% { background-position: 0% 50%; }
//               50% { background-position: 100% 50%; }
//               100% { background-position: 0% 50%; }
//             }
//             AppBar {
//               background-size: 200% 200%;
//             }
//           `}
//         </style>
//       </AppBar>
//     </ThemeProvider>
//   );
// };

// export default Header;
