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
    title: 'Paper Presentation',
    description: 'Introduces Students to the fundamentals of web development.\n Discover HTML for structuring content, CSS for styling, and JavaScript for interactivity.',
    image: 'https://nebulus.aitm.edu.in/wp-content/uploads/2016/03/Paper-Presentation.jpg',
  },
  {
    title: 'Arduino',
    description: 'Participants get familiar with Arduino, an open-source electronics platform.\n  Utilize platforms like Tinkercad or Wokwi for a hands-on, virtual Arduino experience.\n Get an overview where we use the arduino boards.',
    image: 'https://i0.wp.com/www.programmingelectronics.com/wp-content/uploads/2022/04/Organize-Code-Thumbnail_V4.png',
  },
  {
    title:'Python Basics',
    description:' An introduction to Python, a popular programming language.\n Cover fundamental concepts like variables, data types, and basic syntax.\n Engage in practical exercises to write and run Python code.',
    image:'https://miro.medium.com/v2/resize:fit:1200/1*m0H6-tUbW6grMlezlb52yw.png'
  },
  {
    title:'Linux Adminstration',
    description:'Explore the fundamentals of Linux, an open-source operating system.\n Learn essential commands for navigating, managing files, and system administration.\n Gain practical experience by using a Linux environment, empowering you to navigate and utilize this powerful OS effectively.',
    image:'https://qph.cf2.quoracdn.net/main-qimg-83c0df2ab5dd3890f6795c9442ab7942',
  },
  {
  title:'Git Version Control',
  description:'Delve into the foundational concepts of Git, a distributed version control system.\n Understand how Git facilitates teamwork and version tracking in software projects.\n Learn to create repositories, commit changes, and collaborate efficiently through practical exercises, enhancing your Git proficiency.',
  image:'https://git-scm.com/images/logos/1color-orange-lightbg@2x.png',
  },
  {
    title:'Open CV',
    description:"Delve into OpenCV, an open-source library for computer vision and image processing.\n  Explore essential techniques such as image manipulation, object detection, and feature extraction. \n Apply OpenCV to real-world projects, enabling you to harness the power of computer vision for various applications in this hands-on workshop.",
    image:'https://editor.analyticsvidhya.com/uploads/95103cv.png',
  },
  {
    title:'Fritzing',
    description:' Learn to create and visualize circuits, including components, wiring, and connections.\n Apply Fritzing to build and simulate electronic prototypes, making it an essential tool for electronics enthusiasts and beginners.',
    image:"https://cdn.hackaday.io/images/resize/600x600/7921431505306260287.jpg",

  },
  {
    title:'Penpot',
    description:"Explore Penpot, an open-source design and prototyping platform for graphic and UX/UI designers.\n Discover how to create and collaborate on design projects, from wireframes to interactive prototypes.\n  Engage in practical exercises to unleash your design skills and effectively use Penpot for innovative design solutions.",
    image:'data:image/png;base64,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'
  },
  {
    title:'Wordpess',
    description:"Dive into WordPress, the world's leading content management system (CMS) for building websites.\n Learn to create, customize, and manage websites using WordPress themes, plugins, and content.\n Develop hands-on expertise in website creation and maintenance, empowering you to craft professional web solutions.",
    image:'https://www.hostinglotus.com/blog/wp-content/uploads/2019/02/2019-02-04_233346.jpg'
  }
  
  
  
];

export default function MediaCard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      
      
      sx={{
        background: "#c31432",  
        background: "-webkit-linear-gradient(to right, #240b36, #c31432)",  
        background: "linear-gradient(to right, #240b36, #c31432)",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
        WorkShops
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="space-around" width="100%">
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, flexBasis: 'calc(100% - 16px)' }}>
            <CardMedia
              sx={{  height: 150, display: 'flex', justifyContent: 'center' }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4"  component="div">
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
                <Button size="small" sx={{ padding:1, transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#FFA500' } }}>
                    Register Here
              </Button>
            </CardActions>

          </Card>
        ))}
      </Box>
    </Box>
  );
}
