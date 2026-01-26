import React, { type ReactNode } from 'react';
import { Box, Container, Grid } from '@mui/material';
import WhyChoose from './WhyChoose';
import GoogleReviews from './GoogleReviews';
import FAQ from './FAQ';

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
                            {breadcrumbs}
                            {children}
                        </Grid>

                        {/* Right Column: Sidebar Card */}
                        <Grid size={{ xs: 12, md: 5 }} sx={{ pr: { md: 10 }, mt: { md: 2 } }}>
                            {rightContent || <WhyChoose />}
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {bottomContent && (
                <Container maxWidth="xl">
                    {bottomContent}
                </Container>
            )}

            <GoogleReviews />
            <FAQ category={faqCategory} />
        </Box>
    );
};

export default RepairServiceLayout;
