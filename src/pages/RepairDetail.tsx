'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import StaggerContainer from '../components/animations/StaggerContainer';
import { Box, Container, Typography, Breadcrumbs, Button, Grid, Paper, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RepairServiceLayout from '../components/RepairServiceLayout';
import SEO from '../components/SEO';
import { repairServices } from '../data/repairData';
import { useRepairPricing } from '../hooks/useRepairPricing';
import { modelSpecificDetails, repairDetails, iphoneRepairTemplates } from '../data/modelSpecificDetails';
import GetInstantQuoteButton from '../components/GetInstantQuoteButton';
import ScheduleAppointmentButton from '../components/ScheduleAppointmentButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RepairDetail = () => {
    const params = useParams();
    const serviceId = params?.serviceId as string;
    const modelId = params?.modelId as string;
    const repairType = params?.repairType as string;
    const { getPriceRange, rawData, loading } = useRepairPricing();

    // 1. Resolve Data
    // Find Service
    const service = repairServices.find(s => s.id === serviceId);

    // Find Model
    let model: any = null;
    if (service) {
        if (service.models) model = service.models.find(m => m.id === modelId);
        if (!model && service.subCategories) {
            for (const sub of service.subCategories) {
                const found = sub.models.find(m => m.id === modelId);
                if (found) { model = found; break; }
            }
        }
    }

    const genericRepairInfo = repairDetails[repairType || ''] || {
        title: repairType?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Utol',
        desc: 'Professional repair service.',
        icon: null,
        image: null
    };

    // Early return if model or repairType is missing
    if (!model || !repairType) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Repair Not Found</Typography>
                <Button component={Link} href="/" sx={{ mt: 2 }}>Return Home</Button>
            </Container>
        );
    }

    // Helper to format price
    const getPriceValue = (p: string) => {
        const val = parseFloat(p.replace(/[^0-9.]/g, ''));
        return isNaN(val) ? 0 : val;
    };

    const formatPrice = (p: string) => {
        const val = getPriceValue(p);
        if (val === 0) return "Contact";
        return `$${val.toFixed(2)}`;
    };

    // Filter pricing rows
    const pricingRows = rawData.filter(row =>
        model &&
        row['Device Model']?.toLowerCase().replace(/\s+/g, '') === model.name.toLowerCase().replace(/\s+/g, '') &&
        (row['Repair Type']?.toLowerCase() === repairType?.toLowerCase() ||
            row['Repair Type'] === genericRepairInfo.title)
    );

    // Calculate dynamic price for description
    let descriptionPrice = '';
    if (pricingRows.length > 0) {
        const prices = pricingRows.map(r => getPriceValue(r['Sub-Type Price (USD)'])).filter(p => p > 0);
        if (prices.length > 0) {
            descriptionPrice = `$${Math.min(...prices).toFixed(2)}`;
        }
    }

    if (!descriptionPrice) {
        descriptionPrice = getPriceRange(serviceId || '', genericRepairInfo.title, model.name);
    }

    // Check for Model Specific Overrides
    let specificDetails = modelId && repairType && (modelSpecificDetails as any)[modelId] && (modelSpecificDetails as any)[modelId][repairType];

    // Fallback to generic iPhone templates if no specific details found AND it's an iPhone
    if (!specificDetails && repairType && iphoneRepairTemplates[repairType] && (modelId?.startsWith('iphone') || model?.name.toLowerCase().includes('iphone'))) {
        specificDetails = iphoneRepairTemplates[repairType];
    }

    let displayTitle = specificDetails?.titleOverride || `${model?.name} ${genericRepairInfo.title}`;
    let displayDesc = specificDetails?.descriptionOverride || `${genericRepairInfo.desc} Same-day service available with premium quality parts and warranty.`;

    if (model) {
        displayTitle = displayTitle.replace(/{model}/g, model.name);
        displayDesc = displayDesc.replace(/{model}/g, model.name);
    }

    if (descriptionPrice) {
        displayDesc = displayDesc.replace(/{price}/g, descriptionPrice);
    }

    const bottomSection = (
        <Box sx={{ mt: 8, mb: 8 }}>
            <Box sx={{ mb: 6, pl: '70px', pr: '70px' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>About This Repair</Typography>
                {displayDesc.split('\n').filter((p: string) => p.trim().length > 0).map((paragraph: string, index: number) => {
                    const highlightTerms = [
                        model?.name,
                        descriptionPrice,
                        'CMTC Wireless', // Highlighting brand name as "etc" potentially
                    ].filter(Boolean);

                    // Helper to highlight terms + patterns (prices, years, brand)
                    // Construct a single regex that matches Price OR Year OR any Highlight Term
                    // Escape terms for regex
                    const escapedTerms = highlightTerms.map(t => t?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
                    const pattern = new RegExp(`(\\$[\\d,]+\\.?\\d*|\\b20\\d{2}\\b${escapedTerms ? '|' + escapedTerms : ''})`, 'gi');

                    const content = paragraph.split(pattern).map((part, i) => {
                        // Split with capturing group: odd indices are matches
                        if (i % 2 === 1) {
                            return <span key={i} style={{ color: '#2e7d32', fontWeight: 600 }}>{part}</span>;
                        }
                        return <span key={i}>{part}</span>;
                    });

                    return (
                        <Typography key={index} variant="body1" sx={{ color: '#000000', mb: 2, fontSize: '1.1rem', lineHeight: 1.6 }}>
                            {content}
                        </Typography>
                    );
                })}
            </Box>
        </Box>
    );

    return (
        <>
            <SEO
                title={`${displayTitle} - CMTC Wireless`}
                description={`Fast and reliable ${displayTitle}. Get pricing, warranty info, and schedule your appointment today.`}
            />
            <RepairServiceLayout
                faqCategory={serviceId === 'iphone-repair' ? 'iphone' : 'default'}
                breadcrumbs={
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 4 }}>
                        <Link href="/" style={{ color: '#718096', textDecoration: 'none' }}>Home</Link>
                        {service && <Link href={`/${serviceId}`} style={{ color: '#718096', textDecoration: 'none' }}>{service.name}</Link>}
                        <Link href={`/${serviceId}/${modelId}`} style={{ color: '#718096', textDecoration: 'none' }}>{model.name}</Link>
                        <Typography color="text.primary" fontWeight={600}>{genericRepairInfo.title}</Typography>
                    </Breadcrumbs>
                }
                rightContent={
                    <Paper elevation={0} sx={{
                        p: 4,
                        bgcolor: '#fff',
                        border: '1px solid #eee',
                        borderRadius: 4
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                            Repair Summary
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, mb: 4 }}>
                            <Box>
                                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', mb: 0.5 }}>
                                    Device
                                </Typography>
                                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}>
                                    {model.name}
                                </Typography>

                                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', mb: 0.5 }}>
                                    Service
                                </Typography>
                                <Typography variant="h6" color="text.primary" fontWeight={700} sx={{ lineHeight: 1.2 }}>
                                    {genericRepairInfo.title}
                                </Typography>
                            </Box>
                            {genericRepairInfo.image && (
                                <Box
                                    component="img"
                                    src={genericRepairInfo.image}
                                    alt={displayTitle}
                                    sx={{
                                        width: 170,
                                        height: 170,
                                        objectFit: 'contain',
                                        borderRadius: 2,
                                        flexShrink: 0,
                                        mixBlendMode: 'multiply',
                                        mt: -7,
                                        border: '1px solid #efefef'
                                    }}
                                />
                            )}
                        </Box>
                        <Divider sx={{ my: 2 }} />

                        {/* Pricing Section */}
                        {loading ? (
                            <Typography>Loading pricing...</Typography>
                        ) : specificDetails?.priceOverride ? (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                                <Typography variant="body1" fontWeight={600}>Price</Typography>
                                <Typography variant="h5" color="primary" fontWeight={700}>
                                    {specificDetails.priceOverride}
                                </Typography>
                            </Box>
                        ) : pricingRows.length > 0 ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                                {pricingRows.map((row, idx) => (
                                    <Box key={idx} sx={{
                                        p: 2,
                                        bgcolor: '#f8fafc',
                                        borderRadius: 2,
                                        border: '1px solid #e2e8f0'
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
                                            <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#334155' }}>
                                                {row['Sub-Type Title'] === 'Standard' ? 'Service Price' : row['Sub-Type Title']}
                                            </Typography>
                                            <Typography variant="h6" color="primary" fontWeight={700}>
                                                {formatPrice(row['Sub-Type Price (USD)'])}
                                            </Typography>
                                        </Box>
                                        {row.Warranty && (
                                            <Typography variant="caption" sx={{ color: '#64748b', display: 'block' }}>
                                                {row.Warranty} Warranty
                                            </Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                                <Typography variant="body1" fontWeight={600}>Estimated Price</Typography>
                                <Typography variant="h5" color="primary" fontWeight={700}>
                                    {getPriceRange(serviceId || '', genericRepairInfo.title, model.name)}
                                </Typography>
                            </Box>
                        )}

                        <ScheduleAppointmentButton fullWidth sx={{ mb: 2, borderRadius: 2 }} />
                        <GetInstantQuoteButton
                            // state={{ deviceModel: model.name, serviceType: genericRepairInfo.title }}
                            fullWidth
                            sx={{ borderRadius: 2 }}
                            variant="outlined"
                        />
                    </Paper>
                }
                bottomContent={bottomSection}
            >
                <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: '#000000', mb: 2 }}>
                            {displayTitle}
                        </Typography>



                        {/* Specific Specs & Features */}
                        {specificDetails?.features && (
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Key Features</Typography>
                                <StaggerContainer childSelector=".feature-item">
                                    <Grid container spacing={2}>
                                        {specificDetails.features.map((feature: string, idx: number) => (
                                            <Grid size={{ xs: 12, sm: 6 }} key={idx} className="feature-item">
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <CheckCircleIcon color="primary" />
                                                    <Typography variant="body1">{feature}</Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </StaggerContainer>
                            </Box>
                        )}

                        {specificDetails?.specs && (
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Specifications</Typography>
                                <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                    {Object.entries(specificDetails.specs).map(([key, value], idx) => (
                                        <Box key={key} sx={{
                                            display: 'flex',
                                            borderBottom: idx !== Object.keys(specificDetails.specs!).length - 1 ? '1px solid #eee' : 'none',
                                            p: 2,
                                            bgcolor: idx % 2 === 0 ? '#fafafa' : '#fff'
                                        }}>
                                            <Typography sx={{ width: '40%', fontWeight: 600, color: '#555' }}>{key}</Typography>
                                            <Typography sx={{ width: '60%', color: '#000000' }}>{value as string}</Typography>
                                        </Box>
                                    ))}
                                </Paper>
                            </Box>
                        )}
                    </Grid>
                </Grid>

                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Why Choose Us?</Typography>
                    <StaggerContainer childSelector=".why-choose-item">
                        <Grid container spacing={2}>
                            {[
                                "90-Day Warranty on Parts & Labor",
                                "Expert Certified Technicians",
                                "High Quality Parts",
                                "Fast Turnaround Time",
                                "No Data Loss Guarantee"
                            ].map((feature, index) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={index} className="why-choose-item">
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <CheckCircleIcon color="primary" />
                                        <Typography variant="body1">{feature}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </StaggerContainer>
                </Box>
            </RepairServiceLayout>
        </>
    );
};

export default RepairDetail;
