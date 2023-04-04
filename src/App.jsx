// import "./App.css";
// import { Counter } from "./Counter";
// import {Routes, Route,useNavigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import { Logo } from "./Logo";
// import { Recipelist } from "./Recipelist";
// import { RecipeDetails } from "./RecipeDetails";
// import { Addrecipe } from "./Addrecipe";
// import { Search } from "./Search";
// import { Indian } from "./indian";
// import { Mexican } from "./Mexican";
// import { Italian } from "./Italian";
// import { German } from "./German";
// import { Greek } from "./Greek";
// import { Filipino } from "./Filipino";
// import { Chinese } from "./Chinese";
// import { Japanese } from "./Japanese";
// import { Turky } from "./Turky";
// import { Spanish } from "./Spanish";
// import { Chicken } from "./Chicken";
// import { Cheese } from "./Cheese";
// import { Vegitable } from "./Vegitable";
// import { Choco } from "./Choco";
// import { Beef } from "./Beef";
// import { Fish } from "./Fish";
// import { Mutton } from "./Mutton";
// import { Seafood } from "./Seafood";
// import { Pasta } from "./Pasta";
// import { Egg } from "./Egg";
// import { Lunch } from "./Lunch";
// import { Breakfast } from "./Breakfast";
// import { Dinner } from "./Dinner";
// import { Desserts } from "./Desserts";
// import { Drinks } from "./Drinks";
// import { Salads } from "./Salads";
// import { Briyani } from "./Briyani";
// import { Soup } from "./Soup";
// import { Snacks } from "./Snacks";
// import { Sidedish } from "./Sidedish";
// import { Quik } from "./Quik";
// import { Rated } from "./Rated";
// import { High } from "./High";
// import { Low } from "./Low";




// export default function App(){
//   const navigate=useNavigate()
//   return(
   
//     <div  >
    
//        <AppBar  color="secondary" position="static" >
//         <Toolbar>
      
//           <Button onClick={()=>navigate("/")} color="inherit"><Logo/></Button>
//           <Button sx={{marginLeft:"auto"}} onClick={()=>navigate("/signup")} color="inherit">Signup</Button>
//           <Button onClick={()=>navigate("/login")} color="inherit">Login</Button>
//           <Button onClick={()=>navigate("/addrecipe")} color="inherit">ADD</Button>      
//           {/* <Button onClick={()=>navigate("/search")} color="inherit">search</Button>   */}
//           <Button onClick={()=>navigate("/cuisines/indian")} color="inherit">Indian</Button> 
//           {/* <Button onClick={()=>navigate("/cuisines/turky")} color="inherit">Turky</Button>  */}
//           <Button onClick={()=>navigate("/ingredients/chicken")} color="inherit">Chicken</Button> 
//           <Button onClick={()=>navigate("/meals/lunch")} color="inherit">Lunch</Button> 
//           <Button onClick={()=>navigate("/rated/data")} color="inherit">rated</Button>
//           <Button onClick={()=>navigate("/highquantity/data")} color="inherit">high</Button>
//           <Button onClick={()=>navigate("/quick/data")} color="inherit">QUICK</Button>
          
          
//         </Toolbar>
//       </AppBar>
     
