'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { faqData } from '../data/faqData';
import { colors } from '../theme/colors';
import StaggerContainer from './animations/StaggerContainer';
import FadeIn from './animations/FadeIn';

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
        <Box sx={{ bgcolor: colors.primary, py: 10, color: '#fff' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <FadeIn delay={0.1}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                            We’re ready for your questions.
                        </Typography>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
                            We've been doing this a while, here are the most common questions
                        </Typography>
                    </FadeIn>
                </Box>

                <Box sx={{ maxWidth: 900, mx: 'auto' }}>
                    <StaggerContainer childSelector=".faq-item" initialY={-50} stagger={0.25}>
                        {questions.map((item, index) => {
                            const panelId = `panel${index}`;
                            const isExpanded = expanded === panelId;

                            return (
                                <Accordion
                                    key={index}
                                    expanded={isExpanded}
                                    onChange={handleChange(panelId)}
                                    disableGutters
                                    elevation={0}
                                    className="faq-item"
                                    sx={{
                                        bgcolor: 'transparent',
                                        color: '#fff',
                                        mb: 2,
                                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 0,
                                        '&:before': { display: 'none' },
                                        '&:last-child': { borderBottom: 'none' }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <Box
                                                component="span"
                                                onMouseEnter={() => !isExpanded && setExpanded(panelId)}
                                                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', width: 28, height: 28 }}
                                            >
                                                <AddIcon sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    color: '#fff',
                                                    fontSize: 28,
                                                    transition: 'all 0.3s ease-in-out',
                                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    opacity: isExpanded ? 0 : 1
                                                }} />
                                                <RemoveIcon sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    color: '#fff',
                                                    fontSize: 28,
                                                    transition: 'all 0.3s ease-in-out',
                                                    transform: isExpanded ? 'rotate(0deg)' : 'rotate(-180deg)',
                                                    opacity: isExpanded ? 1 : 0
                                                }} />
                                            </Box>
                                        }
                                        aria-controls={`${panelId}bh-content`}
                                        id={`${panelId}bh-header`}
                                        sx={{
                                            px: 0,
                                            '& .MuiAccordionSummary-content': { margin: '12px 0' },
                                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'none' }
                                        }}
                                    >
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <HelpOutlineIcon sx={{ color: '#81c784', fontSize: '1.5rem' }} />
                                            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1.1rem', color: 'white' }}>
                                                {item.question}
                                            </Typography>
                                        </Stack>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ px: 3, pb: 4, pt: 0, ml: 5 }}>
                                        <Stack direction="row" spacing={2} alignItems="flex-start">
                                            <CheckCircleOutlineIcon sx={{ color: '#a5d6a7', fontSize: '1.2rem', mt: 0.5 }} />
                                            <Typography sx={{ opacity: 0.9, lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 400, color: 'white' }}>
                                                {item.answer}
                                            </Typography>
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                    </StaggerContainer>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <FadeIn delay={0.3}>
                        <Button
                            component={Link}
                            href="/contact-us?serviceNeeded=General+Inquiry"
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#fff',
                                color: colors.primary,
                                fontWeight: 800,
                                px: 5,
                                py: 1.8,
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
                                '&:hover': {
                                    bgcolor: '#f0fdf4',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                                }
                            }}
                        >
                            MORE FAQ
                        </Button>
                    </FadeIn>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;
