import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';
import { Link } from "react-router-dom";

// Images of the event cover pictures
import projectWeek from "../components/Images/projectsWeek.jpg";
import innovationExperience from "../components/Images/innovationExperience.jpg";

const events = [
  {
    id: 5,
    title: "Enactus UNSW Innovation Experience",
    description: "We hosted an interactive workshop for high school students, challenging them to design and prototype prosthetic arms using everyday materials in the Milk Bottle Challenge. Working in teams, participants competed to create functional designs tested for strength, creativity, and real-world feasibility, mirroring the core values behind Prockets. The day also featured a lively panel with current UNSW students, offering valuable insights and an open Q&A for aspiring innovators.",
    link: "",
    image: innovationExperience,
  },
  {
    id: 2,
    title: "Project Week & Showcase 2025",
    description: "We hosted an interactive stall inviting the UNSW community to share their knowledge about the limb-different community, fostering greater awareness and increasing visibility for our project.",
    link: "https://fb.me/e/aZwJn0xIK",
    image: projectWeek,
  },
];

export default function PastEventCards() {
  return (
    <Box
      sx={{
        maxWidth: '1220px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5,
      }}
    >
      {events.map((card) => (
        <Link key={card.id} to={card.link} target="_blank" rel="noopener noreferrer">
          <Card
            sx={{
              width: {
                xs: '70vw',
                sm: '80vw',
                md: 450,
              },
              borderRadius: 5,
              boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.12)",
              position: "relative",
              overflow: "hidden",
              transition: "0.4s cubic-bezier(0.5, 1.6, 0.4, 0.8)",
              "&:hover": {
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                transform: "scale(1.06)",
              },
              "&:hover .descriptionBox": {
              opacity: 1,
              transform: "translateY(0%)",
            },
            }}
          >
            <CardActionArea sx={{ height: '100%' }}>
              <CardContent 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center', 
                  gap: 2,
                  padding: 0
                }}
              >
                <h3 className="font-semibold py-2">{card.title}</h3>
              </CardContent>
              <CardMedia 
                component="img"
                alt={card.title}
                image={card.image}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </CardActionArea>
            {/* Title overlay */}
            <Box
                className="descriptionBox"
                sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "white",
                padding: "30px",
                opacity: 0,
                transform: "translateY(100%)",
                transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
                }}
            >
              <p className="text-sm">{card.description}</p>
            </Box>
          </Card>
        </Link>
      ))}
    </Box>
  );
}
