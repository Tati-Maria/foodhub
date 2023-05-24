'use client'

import Title from "../components/ui/Title";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"


const Home = () => {
  return (
    <section>
      <Title
      title="Welcome to our help page"
      className="text-gray-100 text-4xl" 
      />
      <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How to create an account?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To create an account, click on the &quot;Sign Up&quot; button in the top right corner of the page. Then fill in the required fields and click on the &quot;Sign Up&quot; button.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>My Payment did not process</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Having trouble with your payment? Please contact us at our contact page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is This a real web app</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, this is a demo web app for study purposes.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </section>
  )
}

export default Home