//     <Routes>
//     <Route  path="/"   element={<Recipelist />} />
//     <Route  path="/counter"   element={<Counter />} />
//     <Route  path="/recipedetails/:id"   element={<RecipeDetails />} />
//     <Route  path="/addrecipe"   element={<Addrecipe />} />
//     <Route  path="/search"   element={<Search />} />
//     <Route  path="/cuisines/indian"   element={<Indian />} />
//     <Route  path="/cuisines/mexican"   element={<Mexican />} />
//     <Route  path="/cuisines/italian"   element={<Italian />} />
//     <Route  path="/cuisines/german"   element={<German />} />
//     <Route  path="/cuisines/greek"   element={<Greek />} />
//     <Route  path="/cuisines/filipino"   element={<Filipino />} />
//     <Route  path="/cuisines/chinese"   element={<Chinese />} />
//     <Route  path="/cuisines/japanese"   element={<Japanese />} />
//     <Route  path="/cuisines/turky"   element={<Turky />} />
//     <Route  path="/cuisines/spanish"   element={<Spanish />} />
//     <Route  path="/ingredients/chicken"   element={<Chicken />} />
//     <Route  path="/ingredients/cheese"   element={<Cheese />} />
//     <Route  path="/ingredients/vegitable"   element={<Vegitable />} />
//     <Route  path="/ingredients/choco"   element={<Choco />} />
//     <Route  path="/ingredients/beef"   element={<Beef />} />
//     <Route  path="/ingredients/fish"   element={<Fish />} />
//     <Route  path="/ingredients/mutton"   element={<Mutton />} />
//     <Route  path="/ingredients/seafood"   element={<Seafood />} />
//     <Route  path="/ingredients/pasta"   element={<Pasta />} />
//     <Route  path="/ingredients/egg"   element={<Egg />} />
//     <Route  path="/meals/lunch"   element={<Lunch />} />
//     <Route  path="/meals/breakfast"   element={<Breakfast />} />
//     <Route  path="/meals/dinner"   element={<Dinner />} />
//     <Route  path="/meals/desserts"   element={<Desserts />} />
//     <Route  path="/meals/drinks"   element={<Drinks />} />
//     <Route  path="/meals/salads"   element={<Salads />} />
//     <Route  path="/meals/briyani"   element={<Briyani />} />
//     <Route  path="/meals/soup"   element={<Soup />} />
//     <Route  path="/meals/snacks"   element={<Snacks />} />
//     <Route  path="/meals/Sidedish"   element={<Sidedish />} />
//     <Route  path="/quick/data"   element={<Quik />} />
//     <Route  path="/rated/data"   element={<Rated />} />
//     <Route  path="/highquantity/data"   element={<High />} />
//     <Route  path="/lowquantity/data"   element={<Low />} />
   
  
 
// </Routes>

     
    
//     </div>
   
//   );
// }




// import "./App.css";
// import { Counter } from "./Counter";
// import {Routes, Route,useNavigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import { Logo } from "./Logo";
// import { Recipelist } from "./Recipelist";
// import { RecipeDetails } from "./RecipeDetails";
// import { Addrecipe } from "./Addrecipe";
// import { Search } from "./Search";
// import { Indian } from "./indian";
// import { Mexican } from "./Mexican";
// import { Italian } from "./Italian";
// import { German } from "./German";
// import { Greek } from "./Greek";
// import { Filipino } from "./Filipino";
// import { Chinese } from "./Chinese";
// import { Japanese } from "./Japanese";
// import { Turky } from "./Turky";
// import { Spanish } from "./Spanish";
// import { Chicken } from "./Chicken";
// import { Cheese } from "./Cheese";
// import { Vegitable } from "./Vegitable";
// import { Choco } from "./Choco";
// import { Beef } from "./Beef";
// import { Fish } from "./Fish";
// import { Mutton } from "./Mutton";
// import { Seafood } from "./Seafood";
// import { Pasta } from "./Pasta";
// import { Egg } from "./Egg";
// import { Lunch } from "./Lunch";
// import { Breakfast } from "./Breakfast";
// import { Dinner } from "./Dinner";
// import { Desserts } from "./Desserts";
// import { Drinks } from "./Drinks";
// import { Salads } from "./Salads";
// import { Briyani } from "./Briyani";
// import { Soup } from "./Soup";
// import { Snacks } from "./Snacks";
// import { Sidedish } from "./Sidedish";
// import { Quik } from "./Quik";
// import { Rated } from "./Rated";
// import { High } from "./High";
// import { Low } from "./Low";
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';

// import List from '@mui/material/List';

// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Typography } from "@mui/material";

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBars = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));


// export default function App(){
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const navigate=useNavigate()
//   return(
   
