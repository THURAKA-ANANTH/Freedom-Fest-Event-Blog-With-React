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
    title: 'Responsive Web Page Development',
    description: 'Introduces Students to the fundamentals of web development.\n Discover HTML for structuring content, CSS for styling, and JavaScript for interactivity.',
    image: 'images/web.jpeg',
  },
  {
    title:'Python Basics',
    description:' An introduction to Python, a popular programming language.\n Cover fundamental concepts like variables, data types, and basic syntax.\n Engage in practical exercises to write and run Python code.',
    image:'images/Python.png'
  },
  {
    title:'Wordpess',
    description:"Dive into WordPress, the world's leading content management system (CMS) for building websites.\n Learn to create, customize, and manage websites using WordPress themes, plugins, and content.\n Develop hands-on expertise in website creation and maintenance, empowering you to craft professional web solutions.",
    image:'images/wordpress.jpg'
  },
  {
    title:'Penpot',
    description:"Explore Penpot, an open-source design and prototyping platform for graphic and UX/UI designers.\n Discover how to create and collaborate on design projects, from wireframes to interactive prototypes.\n  Engage in practical exercises to unleash your design skills and effectively use Penpot for innovative design solutions.",
    image:'images/penpot.jpg'
  },
  {
    title:'Blender',
    description:"Create 3D models of anything from simple objects to complex characters and environments.\nAnimate 3D models to create character animations, motion graphics, and special effects.\nRender 3D models and animations to realistic or stylized images and videos.",
    image:'images/blender.jpg'
  },
  {
    title:'Inkscape',
    description:"Create 3D models of anything from simple objects to complex characters and environments.\nAnimate 3D models to create character animations, motion graphics, and special effects.\nRender 3D models and animations to realistic or stylized images and videos.",
    image:'images/inkscape.png'
  },
  {
    title: 'Arduino',
    description: 'Participants get familiar with Arduino, an open-source electronics platform.\n  Utilize platforms like Tinkercad or Wokwi for a hands-on, virtual Arduino experience.\n Get an overview where we use the arduino boards.',
    image: 'images/Arduino.png',
  },
  {
    title:'Open CV',
    description:"Delve into OpenCV, an open-source library for computer vision and image processing.\n  Explore essential techniques such as image manipulation, object detection, and feature extraction. \n Apply OpenCV to real-world projects, enabling you to harness the power of computer vision for various applications in this hands-on workshop.",
    image:'images/Opencv.png',
  },
  {
    title:'Fritzing',
    description:' Learn to create and visualize circuits, including components, wiring, and connections.\n Apply Fritzing to build and simulate electronic prototypes, making it an essential tool for electronics enthusiasts and beginners.',
    image:"images/friting.jpg",

  },
  {
    title:'Linux Adminstration',
    description:'Explore the fundamentals of Linux, an open-source operating system.\n Learn essential commands for navigating, managing files, and system administration.\n Gain practical experience by using a Linux environment, empowering you to navigate and utilize this powerful OS effectively.',
    image:'images/linux.png',
  },
  {
  title:'Git Version Control',
  description:'Delve into the foundational concepts of Git, a distributed version control system.\n Understand how Git facilitates teamwork and version tracking in software projects.\n Learn to create repositories, commit changes, and collaborate efficiently through practical exercises, enhancing your Git proficiency.',
  image:'images/git.png',
  },
  {
    title:'Tech For Rural India',
    description:'Engineers turn ideas into reality, pushing limits.\n They bridge the digital gap, providing access to technology for all.\nTechnology shapes society, engineers craft solutions for progress.',
    image:'images/techforruralindia.jpeg',
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
      marginTop={5}
      py={2}
      sx={{
        background: "#c31432",
        background: "-webkit-linear-gradient(to right, #240b36, #c31432)",
        background: "linear-gradient(to right, #240b36, #c31432)",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: "white", fontSize: "35px", marginBottom: 5, textAlign: 'center' }}>
        WorkShops
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
              <Typography variant="body2" color="text.secondary" sx={{ padding: '16px' }}>
                <ul>
                  {card.description.split('\n').map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', transition: 'all 0.3s' }}>
              <Button size="small" sx={{ padding: 1, transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FFA500' } }} onClick={redirectToRazorpay}>
                Register Here
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
