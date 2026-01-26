import React, { type ReactNode } from 'react';
import { Box, Container, Grid } from '@mui/material';
import WhyChoose from './WhyChoose';
import GoogleReviews from './GoogleReviews';
import FAQ from './FAQ';
import FadeIn from './animations/FadeIn';

interface RepairServiceLayoutProps {
    breadcrumbs: ReactNode;
    children: ReactNode; // Left column content
    rightContent?: ReactNode; // Right column content (defaults to WhyChoose)
    bottomContent?: ReactNode; // Bottom section (e.g., model grid)
    faqCategory?: string;
}

const RepairServiceLayout: React.FC<RepairServiceLayoutProps> = ({
    breadcrumbs,
    children,
    rightContent,
    bottomContent,
    faqCategory
}) => {
    return (
        <Box sx={{ pb: 0 }}>
            <Box sx={{ py: 6, mb: 6 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8}>
                        {/* Left Column: Title and Description */}
                        <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 10 } }}>
                            <FadeIn delay={0.2}>
                                {breadcrumbs}
                                {children}
                            </FadeIn>
                        </Grid>

                        {/* Right Column: Sidebar Card */}
                        <Grid size={{ xs: 12, md: 5 }} sx={{ pr: { md: 10 }, mt: { md: 2 } }}>
                            <FadeIn delay={0.4} direction="left">
                                {rightContent || <WhyChoose />}
                            </FadeIn>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {bottomContent && (
                <Container maxWidth="xl">
                    <FadeIn delay={0.6}>
                        {bottomContent}
                    </FadeIn>
                </Container>
            )}

            <GoogleReviews />
            <FAQ category={faqCategory} />
        </Box>
    );
};

export default RepairServiceLayout;