//     <div  >
   
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//       <Button onClick={()=>navigate("/")} color="inherit"><Logo/></Button>
//      <Button sx={{marginLeft:"auto"}} onClick={()=>navigate("/signup")} color="inherit">Signup</Button>
//      <Button onClick={()=>navigate("/login")} color="inherit">Login</Button>
//      <Button onClick={()=>navigate("/addrecipe")} color="inherit">ADD</Button>      
//      {/* <Button onClick={()=>navigate("/search")} color="inherit">search</Button>      */}
//        <Button onClick={()=>navigate("/cuisines/indian")} color="inherit">Indian</Button> 
//      {/* <Button onClick={()=>navigate("/cuisines/turky")} color="inherit">Turky</Button>  */}
//      <Button onClick={()=>navigate("/ingredients/chicken")} color="inherit">Chicken</Button> 
//      <Button onClick={()=>navigate("/meals/lunch")} color="inherit">Lunch</Button> 
//      <Button onClick={()=>navigate("/rated/data")} color="inherit">rated</Button>
//     <Button onClick={()=>navigate("/highquantity/data")} color="inherit">high</Button>
//      <Button onClick={()=>navigate("/quick/data")} color="inherit">QUICK</Button>
        
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
  
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography >
//      {/* <Recipelist/> */}
//      <Routes>
//  <Route  path="/"   element={<Recipelist />} />
//  <Route  path="/counter"   element={<Counter />} />
//  <Route  path="/recipedetails/:id"   element={<RecipeDetails />} />
//  <Route  path="/addrecipe"   element={<Addrecipe />} />
//  <Route  path="/search"   element={<Search />} />
//  <Route  path="/cuisines/indian"   element={<Indian />} />
//  <Route  path="/cuisines/mexican"   element={<Mexican />} />
//  <Route  path="/cuisines/italian"   element={<Italian />} />
//  <Route  path="/cuisines/german"   element={<German />} />
//  <Route  path="/cuisines/greek"   element={<Greek />} />
//  <Route  path="/cuisines/filipino"   element={<Filipino />} />
//  <Route  path="/cuisines/chinese"   element={<Chinese />} />
//  <Route  path="/cuisines/japanese"   element={<Japanese />} />
//  <Route  path="/cuisines/turky"   element={<Turky />} />
//  <Route  path="/cuisines/spanish"   element={<Spanish />} />
//  <Route  path="/ingredients/chicken"   element={<Chicken />} />
//  <Route  path="/ingredients/cheese"   element={<Cheese />} />
//  <Route  path="/ingredients/vegitable"   element={<Vegitable />} />
//  <Route  path="/ingredients/choco"   element={<Choco />} />
//  <Route  path="/ingredients/beef"   element={<Beef />} />
//  <Route  path="/ingredients/fish"   element={<Fish />} />
//  <Route  path="/ingredients/mutton"   element={<Mutton />} />
//  <Route  path="/ingredients/seafood"   element={<Seafood />} />
//  <Route  path="/ingredients/pasta"   element={<Pasta />} />
//  <Route  path="/ingredients/egg"   element={<Egg />} />
//  <Route  path="/meals/lunch"   element={<Lunch />} />
//  <Route  path="/meals/breakfast"   element={<Breakfast />} />
//  <Route  path="/meals/dinner"   element={<Dinner />} />
//  <Route  path="/meals/desserts"   element={<Desserts />} />
//  <Route  path="/meals/drinks"   element={<Drinks />} />
//  <Route  path="/meals/salads"   element={<Salads />} />
//  <Route  path="/meals/briyani"   element={<Briyani />} />
//  <Route  path="/meals/soup"   element={<Soup />} />
//  <Route  path="/meals/snacks"   element={<Snacks />} />
//  <Route  path="/meals/Sidedish"   element={<Sidedish />} />
//  <Route  path="/quick/data"   element={<Quik />} />
//  <Route  path="/rated/data"   element={<Rated />} />
//  <Route  path="/highquantity/data"   element={<High />} />
// <Route  path="/lowquantity/data"   element={<Low />} />



//  </Routes>
//         </Typography>
//       </Main>
      
//     </Box>
    
//     </div>
   
//   );
// }





