import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const cardData = [
  {
    title: 'Creative Drawing',
    description: '',
    image: 'images/Creative Drawing.png',
  },
  {
    title: 'Creative Writing',
    description: '',
    image: 'images/Creative Writing.avif',
  },
  {
    title:'Just A Minute',
    description: '',
    image:'images/JAM.jpg'
  },
  {
    title:'Mock Parliment',
    description: '',
    image:'images/Mock Parliment.png',
  },


  
  
  
  
  
  
];

export default function MediaCard() {
  const redirectToRazorpay = () => {
    // Redirect to the Razorpay URL when the button is clicked
    window.location.href = 'https://pages.razorpay.com/freedomfestnecg#view-1';
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      
      py={2}
      sx={{
        background: "#c31432",
        background: "-webkit-linear-gradient(to right, #240b36, #c31432)",
        background: "linear-gradient(to right, #240b36, #c31432)",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: "white", fontSize: "35px", marginBottom: 5, textAlign: 'center' }}>
        Literary Events
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="space-around" width="100%">
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, marginBottom: 5, flexBasis: 'calc(100% - 16px)' }}>
            <CardMedia
              sx={{ height: 180, display: 'flex', justifyContent: 'center' }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center',  fontWeight:600}}>
                {card.title}
              </Typography>
              {/* 
              <Typography variant="body2" color="text.secondary" sx={{ padding: '0px' }}>
                <ul>
                  {card.description.split('\n').map((item, index) => (
                    <li key={index} style={{ margin:0 }}>{item}</li>
                  ))}
                </ul>
              </Typography>
                  */}
            </CardContent>
            
          </Card>
        ))}
      </Box>
    </Box>
  );
}
