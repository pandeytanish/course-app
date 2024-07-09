import React, { Component, SyntheticEvent } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const mockData = {
  debtSizes: ['Under $10,000', '$10,000 - $50,000', '$50,000 - $100,000', 'Over $100,000'],
  debtCategories: ['Credit Card Debt', 'Medical Debt', 'Auto Loans', 'Personal Loans', 'Business Loans'],
  debtAgeRanges: ['Under 30 days', '30-60 days', '60-90 days', 'Over 90 days'],
  debtOwnerTypes: ['Individual', 'Bank', 'Agency'],
};

interface State {
  filters: {
    debtSize: string[];
    debtCategory: string[];
    debtAgeRange: string[];
    debtOwnerType: string[];
  };
  expanded: {
    debtSize: boolean;
    debtCategory: boolean;
    debtAgeRange: boolean;
    debtOwnerType: boolean;
  };
}

class BuyerFilter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      filters: {
        debtSize: ['Under $10,000'],
        debtCategory: ['Credit Card Debt'],
        debtAgeRange: ['Under 30 days'],
        debtOwnerType: ['Individual'],
      },
      expanded: {
        debtSize: true,
        debtCategory: true,
        debtAgeRange: true,
        debtOwnerType: true,
      },
    };
  }

  handleAccordionChange = (panel: keyof State['expanded']) => (event: SyntheticEvent, isExpanded: boolean) => {
    this.setState((prevState) => ({
      expanded: {
        ...prevState.expanded,
        [panel]: isExpanded,
      },
    }));
  };

  render() {
    const { expanded } = this.state;

    return (
      <Box sx={{ padding: 2, width: 300 }}>
        <Accordion sx={{ border: 'none', boxShadow: 'none' }} expanded={expanded.debtSize} onChange={this.handleAccordionChange('debtSize')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Debt Size</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {mockData.debtSizes.map((size) => (
                <FormControlLabel
                  key={size}
                  control={<Checkbox />}
                  label={size}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: 'none', boxShadow: 'none' }} expanded={expanded.debtCategory} onChange={this.handleAccordionChange('debtCategory')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Debt Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {mockData.debtCategories.map((category) => (
                <FormControlLabel
                  key={category}
                  control={<Checkbox />}
                  label={category}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: 'none', boxShadow: 'none' }} expanded={expanded.debtAgeRange} onChange={this.handleAccordionChange('debtAgeRange')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Debt Age Range</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {mockData.debtAgeRanges.map((range) => (
                <FormControlLabel
                  key={range}
                  control={<Checkbox />}
                  label={range}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: 'none', boxShadow: 'none' }} expanded={expanded.debtOwnerType} onChange={this.handleAccordionChange('debtOwnerType')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Debt Owner Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {mockData.debtOwnerTypes.map((type) => (
                <FormControlLabel
                  key={type}
                  control={<Checkbox />}
                  label={type}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
          Apply
        </Button>
      </Box>
    );
  }
}

export default BuyerFilter;