import "./App.css";
import { Counter } from "./Counter";
import {Routes, Route,useNavigate, Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Logo } from "./Logo";
import { Recipelist } from "./Recipelist";
import { RecipeDetails } from "./RecipeDetails";
import { Addrecipe } from "./Addrecipe";
// import { Search } from "./Search";
import { Indian } from "./indian";
import { Mexican } from "./Mexican";
import { Italian } from "./Italian";
import { German } from "./German";
import { Greek } from "./Greek";
import { Filipino } from "./Filipino";
import { Chinese } from "./Chinese";
import { Japanese } from "./Japanese";
import { Turky } from "./Turky";
import { Spanish } from "./Spanish";
import { Chicken } from "./Chicken";
import { Cheese } from "./Cheese";
import { Vegitable } from "./Vegitable";
import { Choco } from "./Choco";
import { Beef } from "./Beef";
import { Fish } from "./Fish";
import { Mutton } from "./Mutton";
import { Seafood } from "./Seafood";
import { Pasta } from "./Pasta";
import { Egg } from "./Egg";
import { Lunch } from "./Lunch";
import { Breakfast } from "./Breakfast";
import { Dinner } from "./Dinner";
import { Desserts } from "./Desserts";
import { Drinks } from "./Drinks";
import { Salads } from "./Salads";
import { Briyani } from "./Briyani";
import { Soup } from "./Soup";
import { Snacks } from "./Snacks";
import { Sidedish } from "./Sidedish";
import { Quik } from "./Quik";
import { Rated } from "./Rated";
import { High } from "./High";
import { Low } from "./Low";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';

