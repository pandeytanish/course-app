import React, { useRef } from 'react';
import { Container, Box, Typography, Link, List, ListItem } from '@mui/material';

const blogProgress = () => {
  // Create references for each section
  const introRef = useRef(null);
  const techRef = useRef(null);
  const engageRef = useRef(null);
  const dataRef = useRef(null);
  const paymentRef = useRef(null);
  const trainingRef = useRef(null);

  // Function to scroll to the referenced element
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '24px' }}>
      {/* Table of Contents */}
      <Box sx={{ position: 'fixed', top: '100px', left: '10px', width: '200px' }}>
        <Typography variant="h6">Table of Content</Typography>
        <List>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection(introRef)}>Introduction</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection(techRef)}>Embrace Technology and Automation</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection(engageRef)}>Prioritize Customer Engagement</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection(dataRef)}>Implement Data-Driven Decision Making</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection(paymentRef)}>Offer Flexible Payment Options</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection(trainingRef)}>Invest in Training and Development</Link>
          </ListItem>
        </List>
      </Box>

      {/* Content Sections */}
      <Box sx={{ marginLeft: '220px', padding: '16px' }}>
        <Typography variant="h4" ref={introRef}>Introduction</Typography>
        <Typography variant="body1" paragraph>
          In the ever-evolving landscape of debt collection, staying ahead of the curve is essential for success...
        </Typography>

        <Typography variant="h4" ref={techRef}>Embrace Technology and Automation</Typography>
        <Typography variant="body1" paragraph>
          Embracing technology and automation can streamline your debt collection processes...
        </Typography>

        <Typography variant="h4" ref={engageRef}>Prioritize Customer Engagement</Typography>
        <Typography variant="body1" paragraph>
          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...
        </Typography>

        <Typography variant="h4" ref={dataRef}>Implement Data-Driven Decision Making</Typography>
        <Typography variant="body1" paragraph>
          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...
        </Typography>

        <Typography variant="h4" ref={paymentRef}>Offer Flexible Payment Options</Typography>
        <Typography variant="body1" paragraph>
          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...
        </Typography>

        <Typography variant="h4" ref={trainingRef}>Invest in Training and Development</Typography>
        <Typography variant="body1" paragraph>
          Investing in training and development empowers your team with the skills necessary for effective debt collection...
        </Typography>
      </Box>
    </Container>
  );
};

export default blogProgress;
