'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import SEO from '../components/SEO';
import StaggerContainer from '../components/animations/StaggerContainer';
import { colors } from '../theme/colors';
import { Box, Container, Typography, Button, Grid, Paper, Breadcrumbs } from '@mui/material';
import FAQ from '../components/FAQ';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GetInstantQuoteButton from '../components/GetInstantQuoteButton';
import ScheduleAppointmentButton from '../components/ScheduleAppointmentButton';
import { Smartphone } from 'lucide-react';
import { useRepairPricing } from '../hooks/useRepairPricing';
import { repairServices } from '../data/repairData';
// RepairCard removed as it is now encapsulated in RepairServiceCard
import { seriesData as iphoneData } from '../data/iphone';
import { cellphoneData } from '../data/cellphone';
import { smartwatchData } from '../data/smartwatch';
import { computerData } from '../data/computer';
import { desktopData } from '../data/desktop';
import { laptopData } from '../data/laptop';
import { aioData } from '../data/aio';
import { tabletData } from '../data/tablet';
import { ipadData } from '../data/ipad';
import { macbookData } from '../data/macbook';
import { repairDetails } from '../data/modelSpecificDetails'; // Import shared data
import RepairServiceCard from '../components/RepairServiceCard';

import { getImagePath, imagePaths } from '../data/imagePaths';

const DEVICE_IMAGE_URL = "https://www.gophermods.com/wp-content/uploads/2025/06/iPhone-16-Repairs-Minneapolis.jpg";


const sidebarItems = [
    {
        title: "Depot Repairs",
        text: "Screen, battery, keyboard, port, camera, and board level work. One to three business day turnaround after check in."
    },
    {
        title: "Buyback",
        text: "Unlock budget with fair market value offers and certified data disposition."
    },
    {
        title: "White glove services",
        text: "Provisioning, kitting, labeling, case install, screen protectors, ready to issue."
    },
    {
        title: "Protection plans",
        text: "Accidental damage coverage and extended warranty options."
    },
    {
        title: "Warranty and support",
        text: "Clear policies, RMA tracking, responsive account support."
    }
];

