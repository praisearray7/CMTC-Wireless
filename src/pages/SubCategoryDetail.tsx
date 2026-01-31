'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Grid,
  Paper,
  Divider,
  Tooltip
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import RepairServiceLayout from '../components/RepairServiceLayout';
import SEO from '../components/SEO';
import { repairServices } from '../data/repairData';
import { useRepairPricing } from '../hooks/useRepairPricing';
import { getRepairDetail, genericRepairTemplate } from '../data/modelSpecificDetails';
import ScheduleAppointmentButton from '../components/ScheduleAppointmentButton';
import GetInstantQuoteButton from '../components/GetInstantQuoteButton';
import { colors } from '../theme/colors';

const SubCategoryDetail = () => {
  const params = useParams();
  // New param structure: [serviceId]/[modelId]/[repairId]
  // repairId is the flat slug (e.g. "lcd-screen-repair")
  const { serviceId, modelId, repairId } = params as {
    serviceId: string;
    modelId: string;
    repairId: string;
  };

  const { rawData, loading } = useRepairPricing();

  // Find the service
  const service = repairServices.find((s) => s.id === serviceId);
  if (!service) return <div>Service not found</div>;

  // We need to deduce the data based on repairId (which is the subSlug)
  const subCategoryData = rawData.find(
    (row) =>
      row['Device']?.toLowerCase() === service.id.replace('-repair', '') &&
      // Match the Sub-Type Title's slug to repairId
      row['Sub-Type Title']
        ?.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '') === repairId
  );

  // If subCategoryData found, we can get the original Repair Type from it
  const repairTypeOriginal = subCategoryData?.['Repair Type'] || '';
  // Used for generic info lookup
  const repairTypeSlug = repairTypeOriginal.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');

  // Get repair detail (generic info)
  const genericRepairInfo = getRepairDetail(repairTypeSlug);

  // Get ALL pricing rows for this model/repair type (to show siblings) using the deduced original repair type
  const pricingRows = rawData.filter(
    (row) =>
      row['Device']?.toLowerCase() === service.id.replace('-repair', '') &&
      (row['Device Model'] === subCategoryData?.['Device Model'] ||
        row['Device Model']?.toLowerCase().replace(/\s+/g, '') ===
          modelId.replace(/-/g, '').toLowerCase()) &&
      // Use the repair type we found from the repairId match
      row['Repair Type'] === repairTypeOriginal
  );

  // Get model name from Excel data or URL
  const modelName = subCategoryData?.['Device Model'] || modelId.replace(/-/g, ' ');

  if (!subCategoryData && !loading) {
    return <div>Subcategory not found</div>;
  }

  // Parse features and specs
  const features = subCategoryData?.['Key Features']
    ? subCategoryData['Key Features']
        .split(',')
        .map((f: string) => f.trim())
        .filter((f: string) => f.length > 0)
    : [];

  const specs: Record<string, string> = {};
  if (subCategoryData?.['Specifications']) {
    // Correct format based on user example: "Display Type - Premium LCD, Touch Sensitivity - OEM Equivalent..."
    // Rows separated by comma (,)
    // Key-Value separated by dash (-)
    const specsList = subCategoryData['Specifications'].split(',').filter((s: string) => s.trim());

    specsList.forEach((item: string) => {
      // Find the separator ' - '
      const separatorIndex = item.indexOf('-');
      if (separatorIndex !== -1) {
        // Determine if it's " - " or just "-"
        // We prefer " - " but if not found, use "-"
        // Actually, let's just split by the first "-" found
        const key = item.substring(0, separatorIndex).trim();
        const value = item.substring(separatorIndex + 1).trim();
        specs[key] = value;
      } else {
        specs[item.trim()] = '';
      }
    });
  }

  // Import genericRepairTemplate at top if not imported, or just use it from proper import
  // Note: I need to make sure genericRepairTemplate is imported.
  // It is exported from '../data/modelSpecificDetails'.

  const title = subCategoryData?.['Sub-Type Title'] || 'Repair Service';
  const price = subCategoryData?.['Sub-Type Price (USD)'] || 'Contact for Price';
  const warranty = subCategoryData?.['Warranty'] || '';

  // Generate dynamic description
  // User requested to use the generic SEO template for all subcategories, overriding Excel short description
  let description = genericRepairTemplate.descriptionOverride || '';

  // Apply replacements
  description = description
    .replace(/{model}/g, modelName)
    .replace(/{repairName}/g, genericRepairInfo.title)
    .replace(
      /{price}/g,
      price === 'Contact for Price' ? 'a low price' : `$${price.replace(/[^0-9.]/g, '')}`
    );

  // Note: We ignore subCategoryData['Description'] for the main text as requested,
  // but we could use it for meta tags if needed. For now, description variable drives content.

  const formatPrice = (priceStr: string) => {
    if (!priceStr || priceStr === 'Contact for Price') return priceStr;
    const cleanPrice = priceStr.replace(/[^0-9.]/g, '');
    return cleanPrice ? `$${cleanPrice}` : priceStr;
  };

  const rightContent = (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        bgcolor: '#fff',
        border: '1px solid #eee',
        borderRadius: 4
      }}
    >
      <Typography variant='h5' component='h2' sx={{ fontWeight: 700, mb: 3 }}>
        Repair Summary
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 2,
          mb: 4
        }}
      >
        <Box>
          <Typography
            variant='caption'
            color='text.secondary'
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'block',
              mb: 0.5
            }}
          >
            Device
          </Typography>
          <Typography
            variant='h6'
            color='text.primary'
            sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}
          >
            {modelName}
          </Typography>

          <Typography
            variant='caption'
            color='text.secondary'
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'block',
              mb: 0.5
            }}
          >
            Service
          </Typography>
          <Typography variant='h6' color='text.primary' fontWeight={700} sx={{ lineHeight: 1.2 }}>
            {genericRepairInfo.title}
          </Typography>
        </Box>
        {genericRepairInfo.image && (
          <Box
            component='img'
            src={genericRepairInfo.image}
            alt={title}
            width='170' // kept from RepairDetail
            height='170'
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

      {/* Pricing Options List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        {pricingRows
          .filter((row) => {
            const subSlug = row['Sub-Type Title']
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '');
            return subSlug === repairId;
          })
          .map((row, idx) => {
            // Create URL slug from Sub-Type Title
            const subSlug = row['Sub-Type Title']
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '');

            // Updated Link URL to flat structure
            const subUrl = `/${serviceId}/${modelId}/${subSlug}`;
            const isCurrent = subSlug === repairId;

            return (
              <Link href={subUrl} key={idx} style={{ textDecoration: 'none' }}>
                <Paper
                  sx={{
                    p: 2,
                    bgcolor: isCurrent ? '#f0fdf4' : '#f8fafc',
                    border: isCurrent ? `1px solid ${colors.primary}` : '1px solid #e2e8f0',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: '#f1f5f9',
                      borderColor: 'primary.main',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Box>
                      <Typography
                        variant='subtitle2'
                        fontWeight={700}
                        sx={{ color: isCurrent ? 'primary.main' : '#334155', mb: 0.5 }}
                      >
                        {row['Sub-Type Title'] === 'Standard'
                          ? 'Service Price'
                          : row['Sub-Type Title']}
                      </Typography>
                    </Box>
                    <Typography variant='h6' color='primary' fontWeight={700}>
                      {formatPrice(row['Sub-Type Price (USD)'])}
                    </Typography>
                  </Box>
                </Paper>
              </Link>
            );
          })}
      </Box>

      <ScheduleAppointmentButton fullWidth sx={{ mb: 2, borderRadius: 2 }} />
      <GetInstantQuoteButton
        href={`/contact-us?deviceModel=${encodeURIComponent(modelName)}&serviceType=${encodeURIComponent(genericRepairInfo.title)}`}
        fullWidth
        sx={{ borderRadius: 2 }}
        variant='outlined'
      />
    </Paper>
  );

  const bottomSection = (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ mb: 6, pl: { xs: 2, md: '70px' }, pr: { xs: 2, md: '70px' } }}>
        <Typography variant='h5' component='h2' sx={{ fontWeight: 700, mb: 2 }}>
          About This Repair
        </Typography>
        {(description || '')
          .split('\n')
          .filter((p: string) => p.trim().length > 0)
          .map((paragraph: string, index: number) => {
            const highlightTerms = [modelName, title, 'CMTC Wireless'].filter(Boolean);

            const escapedTerms = highlightTerms
              .map((t) => t?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
              .join('|');
            const pattern = new RegExp(
              `(\\$[\\d,]+\\.?\\d*|\\b20\\d{2}\\b${escapedTerms ? '|' + escapedTerms : ''})`,
              'gi'
            );

            const content = paragraph.split(pattern).map((part, i) => {
              if (i % 2 === 1) {
                return (
                  <span key={i} style={{ color: '#2e7d32', fontWeight: 600 }}>
                    {part}
                  </span>
                );
              }
              return <span key={i}>{part}</span>;
            });

            return (
              <Typography
                key={index}
                variant='body1'
                sx={{ color: '#000000', mb: 2, fontSize: '1.1rem', lineHeight: 1.6 }}
              >
                {content}
              </Typography>
            );
          })}
      </Box>
    </Box>
  );

  return (
    <RepairServiceLayout
      faqCategory={serviceId === 'iphone-repair' ? 'iphone' : 'default'}
      breadcrumbs={
        <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} sx={{ mb: 4 }}>
          <Link href='/' style={{ textDecoration: 'none', color: '#666' }}>
            Home
          </Link>
          <Link href={`/${serviceId}`} style={{ textDecoration: 'none', color: '#666' }}>
            {service.name}
          </Link>
          <Link href={`/${serviceId}/${modelId}`} style={{ textDecoration: 'none', color: '#666' }}>
            {modelName}
          </Link>
          {/* Intermediate repair type link removed as general page is deleted */}
          {/* <Link href={`/${serviceId}/${modelId}/${repairType}`} ... >{genericRepairInfo.title}</Link> */}
          <Typography color='primary' fontWeight={600}>
            {title}
          </Typography>
        </Breadcrumbs>
      }
      rightContent={rightContent}
      bottomContent={bottomSection}
    >
      <SEO
        title={`${title} | ${service.name}`}
        description={description}
        canonical={`/${serviceId}/${modelId}/${repairId}`}
      />

      <Grid container spacing={4}>
        {/* Left: Content */}
        <Grid size={{ xs: 12 }}>
          <Typography variant='h3' component='h1' sx={{ fontWeight: 700, mb: 2, color: '#000000' }}>
            {title}
          </Typography>

          {/* Key Features */}
          {features.length > 0 && (
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography variant='h5' component='h2' sx={{ fontWeight: 700, mb: 2 }}>
                Key Features
              </Typography>
              <Grid container spacing={2}>
                {features.map((feature: string, idx: number) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircleIcon color='primary' />
                      <Typography variant='body1'>{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Specifications */}
          {Object.keys(specs).length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant='h5' component='h2' sx={{ fontWeight: 700, mb: 2 }}>
                Specifications
              </Typography>
              <Paper variant='outlined' sx={{ borderRadius: 2, overflow: 'hidden' }}>
                {Object.entries(specs).map(([key, value], idx) => (
                  <Box
                    key={key}
                    sx={{
                      display: 'flex',
                      borderBottom:
                        idx !== Object.keys(specs).length - 1 ? '1px solid #eee' : 'none',
                      p: 2,
                      bgcolor: idx % 2 === 0 ? '#fafafa' : '#fff'
                    }}
                  >
                    <Typography sx={{ width: '40%', fontWeight: 600, color: '#555' }}>
                      {key}
                    </Typography>
                    <Typography sx={{ width: '60%', color: '#000000' }}>{value}</Typography>
                  </Box>
                ))}
              </Paper>
            </Box>
          )}

          <Box sx={{ mb: 6, mt: 8 }}>
            <Typography
              variant='h5'
              component='h2'
              sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}
            >
              Why Choose Us?
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  icon: <StarIcon sx={{ fontSize: 40 }} />,
                  title: 'PREMIER CUSTOMER CARE',
                  desc: 'We strive to serve our community with trusted computer services.'
                },
                {
                  icon: <ShuffleIcon sx={{ fontSize: 40 }} />,
                  title: 'QUICK TURNAROUND',
                  desc: 'We work to get your computer back to its best condition in the shortest time possible!'
                },
                {
                  icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
                  title: 'LOW PRICE GUARANTEE',
                  desc: 'We know price is a big factor in your decision to service your device. We are fair in our pricing and stay competitive!'
                },
                {
                  icon: <SettingsIcon sx={{ fontSize: 40 }} />,
                  title: 'LOCAL COMPUTER EXPERTS',
                  desc: 'We provide reliable computer services — whether it’s performance solutions, battery replacement, or device care.'
                }
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%',
                      p: 2
                    }}
                  >
                    <Box sx={{ mb: 2, color: 'text.primary' }}>{item.icon}</Box>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 800, mb: 2, fontSize: '0.9rem', letterSpacing: '0.05em' }}
                    >
                      {item.title}
                    </Typography>
                    <Divider
                      sx={{
                        width: '40px',
                        borderBottomWidth: 2,
                        borderColor: 'text.primary',
                        mb: 2
                      }}
                    />
                    <Typography variant='body2' sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </RepairServiceLayout>
  );
};

export default SubCategoryDetail;
