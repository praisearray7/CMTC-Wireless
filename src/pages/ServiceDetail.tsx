import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Box, Container, Typography, Button, Grid, Paper, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { repairServices } from '../data/repairData';
import WhyChoose from '../components/WhyChoose';
import { colors } from '../theme/colors';


const ServiceDetail = () => {
    const { id } = useParams();
    const service = repairServices.find(s => s.id === id);

    if (!service) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Service Not Found</Typography>
                <Button component={Link} to="/" sx={{ mt: 2 }}>Return Home</Button>
            </Container>
        );
    }

    const renderModelList = (models: any[]) => (
        <Grid container spacing={2}>
            {models.map((model) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={model.id}>
                    <Paper
                        component={Link}
                        to={`/service/${service?.id}/${model.id}`}
                        // state={{ deviceModel: model.name }} // State no longer needed for navigation, but keeping it won't hurt. Removing for cleanliness.
                        elevation={0}
                        sx={{
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 2,
                            transition: 'all 0.2s',
                            textDecoration: 'none',
                            '&:hover': {
                                borderColor: colors.primary,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                transform: 'translateY(-2px)'
                            },
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant="body1" fontWeight={600} color="textPrimary">
                            {model.name}
                        </Typography>
                        <Typography variant="caption" color="primary" fontWeight={700}>
                            Repair &rarr;
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box sx={{ pb: 10 }}>
            <SEO
                title={service.name}
                description={`Professional ${service.name.toLowerCase()} services. Fast turnaround, warranty included, and expert technicians.`}
            />
            {/* Header and Sidebar Section */}
            <Box sx={{ bgcolor: '#fff', py: 6, mb: 6 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8}>
                        {/* Left Column: Title and Description */}
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2 }}>
                                <Link to="/" style={{ color: '#000000', textDecoration: 'none' }}>Home</Link>
                                <Typography color="text.primary" fontWeight={600}>{service.name}</Typography>
                            </Breadcrumbs>

                            <Typography variant="h2" component="h1" sx={{ fontWeight: 400, color: '#000000', mb: 4, fontFamily: 'serif' }}>
                                {service.name}
                            </Typography>

                            <Typography variant="h6" sx={{ color: '#000000', mb: 3, fontWeight: 400 }}>
                                iPhone Repair Services for Schools and Small Businesses
                            </Typography>

                            <Typography variant="body1" paragraph sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                                Your organization relies on iPhones to keep students and teams connected. When devices fail, you need a dependable partner that restores uptime fast. CMTC Wireless provides depot repair programs designed for education and small business fleets, with consistent quality, clear SLAs, and streamlined logistics.
                            </Typography>

                            <Box component="ul" sx={{ pl: 2, mb: 3, color: '#000000' }}>
                                <Box component="li"><Typography variant="body1">Screen and glass replacement</Typography></Box>
                                <Box component="li"><Typography variant="body1">Battery and charging issues</Typography></Box>
                                <Box component="li"><Typography variant="body1">No power and boot failures</Typography></Box>
                                <Box component="li"><Typography variant="body1">Button, camera, speaker, and microphone repair</Typography></Box>
                                <Box component="li"><Typography variant="body1">Liquid damage evaluation with recovery when feasible</Typography></Box>
                            </Box>

                            <Typography variant="body1" paragraph sx={{ color: '#000000', mb: 3, lineHeight: 1.6 }}>
                                Every repair includes quality control and a one year warranty for covered work. If an issue returns within the warranty period, we will make it right.
                            </Typography>

                            <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6 }}>
                                Ready to set up or expand your program? <Link to="/contact-us" style={{ color: colors.primary, textDecoration: 'none' }}>Request a quote or open an account</Link>.
                            </Typography>
                        </Grid>

                        {/* Right Column: Sidebar Card */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WhyChoose />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="xl">
                {/* iPhone Series Selection */}
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#000000', mb: 4 }}>
                        Select your iPhone Series
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            "iPhone 16", "iPhone 15", "iPhone 14", "iPhone 13",
                            "iPhone 12", "iPhone 11", "iPhone SE (2022)", "iPhone SE (2020)"
                        ].map((model) => {
                            let seriesId = model.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');
                            const fullSeriesId = `${seriesId}-series`;
                            return (
                                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={model}>
                                    <Paper
                                        component={Link}
                                        to={`/service/${service.id}/${fullSeriesId}`}
                                        elevation={0}
                                        sx={{
                                            pt: "20px",
                                            pb: "20px",
                                            px: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            cursor: "pointer",

                                            borderRadius: "18px",
                                            background: "transparent",

                                            position: "relative",
                                            overflow: "visible",
                                            zIndex: 1,

                                            transition: "all 0.35s ease",

                                            "&:hover": {
                                                pb: "20px", // 👈 box expands only from top
                                                zIndex: 10,
                                                background: "#fff",
                                                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                                            },
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="https://www.gophermods.com/wp-content/uploads/2025/06/iPhone-16-Repairs-Minneapolis.jpg"
                                            alt={model}
                                            sx={{
                                                width: "100%",
                                                maxWidth: 180,
                                                height: "auto",
                                                objectFit: "contain",
                                                mb: 2,
                                                transition: "none", // 👈 image stays still
                                            }}
                                        />

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "#000000",
                                                fontWeight: 600,
                                                fontSize: "1.05rem",
                                                pb: 2,
                                            }}
                                        >
                                            {model}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>

                {/* Detailed Service Information */}
                <Box sx={{ maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#000000' }}>
                        Steps and helpful information about getting your iPhone repaired at CMTC Wireless
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 4, color: '#000000' }}>
                        With over 14 years of experience, our skilled technicians are trained to handle a wide range of iPhone issues,
                        including screen repair, battery replacement, water damage repair, and much more.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#000000', mt: 4 }}>
                        What you need to know to streamline your iPhone repair:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 4, color: '#000000' }}>
                        <Box component="li" sx={{ mb: 1 }}>
                            <Typography variant="body1"><strong>Identify your device:</strong> Find the model number of your device to streamline the check-in process.</Typography>
                        </Box>
                        <Box component="li" sx={{ mb: 1 }}>
                            <Typography variant="body1"><strong>Provide up-to-date contact information:</strong> A phone number and an email address will help us provide updates on the repair process.</Typography>
                        </Box>
                        <Box component="li" sx={{ mb: 1 }}>
                            <Typography variant="body1"><strong>Charge your device:</strong> A full battery will help with the pre-repair and post-repair checklists.</Typography>
                        </Box>
                        <Box component="li" sx={{ mb: 1 }}>
                            <Typography variant="body1"><strong>Know your passwords or passcode:</strong> This is necessary for the pre-repair inspection, repair validation, and post-repair functionality check.</Typography>
                        </Box>
                        <Box component="li" sx={{ mb: 1 }}>
                            <Typography variant="body1"><strong>Create a backup of your data:</strong> It’s always a good practice to have your data backed up for peace of mind.</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: '#000000', mb: 6 }}>
                        We value your feedback and continuously strive to improve our customer experience. Trust us with your iPhone repair needs and experience the difference of our quality service.
                    </Typography>

                    {/* FAQ Section */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#000000' }}>
                            Do you repair iPhone screens?
                        </Typography>
                        <Typography variant="body2" sx={{ bgcolor: '#ffebee', color: '#c62828', p: 2, borderRadius: 1, mb: 2, display: 'inline-block' }}>
                            Effective October 1, 2025, we partner exclusively with schools and small businesses. We no longer offer retail walk-in service for the general public.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#000000' }}>
                            Yes. CMTC Wireless provides depot iPhone screen repair for education and small business accounts. Ship devices to our depot or schedule a pickup through your account. No appointment is required once your account is set up. Our technicians complete a ten week training program and follow a multi-point quality process to deliver consistent, high-quality results across all iPhone models.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#000000' }}>
                            How long does it take to repair an iPhone screen?
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#000000' }}>
                            Turnaround begins when your devices arrive at our depot. Standard SLA options are available, including next business day on approved programs. Most organizations choose one to three business days for screen replacements, not including shipping time. If we find additional issues, we will notify you with an updated quote and timeline before we proceed.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#000000' }}>
                            How much is it to repair an iPhone for a broken screen?
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#000000' }}>
                            Institutional pricing is model-specific and volume-based. We provide exact quotes after we confirm your iPhone models and quantities. Per-device price tiers and protection plan options are available for fleets. If you need help identifying models, see our guide to determine your iPhone model.
                        </Typography>
                        <Button color="primary" sx={{ fontWeight: 600 }}>Request pricing for your models &rarr;</Button>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#000000' }}>
                            Dealing with a liquid damaged iPhone?
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#000000' }}>
                            We do handle liquid damage at the depot. Our team uses professional diagnostics, board-level cleaning, and documented repair processes to recover water-damaged iPhones when possible. You will receive an evaluation report with repairability, recommended next steps, and buyback options for devices that are not economical to repair.
                        </Typography>
                        <Button color="primary" sx={{ fontWeight: 600 }}>Learn about our approach and typical outcomes</Button>
                    </Box>

                    <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#000000' }}>
                            Related services for schools and small businesses
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, color: '#000000' }}>
                            <Box component="li"><Typography variant="body1">Depot repair with SLAs and RMA tracking</Typography></Box>
                            <Box component="li"><Typography variant="body1">Device buyback to unlock budget</Typography></Box>
                            <Box component="li"><Typography variant="body1">White glove deployments and rollouts</Typography></Box>
                            <Box component="li"><Typography variant="body1">Protection plans, warranties, and ongoing support</Typography></Box>
                        </Box>
                    </Box>
                </Box>
                {/* Content */}
                {
                    service.subCategories ? (
                        <Box>
                            {service.subCategories.map((sub) => (
                                <Box key={sub.name} sx={{ mb: 8 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#000000', mb: 3, borderBottom: '2px solid #f0f0f0', pb: 1, display: 'inline-block' }}>
                                        {sub.name}
                                    </Typography>
                                    {renderModelList(sub.models)}
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        <Box>
                            {service.models && service.models.length > 0 ? (
                                renderModelList(service.models)
                            ) : (
                                <Typography variant="body1">No models listed for this category yet.</Typography>
                            )}
                        </Box>
                    )
                }

                {/* Bottom CTA */}
                <Box sx={{ mt: 8, p: 6, bgcolor: '#000000', borderRadius: 4, textAlign: 'center', color: 'white' }}>
                    <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
                        Can't find your device?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        We fix almost everything! Contact us for a custom quote.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" component={Link} to="/contact-us" sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}>
                        Contact Us
                    </Button>
                </Box>
            </Container >
        </Box >
    );
};

export default ServiceDetail;
