import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon

const ButtonSection = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        '@media (min-width: 600px)': {
          flexDirection: 'row',
          marginTop: '160px',
          gap: '100px',
        },
        '@media (max-width: 600px)': {
          gap: '10px',
        },
      }}
    >
      <Link to="workshops" spy={true} smooth={true} offset={-50} duration={500}>
        <Button
          variant="contained"
          sx={{
            width: ['150px', '250px'],
            height: '50px',
            fontWeight: 'bold',
            bgcolor: 'silver',
            color: 'black',
            fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          Workshops
        </Button>
      </Link>
      <Link to="tech" spy={true} smooth={true} offset={-70} duration={500}>
        <Button
          variant="contained"
          sx={{
            width: ['150px', '250px'],
            height: '50px',
            fontWeight: 'bold',
            bgcolor: 'silver',
            color: 'black',
            fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          Technical Events
        </Button>
      </Link>
      <Link to="non-tech" spy={true} smooth={true} offset={-70} duration={500}>
        <Button
          variant="contained"
          sx={{
            width: ['150px', '250px'],
            height: '50px',
            fontWeight: 'bold',
            bgcolor: 'silver',
            color: 'black',
            fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          Literary Events
        </Button>
      </Link>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          width: ['150px', '250px'],
          height: '50px',
          fontWeight: 'bold',
          bgcolor: 'silver',
          color: 'black',
          fontFamily: '"Gill Sans", sans-serif',
        }}
      >
        Schedule
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Coming Soon
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '8px',
              right: '8px',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          The schedule will be available soon. Please check back later.
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ButtonSection;
