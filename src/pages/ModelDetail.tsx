import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Paper, Breadcrumbs, Divider, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

const faqs = [
    {
        q: "Are you sure you can fix it?",
        a: "Yes. We’ve had tens of thousands of devices brought into our stores. We fix the vast majority of devices we see."
    },
    {
        q: "How fast can you repair it?",
        a: "On average, most repairs are finished within one to two hours of drop-off. No appointment is required, but we recommend calling ahead."
    },
    {
        q: "Do you have any guarantees?",
        a: "Yes! If our parts fail within one year, bring it back, and we’ll fix it again under warranty."
    },
    {
        q: "Will you need my passcode?",
        a: "We prefer it for testing purposes, but it is not required. Without it, we cannot fully test the device after repair."
    },
    {
        q: "What if you can't fix it?",
        a: "In the unlikely event we cannot fix your device, there may be a small diagnostic fee, but you generally won't pay for the full repair."
    }
];

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

    return (
        <Box sx={{ pb: 10, pt: 4 }}>
            <Container maxWidth="xl">
                {/* Breadcrumbs */}
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
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6, mt: 4 }}>
                            <Box sx={{ flexShrink: 0, width: { xs: '100%', md: 200 } }}>
                                <img
                                    src={isSeries ? seriesInfo.image || DEVICE_IMAGE_URL : DEVICE_IMAGE_URL}
                                    alt={model.name}
                                    style={{ width: '100%', borderRadius: 8 }}
                                />
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
                                        return [];
                                    };

                                    const variants = getModelVariants(model.name);

                                    if (variants.length > 0) {
                                        return (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, justifyContent: 'center' }}>
                                                {variants.map((variant) => (
                                                    <Button
                                                        key={variant}
                                                        component={Link}
                                                        to="/contact-us"
                                                        state={{ deviceModel: `${model.name.replace(' Series', '')} ${variant}` }}
                                                        variant="text"
                                                        sx={{
                                                            width: 'calc(50% - 4px)',
                                                            minWidth: 'auto',
                                                            borderRadius: 2,
                                                            textTransform: 'none',
                                                            fontWeight: 700,
                                                            fontSize: '0.85rem',
                                                            color: '#78E335',
                                                            bgcolor: '#fff',
                                                            boxShadow: '0 -4px 10px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.05)',
                                                            border: '2px solid transparent',
                                                            px: 1,
                                                            py: 0.5,
                                                            '&:hover': {
                                                                bgcolor: '#fff',
                                                                border: '2px solid #78E335',
                                                                color: '#78E335',
                                                                boxShadow: '0 -4px 10px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.05)'
                                                            }
                                                        }}
                                                    >
                                                        {variant}
                                                    </Button>
                                                ))}
                                            </Box>
                                        );
                                    } else {
                                        return (
                                            <Button
                                                component={Link}
                                                to="/contact-us"
                                                state={{ deviceModel: model.name }}
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                    mt: 2,
                                                    borderRadius: 2,
                                                    textTransform: 'none',
                                                    fontWeight: 700,
                                                    bgcolor: '#78E335',
                                                    '&:hover': {
                                                        bgcolor: '#66C22E'
                                                    }
                                                }}
                                            >
                                                Get Instant Quote
                                            </Button>
                                        );
                                    }
                                })()}
                            </Box>
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2, color: '#555', fontWeight: 400 }}>
                                    {isSeries ? seriesInfo.subtitle : `${model.name} Repair Services by CMTC Wireless`}
                                </Typography>

                                {isSeries ? (
                                    <>
                                        {seriesInfo.description.map((para: string, idx: number) => (
                                            <Typography key={idx} variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 2 }}>
                                                {para}
                                            </Typography>
                                        ))}
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


                        <Divider sx={{ mb: 6 }} />

                        {/* FAQ Section */}
                        <Box>
                            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, px: 2 }}>
                                We’re ready for your questions.
                            </Typography>
                            {faqs.map((faq, index) => (
                                <Accordion key={index} elevation={0} disableGutters sx={{ '&:before': { display: 'none' }, borderBottom: '1px solid #eee' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#78E335' }} />} sx={{ px: 0 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>{faq.q}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ px: 0 }}>
                                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                            {faq.a}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
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
        </Box>
    );
};

export default ModelDetail;