import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Typography } from "@mui/material";
import SynagogueIcon from '@mui/icons-material/Synagogue';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Cuisine } from "./Cuisine";
import { Ingredient } from "./Ingredient";
import { Meal } from "./Meal";
import { Quantity } from "./Quantity";
import { Notfound } from "./Notfound";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Forgot } from "./Forgot";
import { Reset } from "./Reset";
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBars = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function App(){
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate=useNavigate()
  return(
   
    <div  >
   
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
      <Button  onClick={()=>navigate("/")} color="inherit"><Logo/></Button>
     <Button sx={{marginLeft:"auto"}} onClick={()=>navigate("/signup")} color="inherit">Signup</Button>
     <Button onClick={()=>navigate("/login")} color="inherit">Login</Button>
     <Button onClick={()=>navigate("/addrecipe")} color="inherit">ADD</Button>      
     <Button onClick={()=>navigate("/about")} color="inherit">About Us</Button>  
     {/* <Button onClick={()=>navigate("/search")} color="inherit">search</Button>     
       <Button onClick={()=>navigate("/cuisines/indian")} color="inherit">Indian</Button> 
     <Button onClick={()=>navigate("/cuisines/turky")} color="inherit">Turky</Button> 
     <Button onClick={()=>navigate("/ingredients/chicken")} color="inherit">Chicken</Button> 
     <Button onClick={()=>navigate("/meals/lunch")} color="inherit">Lunch</Button> 
     <Button onClick={()=>navigate("/rated/data")} color="inherit">rated</Button>
    <Button onClick={()=>navigate("/highquantity/data")} color="inherit">high</Button>
     <Button onClick={()=>navigate("/quick/data")} color="inherit">QUICK</Button> */}
        
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem className="menuicon"  disablePadding  onClick={()=>navigate("/cuisine")}>
              <ListItemButton>
              <ListItemIcon>
                  <SynagogueIcon/> 
                </ListItemIcon>
                <ListItemText  primary="Cuisines" />
              </ListItemButton>
            </ListItem>
       
        <ListItem className="menuicon"  disablePadding onClick={()=>navigate("/ingredient")}>
              <ListItemButton>
                <ListItemIcon>
                  <BakeryDiningIcon /> 
                </ListItemIcon>
                <ListItemText primary="Ingredients" />
              </ListItemButton>
            </ListItem>

            <ListItem className="menuicon"  disablePadding onClick={()=>navigate("/meal")}>
              <ListItemButton>
                <ListItemIcon>
                  <LunchDiningIcon /> 
                </ListItemIcon>
                <ListItemText primary="meals" />
              </ListItemButton>
            </ListItem>

            <ListItem className="menuicon"  disablePadding onClick={()=>navigate("/quantity")}>
              <ListItemButton>
                <ListItemIcon>
                  <RestaurantMenuIcon /> 
                </ListItemIcon>
                <ListItemText primary="Quantity" />
              </ListItemButton>
            </ListItem>

            <ListItem className="menuicon"  disablePadding onClick={()=>navigate("/quick/data")}>
              <ListItemButton>
                <ListItemIcon>
                  <RamenDiningIcon /> 
                </ListItemIcon>
                <ListItemText primary="Instant Recipes" />
              </ListItemButton>
              
            </ListItem>

            <ListItem className="menuicon"  disablePadding onClick={()=>navigate("/rated/data")}>
              <ListItemButton>
                <ListItemIcon>
                  <FastfoodIcon /> 
                </ListItemIcon>
                <ListItemText primary="high rated Recipes" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography >
 
     <Routes>

 <Route  path="/allrecipe"   element={<ProductedRoute><Recipelist /></ProductedRoute>} />
 <Route  path="*"   element={<Notfound />} />
 <Route  path="/"   element={<Home />} />
 <Route  path="/signup"   element={<Signup />} />
 <Route  path="/login"   element={<Login />} />
 <Route  path="/forgot"   element={<Forgot />} />
 <Route  path="/reset"   element={<Reset />} />
 <Route  path="/counter"   element={<Counter />} />
 <Route  path="/recipedetails/:id"   element={<RecipeDetails />} />
 <Route  path="/addrecipe"   element={<Addrecipe />} />
 {/* <Route  path="/search"   element={<Search />} /> */}
 <Route  path="/cuisines/indian"   element={<Indian />} />
 <Route  path="/cuisines/mexican"   element={<Mexican />} />
 <Route  path="/cuisines/italian"   element={<Italian />} />
 <Route  path="/cuisines/german"   element={<German />} />
 <Route  path="/cuisines/greek"   element={<Greek />} />
 <Route  path="/cuisines/filipino"   element={<Filipino />} />
 <Route  path="/cuisines/chinese"   element={<Chinese />} />
 <Route  path="/cuisines/japanese"   element={<Japanese />} />
 <Route  path="/cuisines/turky"   element={<Turky />} />
 <Route  path="/cuisines/spanish"   element={<Spanish />} />
 <Route  path="/ingredients/chicken"   element={<Chicken />} />
 <Route  path="/ingredients/cheese"   element={<Cheese />} />
 <Route  path="/ingredients/vegitable"   element={<Vegitable />} />
 <Route  path="/ingredients/choco"   element={<Choco />} />
 <Route  path="/ingredients/beef"   element={<Beef />} />
 <Route  path="/ingredients/fish"   element={<Fish />} />
 <Route  path="/ingredients/mutton"   element={<Mutton />} />
 <Route  path="/ingredients/seafood"   element={<Seafood />} />
 <Route  path="/ingredients/pasta"   element={<Pasta />} />
 <Route  path="/ingredients/egg"   element={<Egg />} />
 <Route  path="/meals/lunch"   element={<Lunch />} />
 <Route  path="/meals/breakfast"   element={<Breakfast />} />
 <Route  path="/meals/dinner"   element={<Dinner />} />
 <Route  path="/meals/desserts"   element={<Desserts />} />
 <Route  path="/meals/drinks"   element={<Drinks />} />
 <Route  path="/meals/salads"   element={<Salads />} />
 <Route  path="/meals/briyani"   element={<Briyani />} />
 <Route  path="/meals/soup"   element={<Soup />} />
 <Route  path="/meals/snacks"   element={<Snacks />} />
 <Route  path="/meals/Sidedish"   element={<Sidedish />} />
 <Route  path="/quick/data"   element={<Quik />} />
 <Route  path="/rated/data"   element={<Rated />} />
 <Route  path="/highquantity/data"   element={<High />} />
<Route  path="/lowquantity/data"   element={<Low />} />
<Route  path="/cuisine"   element={<Cuisine />} />
<Route  path="/ingredient"   element={<Ingredient />} />
<Route  path="/meal"   element={<Meal />} />
<Route  path="/quantity"   element={<Quantity />} />
<Route  path="/about"   element={<About />} />
 </Routes>
        </Typography>
      </Main>
      
    </Box>
    
    </div>
   
  );
}


function ProductedRoute({children}){
  const token=localStorage.getItem("token");
  return token?(
    token?
    <div>{children}</div>:<h1 className="product">you are unauthorised entry❌</h1>
  ):(
    <Navigate raplace to="/signup"/>
  )
}

function Home(){
  return(
    <div>
      hello
    </div>
  )
}