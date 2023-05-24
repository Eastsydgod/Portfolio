// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Skill", "Projects", "Contact"];

// function Ham({ toggleDarkMode, isDarkMode, window }) {
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };
//   const color = { color: isDarkMode ? "#fff" : "#000" };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Divider />
//       <List
//         style={{ background: "#10101a", height: "100vh", overflow: "hidden" }}
//       >
//         {navItems.map((item) => (
//           <a
//             href={`#${item}`}
//             key={item}
//             style={{ textDecoration: "none", color: "#fff" }}
//           >
//             <ListItem disablePadding>
//               <ListItemButton sx={{ textAlign: "center" }}>
//                 <ListItemText primary={item} />
//               </ListItemButton>
//             </ListItem>
//           </a>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         style={{
//           background: "transparent",
//           boxShadow: "none",
//         }}
//       >
//         <Toolbar className="hamNav">
//           <h4 style={color}>jemie.Dev</h4>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ marginTop: "10px", marginRight: "7px" }}>
//               <div onClick={toggleDarkMode} className="toggle">
//                 {isDarkMode ? (
//                   <LightModeIcon className="icon" style={color} />
//                 ) : (
//                   <DarkModeIcon className="icon" style={color} />
//                 )}
//               </div>
//             </div>

//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" }, color: color }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>

//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

// Ham.propTypes = {
//   window: PropTypes.func,
// };

// export default Ham;

// // import * as React from "react";
// // import Box from "@mui/material/Box";
// // import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// // import Button from "@mui/material/Button";
// // import List from "@mui/material/List";

// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";
// // import InboxIcon from "@mui/icons-material/MoveToInbox";
// // import MailIcon from "@mui/icons-material/Mail";

// // export default function Ham() {
// //   const [state, setState] = React.useState({ left: false });

// //   const toggleDrawer = (anchor, open) => (event) => {
// //     if (
// //       event &&
// //       event.type === "keydown" &&
// //       (event.key === "Tab" || event.key === "Shift")
// //     ) {
// //       return;
// //     }

// //     setState({ ...state, [anchor]: open });
// //   };

// //   const list = (anchor) => (
// //     <Box
// //       sx={{ width: 250 }}
// //       role="presentation"
// //       onClick={toggleDrawer(anchor, false)}
// //       onKeyDown={toggleDrawer(anchor, false)}
// //     >
// //       <List
// //         style={{
// //           textAlign: "center",
// //           background: "#10101a",
// //           height: "100vh",
// //           color: "#fff",
// //         }}
// //       >
// //         {["Home", "About", "Skill", "Projects", "Contact"].map(
// //           (text, index) => (
// //             <ListItem key={text} disablePadding>
// //               <ListItemButton>
// //                 <ListItemText primary={text} />
// //               </ListItemButton>
// //             </ListItem>
// //           )
// //         )}
// //       </List>
// //     </Box>
// //   );

// //   return (
// //     <div>
// //       {["1"].map((anchor) => (
// //         <React.Fragment>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               padding: "0px 20px",
// //             }}
// //           >
// //             <h4 className="logo">jemie.Dev</h4>
// //             <Button
// //               onClick={toggleDrawer(anchor, true)}
// //               style={{ background: "#FA7D00", borderRadius: "50%" }}
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 viewBox="0 0 48 48"
// //                 width="20px"
// //                 height="20px"
// //               >
// //                 <path
// //                   fill="none"
// //                   stroke="#000"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-miterlimit="10"
// //                   stroke-width="3"
// //                   d="M36.1,7.5h2.4c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2H18"
// //                 />
// //                 <path
// //                   fill="none"
// //                   stroke="#000"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-miterlimit="10"
// //                   stroke-width="3"
// //                   d="M13,14.5H9.5c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h21.3"
// //                 />
// //                 <path
// //                   fill="none"
// //                   stroke="#000"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-miterlimit="10"
// //                   stroke-width="3"
// //                   d="M13.3,27.5H9.5c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h20"
// //                 />
// //                 <path
// //                   fill="none"
// //                   stroke="#000"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-miterlimit="10"
// //                   stroke-width="3"
// //                   d="M35,20.5h3.5c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2h-20"
// //                 />
// //                 <path
// //                   fill="none"
// //                   stroke="#000"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-miterlimit="10"
// //                   stroke-width="3"
// //                   d="M13.5,40.5h-4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h19.6"
// //                 />
// //                 <path
// //                   fill="none"
// //                   stroke="#000"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-miterlimit="10"
// //                   stroke-width="3"
// //                   d="M34.2,33.5h4.3c1.1,0,2,0.9,2,2v3c0,1.1-0.9,2-2,2h-20"
// //                 />
// //               </svg>
// //             </Button>
// //           </div>
// //           <SwipeableDrawer
// //             anchor={anchor}
// //             open={state[anchor]}
// //             onClose={toggleDrawer(anchor, false)}
// //             onOpen={toggleDrawer(anchor, true)}
// //           >
// //             {list(anchor)}
// //           </SwipeableDrawer>
// //         </React.Fragment>
// //       ))}
// //     </div>
// //   );
// // }
