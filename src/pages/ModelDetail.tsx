import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Paper, Breadcrumbs, List, ListItem, ListItemText } from '@mui/material';
import FAQ from '../components/FAQ';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GetInstantQuoteButton from '../components/GetInstantQuoteButton';
import ScheduleAppointmentButton from '../components/ScheduleAppointmentButton';

import { repairServices } from '../data/repairData';
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
    const { serviceId, modelId } = useParams();

    // 1. Find the Service Category
    const service = repairServices.find(s => s.id === serviceId);

    // 2. Find the Specific Model OR Series
    let model: any = null;
    let isSeries = false;
    let seriesInfo: any = null;

    // Aggregate all data sources
    const allSeriesData = [
        ...iphoneData,
        ...cellphoneData,
        ...smartwatchData,
        ...computerData,
        ...desktopData,
        ...laptopData,
        ...aioData,
        ...tabletData,
        ...ipadData,
        ...macbookData
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
                <Button component={Link} to="/" sx={{ mt: 2 }}>Return Home</Button>
            </Container>
        );
    }


    // Map serviceId to FAQ category
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
        <Box sx={{ pb: 0, pt: 4 }}>
            {/* ... rest of the render code ... */}
            <Container maxWidth="xl">
                {/* Breadcrumbs and Grid content */}
                {/* ... (existing content preserved) ... */}
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 4 }}>
                    <Link to="/" style={{ color: '#9E9E9E', textDecoration: 'none' }}>Home</Link>
                    {service && <Link to={`/${service.id}`} style={{ color: '#9E9E9E', textDecoration: 'none' }}>{service.name}</Link>}
                    <Typography color="text.primary" fontWeight={400}>{model.name} Repair</Typography>
                </Breadcrumbs>

                <Grid container spacing={8}>
                    {/* LEFT COLUMN (Main Content) */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#333', mb: 1, fontSize: '3rem' }}>
                            {isSeries ? seriesInfo.title : `${model.name} Series Repair`}
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
                                            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
                                                {variants.map((variant) => (
                                                    <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={variant}>
                                                        <Paper
                                                            component={Link}
                                                            to="/contact-us"
                                                            state={{ deviceModel: `${model.name.replace(' Series', '')} ${variant}` }}
                                                            elevation={0}
                                                            sx={{
                                                                p: 2,
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                alignItems: "center",
                                                                textDecoration: 'none',
                                                                cursor: 'pointer',
                                                                borderRadius: "16px",
                                                                background: "#fff",
                                                                border: "1px solid #f0f0f0",
                                                                transition: "all 0.3s ease",
                                                                "&:hover": {
                                                                    borderColor: "#78E335",
                                                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                                                    transform: "translateY(-5px)"
                                                                },
                                                            }}
                                                        >
                                                            <Box
                                                                component="img"
                                                                src={isSeries ? seriesInfo.image || DEVICE_IMAGE_URL : DEVICE_IMAGE_URL}
                                                                alt={`${model.name} ${variant}`}
                                                                sx={{
                                                                    width: "100%",
                                                                    height: "auto",
                                                                    objectFit: "contain",
                                                                    mb: 2,
                                                                    aspectRatio: '3/4'
                                                                }}
                                                            />
                                                            <Typography variant="body1" sx={{ fontWeight: 700, color: '#78E335', textAlign: 'center' }}>
                                                                {variant}
                                                            </Typography>
                                                        </Paper>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        );
                                    } else {
                                        return (
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                                                <Box
                                                    component="img"
                                                    src={isSeries ? seriesInfo.image || DEVICE_IMAGE_URL : DEVICE_IMAGE_URL}
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
                                                        state={{ deviceModel: model.name }}
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
                                    {isSeries ? seriesInfo.subtitle : `${model.name} Repair Services by CMTC Wireless`}
                                </Typography>

                                {isSeries ? (
                                    <>
                                        {seriesInfo.description.map((para: string, idx: number) => {
                                            const parseDescription = (text: string) => {
                                                // Split by the specific tag pattern
                                                const parts = text.split(/(<b color='green'>.*?<\/b>)/g);
                                                return parts.map((part, i) => {
                                                    if (part.startsWith("<b color='green'>") && part.endsWith("</b>")) {
                                                        const content = part.replace("<b color='green'>", "").replace("</b>", "");
                                                        return (
                                                            <span key={i} style={{ fontWeight: 'bold', color: '#78E335' }}>
                                                                {content}
                                                            </span>
                                                        );
                                                    }
                                                    return part;
                                                });
                                            };

                                            return (
                                                <Typography key={idx} variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 2 }}>
                                                    {parseDescription(para)}
                                                </Typography>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 2 }}>
                                            Apple introduced the {model.name} lineup featuring advanced displays and processors.
                                            However, accidents happen. When your device fails, you need a dependable partner that restores uptime fast.
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
                                            CMTC Wireless provides depot repair programs designed for education and small business fleets, with consistent quality, clear SLAs, and streamlined logistics.
                                        </Typography>
                                    </>
                                )}

                                {/* Services List - Only show specific services list if needed, or keeping it for all */}
                                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 2 }}>
                                    <br />
                                    <b>Our services include:</b>
                                </Typography>
                                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                                    {['Screen and glass replacement', 'Battery and charging issues', 'No power and boot failures', 'Button, camera, speaker, and microphone repair', 'Liquid damage evaluation'].map((item) => (
                                        <ListItem key={item} sx={{ display: 'list-item', py: 0, color: '#666' }}>
                                            <ListItemText primary={item} primaryTypographyProps={{ style: { fontSize: '1rem' } }} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mt: 2 }}>
                                    Every repair includes quality control and a one year warranty for covered work.
                                </Typography>

                                <Typography variant="body1" sx={{ color: '#78E335', mt: 3, fontWeight: 500 }}>
                                    Ready to set up or expand your program? <Link to="/contact-us" style={{ color: '#78E335', textDecoration: 'none' }}>Request a quote or open an account.</Link>
                                </Typography>
                            </Box>
                        </Box>


                        {/* FAQ moved to bottom */}
                    </Grid>

                    {/* RIGHT COLUMN (Sidebar) */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper elevation={0} sx={{ bgcolor: '#F5F5F5', p: 4, borderRadius: 2 }}>
                            <Typography variant="h5" sx={{ color: '#78E335', fontWeight: 700, mb: 3 }}>
                                What We Do
                            </Typography>

                            {sidebarItems.map((item) => (
                                <Box key={item.title} sx={{ mb: 3 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                                        {item.text}
                                    </Typography>
                                </Box>
                            ))}

                            <Button
                                component={Link}
                                to="/about-us"
                                variant="contained"
                                disableElevation
                                sx={{
                                    bgcolor: '#fff',
                                    color: '#78E335',
                                    fontWeight: 700,
                                    mt: 2,
                                    py: 1.5,
                                    px: 4,
                                    '&:hover': { bgcolor: '#ffebee' }
                                }}
                            >
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
