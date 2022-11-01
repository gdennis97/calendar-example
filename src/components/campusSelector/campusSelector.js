
// import PropTypes from 'prop-types';
// import styles from './campusSelector.module.css';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React, { useState } from 'react';

// const CampusSelector = () => {
//     const style = {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: 400,
//       bgcolor: 'background.paper',
//       border: '2px solid #000',
//       boxShadow: 24,
//       p: 4,
//     };
    
//       const [open, setOpen] = useState(false);
//       const handleOpen = () => setOpen(true);
//       const handleClose = () => setOpen(false);
      
//     return(
//       <div>
//         <Button onClick={handleOpen}>Open modal</Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography> */}
            
//             {/* //<Link to= '/'><button>Click to go home</button></Link> */}
//             <button onClick={<Login/>}>Login</button>
//             <button onClick={<Login/>}>Login</button>
//             <button onClick={<Login/>}>Login</button>
//           </Box>
//         </Modal>
//           <Router>
//             <Routes>
//               <Route path='/' element={<Home/>}></Route>
//               <Route path='/Login' element={<Login/>}></Route>
//               <Route path='/Register' element={<Register/>}></Route>
//             </Routes>
//           </Router>
//       </div>
//     )
//   };

// CampusSelector.propTypes = {};

// CampusSelector.defaultProps = {};

// export default CampusSelector;
