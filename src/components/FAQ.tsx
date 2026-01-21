import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { faqData } from '../data/faqData';

interface FAQProps {
    category?: string;
}

const FAQ: React.FC<FAQProps> = ({ category = 'default' }) => {
    // Use the provided category, or fallback to 'default' if the category doesn't exist in data
    const dataKey = category && faqData[category] ? category : 'default';
    const questions = faqData[dataKey];

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ bgcolor: '#78E335', py: 10, color: '#fff' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                        We’re ready for your questions.
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                        We've been doing this a while, here are the most common questions
                    </Typography>
                </Box>

                <Box sx={{ maxWidth: 900, mx: 'auto' }}>
                    {questions.map((item, index) => {
                        const panelId = `panel${index}`;
                        const isExpanded = expanded === panelId;

                        return (
                            <Accordion
                                key={index}
                                expanded={isExpanded}
                                onChange={handleChange(panelId)}
                                sx={{
                                    bgcolor: 'transparent',
                                    boxShadow: 'none',
                                    '&:before': { display: 'none' }, // Remove default divider
                                    mb: 2
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <Box
                                            component="span"
                                            onMouseEnter={() => !isExpanded && setExpanded(panelId)}
                                            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                        >
                                            {isExpanded ? <RemoveIcon sx={{ color: '#fff' }} /> : <AddIcon sx={{ color: '#fff' }} />}
                                        </Box>
                                    }
                                    aria-controls={`${panelId}bh-content`}
                                    id={`${panelId}bh-header`}
                                    sx={{
                                        px: 0,
                                        '& .MuiAccordionSummary-content': { margin: '12px 0' }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
                                    <Typography sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </Box>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        component={Link}
                        to="/contact-us"
                        state={{ serviceNeeded: 'General Inquiry' }}
                        variant="contained"
                        sx={{
                            bgcolor: '#fff',
                            color: '#78E335',
                            fontWeight: 'bold',
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                bgcolor: '#f5f5f5'
                            }
                        }}
                    >
                        MORE FAQ
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;
