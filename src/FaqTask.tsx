import { Component } from 'react';
import { styled } from '@mui/material/styles';
import ExpansionPanel from '@mui/material/Accordion';
import ExpansionPanelSummary from '@mui/material/AccordionSummary';
import ExpansionPanelDetails from '@mui/material/AccordionDetails';
import {Typography,Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Root = styled('div')(({ theme }) => ({
    backgroundColor:'#F8FAFC',
  width: '60%',
  marginTop: theme.spacing(6),
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',

}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular,
}));

const BlueTypography = styled(Typography)(({ theme }) => ({
    color: 'blue',
  }));
class FaqTask extends Component {
  render() {
    return ( 
    
      <Root>
      <BlueTypography>Support</BlueTypography>
      
        <Typography variant="h5" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography>
            Everthing you need to know about using Jeddah House of Commerce.
        </Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Heading>
              What types of debt portfolios are available for purchase on Platform?
            </Heading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              On Platform, you can find a diverse range of debt portfolios available for purchase,
              including but not limited to consumer debts, commercial debts, medical debts, and more.
              Our platform offers opportunities for both individual and institutional buyers to
              invest in various debt types.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Heading>
              How do I search for and find debt portfolios that match my investment criteria?
            </Heading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              You can use our advanced search filters and criteria on the platform to find debt
              portfolios that match your investment goals. The search tool allows you to filter by
              debt type, amount, maturity date, and more to help you find the best investment
              opportunities.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Heading>
              What information is provided about debt portfolios listed on Platform Name?
            </Heading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Each debt portfolio listing includes detailed information such as the type of debt,
              the amount, the maturity date, interest rates, and the creditworthiness of the debtor.
              Additional data may include historical performance, risk ratings, and other relevant
              financial metrics.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Heading>
              How do I evaluate the quality and potential profitability of a debt portfolio?
            </Heading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              To evaluate the quality and potential profitability of a debt portfolio, you should
              consider factors such as the debtor's credit rating, the interest rate, the term of
              the debt, and historical performance data. Our platform provides tools and analytics
              to help you assess these factors and make informed investment decisions.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Heading>
              What steps are involved in the debt acquisition and transaction process?
            </Heading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The debt acquisition and transaction process typically involves the following steps:
              <ol>
                <li>Searching and selecting a debt portfolio that matches your criteria.</li>
                <li>Reviewing the detailed information and evaluating the portfolio.</li>
                <li>Making an offer or purchasing the debt portfolio through the platform.</li>
                <li>Completing the necessary documentation and compliance checks.</li>
                <li>Finalizing the transaction and transferring the ownership of the debt portfolio.</li>
              </ol>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<AddIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Heading>
              How does Platform Name ensure security and compliance during debt transactions?
            </Heading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Platform Name employs robust security measures and compliance protocols to ensure the
              safety and legality of all debt transactions. These measures include data encryption,
              secure payment gateways, compliance with financial regulations, and regular audits.
              Our platform is designed to protect both buyers and sellers throughout the transaction
              process.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Root>
  
    );
  }
}

export default FaqTask;