const ModelDetail = () => {
    const params = useParams();
    const serviceId = Array.isArray(params?.serviceId) ? params?.serviceId[0] : params?.serviceId;
    const modelId = Array.isArray(params?.modelId) ? params?.modelId[0] : params?.modelId;
    const { rawData, loading } = useRepairPricing();

    // 1. Find the Service Category
    const service = repairServices.find(s => s.id === serviceId);

    // 2. Find the Specific Model OR Series
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let model: any = null;
    let isSeries = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let seriesInfo: any = null;

    // Aggregate all data sources
    const allSeriesData = [
        ...iphoneData, ...cellphoneData, ...smartwatchData, ...computerData,
        ...desktopData, ...laptopData, ...aioData, ...tabletData, ...ipadData, ...macbookData
    ];

    // Check if it's a known Series/Data ID
    const foundSeries = allSeriesData.find(s => s.id === modelId);

    if (foundSeries) {
        model = { name: foundSeries.title.replace(' Repair', '') }; // Create dummy model object for breadcrumbs
        seriesInfo = foundSeries;
        isSeries = true;
    } else if (service) {
        // Standard Model Lookup
        if (service.models) {
            model = service.models.find(m => m.id === modelId);
        }
        if (!model && service.subCategories) {
            for (const sub of service.subCategories) {
                const found = sub.models.find(m => m.id === modelId);
                if (found) {
                    model = found;
                    break;
                }
            }
        }
    }

    if ((!service && !isSeries) || !model) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Device Not Found</Typography>
                <Button component={Link} href="/" sx={{ mt: 2 }}>Return Home</Button>
            </Container>
        );
    }



    // Logic for Sub-Model Page (Most Popular Repairs Grid Only)
    // Updated: Tiered Pricing (Without Warranty vs With Warranty)
    if (!isSeries) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <SEO
                    title={`${model.name} Repair`}
                    description={`Expert repair for ${model.name}. Screen replacement, battery repair, and more. Fast service and warranty included.`}
                />
                <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 6, color: '#000000' }}>
                    Most Popular Repairs
                    <Typography variant="h6" component="span" display="block" color="text.secondary" sx={{ mt: 1, fontWeight: 400 }}>
                        for {model.name}
                    </Typography>
                </Typography>

                {loading ? <Typography align="center">Loading repair prices...</Typography> : (
                    <StaggerContainer childSelector=".repair-card-item">
                        <Grid container spacing={3}>
                            {(() => {
                                // Filter & Group Data
                                const modelRepairs = rawData.filter(row => row['Device Model']?.toLowerCase().replace(/\s+/g, '') === model.name.toLowerCase().replace(/\s+/g, ''));

                                const groupedRepairs: Record<string, typeof rawData> = {};
                                modelRepairs.forEach(row => {
                                    const rawType = row['Repair Type'];
                                    // Normalize type to kebab-case for consistent grouping and lookup
                                    const normalizedType = rawType.toLowerCase().trim().replace(/ /g, '-').replace(/\//g, '-');

                                    // Map to known keys if possible (e.g. handle variations)
                                    const key = normalizedType;

                                    if (!groupedRepairs[key]) groupedRepairs[key] = [];
                                    groupedRepairs[key].push(row);
                                });

                                const repairTypes = Object.keys(groupedRepairs);

                                // Define preferred order
                                const preferredOrder = [
                                    'screen-replacement',
                                    'back-glass-repair',
                                    'battery-replacement',
                                    'charging-port-repair',
                                    'back-camera-repair',
                                    'selfie-camera-repair',
                                    'loud-speaker-repair',
                                    'power-button-repair',
                                    'volume-button-repair'
                                ];

                                repairTypes.sort((a, b) => {
                                    const indexA = preferredOrder.indexOf(a);
                                    const indexB = preferredOrder.indexOf(b);

                                    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                                    if (indexA !== -1) return -1;
                                    if (indexB !== -1) return 1;
                                    return 0;
                                });

                                if (repairTypes.length === 0) return <Grid size={{ xs: 12 }}><Typography align="center">Contact us for availability on this model.</Typography></Grid>;

                                return repairTypes.map((type) => {
                                    const rows = groupedRepairs[type];
                                    const details = repairDetails[type] || { icon: Smartphone, desc: "Professional repair service with warranty.", image: undefined };
                                    const Icon = details.icon;

                                    // Ensure image is a string or undefined, not null
                                    const displayImage = details.image || '';

                                    return (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={type} className="repair-card-item">
                                            <RepairServiceCard
                                                title={type.replace(/-/g, ' ')}
                                                description={
                                                    <>
                                                        {details.desc}
                                                        {rows.find(r => r.Warranty)?.Warranty && (
                                                            <Typography component="span" sx={{ display: 'block', color: colors.primary, fontWeight: 500, mt: 0.5, fontSize: '0.85rem' }}>
                                                                Includes {rows.find(r => r.Warranty)?.Warranty} Warranty
                                                            </Typography>
                                                        )}
                                                    </>
                                                }
                                                image={displayImage}
                                                icon={Icon}
                                                rows={rows}
                                                serviceId={serviceId || 'iphone-repair'}
                                                modelId={model.id}
                                            />
                                        </Grid>
                                    );
                                });
                            })()}
                        </Grid>
                    </StaggerContainer>
                )}

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Button component={Link} href={`/${serviceId}`} sx={{ color: '#999', textTransform: 'none' }}>
                        &larr; Back to {service?.name} Series
                    </Button>
                </Box>
            </Container>
        );
    }

    // Series Page Logic (Original)
    const getFaqCategory = (id: string | undefined) => {
        switch (id) {
            case 'iphone-repair': return 'iphone';
            case 'ipad-repair': return 'ipad';
            case 'macbook-repair': return 'macbook';
            case 'cell-phone-repair': return 'cell-phone';
            case 'smart-watch-repair': return 'smartwatch';
            case 'computer-repair': return 'computer';
            case 'desktop-repair': return 'desktop';
            case 'laptop-repair': return 'laptop';
            case 'aio-repair': return 'aio';
            case 'tablet-repair': return 'tablet';
            default: return 'default';
        }
    };

    return (
        <Box sx={{ pb: 0, pt: 7 }}>
            <SEO
                title={`${model.name} Repair`}
                description={`Professional repair services for ${model.name}. Select your specific model for pricing and repair options.`}
            />
            <Container maxWidth="xl">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 4 }}>
                    <Link href="/" style={{ color: '#9E9E9E', textDecoration: 'none' }}>Home</Link>
                    {service && <Link href={`/${service.id}`} style={{ color: '#9E9E9E', textDecoration: 'none' }}>{service.name}</Link>}
                    <Typography color="text.primary" fontWeight={400}>{model.name} Repair</Typography>
                </Breadcrumbs>

                <Grid container spacing={8}>
                    {/* LEFT COLUMN (Main Content) */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#000000', mb: 1, fontSize: '3rem' }}>
                            {seriesInfo?.title || `${model.name} Repair`}
                        </Typography>

                        {/* Intro Section with Image */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6, mt: 4 }}>
                            <Box sx={{ width: '100%', mb: 6 }}>
                                {(() => {
                                    const getModelVariants = (name: string) => {
                                        if (name.includes('iPhone 17')) return ['Pro Max', 'Pro', 'Plus', '17e', '17'];
                                        if (name.includes('iPhone 16')) return ['Pro Max', 'Pro', 'Plus', '16e', '16'];
                                        if (name.includes('iPhone 15')) return ['Pro Max', 'Pro', 'Plus', '15'];
                                        if (name.includes('iPhone 14')) return ['Pro Max', 'Pro', 'Plus', '14'];
                                        if (name.includes('iPhone 13')) return ['Pro Max', 'Pro', '13'];
                                        if (name.includes('iPhone 12')) return ['Pro Max', 'Pro', '12'];
                                        if (name.includes('iPhone 11')) return ['Pro Max', 'Pro', '11'];
                                        if (name.includes('iPhone XS')) return ['Max', 'XS'];
                                        if (name.includes('iPhone SE (3rd Gen)')) return ['SE (3rd Gen)'];
                                        if (name.includes('iPhone SE (2nd Gen)')) return ['SE (2nd Gen)'];
                                        return [];
                                    };

                                    const variants = getModelVariants(model.name);

                                    if (variants.length > 0) {
                                        return (
                                            <StaggerContainer childSelector=".variant-item">
                                                <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
                                                    {variants.map((variant) => {
                                                        const baseName = model.name.replace(' Series', '');
                                                        let targetName = `${baseName} ${variant}`;
                                                        // Avoid duplicating variant if it's already part of the base name (e.g. SE models, or "iPhone 13" vs "13")
                                                        if (baseName.toLowerCase().includes(variant.toLowerCase().trim())) {
                                                            targetName = baseName;
                                                        } else {
                                                            // Handle "iPhone 16" + "16e" -> "iPhone 16e"
                                                            // Check if variant starts with the number the base name ends with
                                                            const baseSuffix = baseName.split(' ').pop() || '';
                                                            if (baseSuffix && variant.toLowerCase().startsWith(baseSuffix.toLowerCase())) {
                                                                // Remove the suffix from base and append the variant
                                                                targetName = baseName.substring(0, baseName.lastIndexOf(' ')) + ' ' + variant;
                                                            }
                                                        }

                                                        let targetId = '';
                                                        // Helper for case-insensitive lookup
                                                        const findModelId = (models: { name: string, id: string }[]) => {
                                                            return models.find(m => m.name.toLowerCase() === targetName.toLowerCase())?.id;
                                                        };

                                                        if (service && service.models) {
                                                            targetId = findModelId(service.models) || '';
                                                        }

                                                        if (!targetId) {
                                                            for (const cat of repairServices) {
                                                                if (cat.models) {
                                                                    targetId = findModelId(cat.models) || '';
                                                                    if (targetId) break;
                                                                }
                                                                if (cat.subCategories) {
                                                                    for (const sub of cat.subCategories) {
                                                                        targetId = findModelId(sub.models) || '';
                                                                        if (targetId) break;
                                                                    }
                                                                }
                                                                if (targetId) break;
                                                            }
                                                        }

                                                        // Check for specific model image in imagePaths.modelImages
                                                        let specificImage = null;
                                                        if ((imagePaths as any).modelImages && targetId && (imagePaths as any).modelImages[targetId]) {
                                                            specificImage = (imagePaths as any).modelImages[targetId];
                                                        }

                                                        return (
                                                            <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={variant} className="variant-item">
                                                                <Paper
                                                                    component={targetId ? Link : 'div'}
                                                                    href={targetId ? `/${serviceId || 'iphone-repair'}/${targetId}` : '#'}
                                                                    elevation={0}
                                                                    sx={{
                                                                        p: 2,
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        alignItems: "center",
                                                                        textDecoration: 'none',
                                                                        cursor: targetId ? 'pointer' : 'default',
                                                                        borderRadius: "16px",
                                                                        background: "#fff",
                                                                        border: "1px solid #f0f0f0",
                                                                        transition: "all 0.3s ease",
                                                                        "&:hover": targetId ? {
                                                                            borderColor: colors.primary,
                                                                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                                                            transform: "translateY(-5px)"
                                                                        } : {}
                                                                    }}
                                                                >
                                                                    <Box
                                                                        component="img"
                                                                        src={specificImage ? getImagePath(specificImage) : (isSeries && seriesInfo ? (getImagePath(seriesInfo.image) || DEVICE_IMAGE_URL) : DEVICE_IMAGE_URL)}
                                                                        alt={targetName}
                                                                        sx={{
                                                                            width: "100%",
                                                                            height: "auto",
                                                                            objectFit: "contain",
                                                                            mb: 2,
                                                                            aspectRatio: '3/4'
                                                                        }}
                                                                    />
                                                                    <Typography variant="body1" sx={{ fontWeight: 700, color: colors.primary, textAlign: 'center' }}>
                                                                        {variant}
                                                                    </Typography>
                                                                </Paper>
                                                            </Grid>
                                                        );
                                                    })}
                                                </Grid>
                                            </StaggerContainer>
                                        );
                                    } else {
                                        return (
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                                                <Box
                                                    component="img"
                                                    src={
                                                        model.id && (imagePaths as any).modelImages && (imagePaths as any).modelImages[model.id]
                                                            ? getImagePath((imagePaths as any).modelImages[model.id])
                                                            : (isSeries && seriesInfo ? (getImagePath(seriesInfo.image) || DEVICE_IMAGE_URL) : DEVICE_IMAGE_URL)
                                                    }
                                                    alt={model.name}
                                                    sx={{
                                                        width: 200,
                                                        height: 200,
                                                        objectFit: "contain",
                                                        borderRadius: 2
                                                    }}
                                                />
                                                <Box sx={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 2 }}>
                                                    <GetInstantQuoteButton
                                                        href={`/contact-us?deviceModel=${encodeURIComponent(model.name)}`}
                                                        fullWidth
                                                        sx={{ borderRadius: 2 }}
                                                    />
                                                    <ScheduleAppointmentButton
                                                        fullWidth
                                                        sx={{ borderRadius: 2 }}
                                                    />
                                                </Box>
                                            </Box>
                                        );
                                    }
                                })()}
                            </Box>

                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h5" sx={{ mb: 2, color: '#555', fontWeight: 400 }}>
                                    {seriesInfo?.subtitle}
                                </Typography>

                                {seriesInfo?.description?.map((para: string, idx: number) => {
                                    return (
                                        <Typography key={idx} variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 2 }} dangerouslySetInnerHTML={{ __html: para.replace(/<b color='green'>/g, `<span style="font-weight:bold;color:${colors.primary}">`).replace(/<\/b>/g, '</span>') }} />
                                    );
                                })}

                                <Typography variant="body1" sx={{ color: colors.primary, mt: 3, fontWeight: 500 }}>
                                    Ready to set up or expand your program? <Link href="/contact-us" style={{ color: colors.primary, textDecoration: 'none' }}>Request a quote or open an account.</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* RIGHT COLUMN (Sidebar) */}
                    <Grid size={{ xs: 12, md: 3 }} sx={{ pb: 15 }}>
                        <Paper elevation={0} sx={{
                            bgcolor: '#F5F5F5',
                            p: 4,
                            borderRadius: 2,
                            position: 'sticky',
                            top: 160,
                            height: 'fit-content'
                        }}>
                            <Typography variant="h5" sx={{ color: colors.primary, fontWeight: 700, mb: 3 }}>
                                What We Do
                            </Typography>
                            {sidebarItems.map((item) => (
                                <Box key={item.title} sx={{ mb: 3 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#000000', mb: 0.5 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                                        {item.text}
                                    </Typography>
                                </Box>
                            ))}
                            <Button component={Link} href="/about-us" variant="contained" disableElevation sx={{ bgcolor: '#fff', color: colors.primary, fontWeight: 700, mt: 2, py: 1.5, px: 4, '&:hover': { bgcolor: '#ffebee' } }}>
                                LEARN MORE
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <FAQ category={getFaqCategory(serviceId)} />
        </Box>
    );
};

export default ModelDetail;
